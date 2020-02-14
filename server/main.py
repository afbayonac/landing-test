from twisted.web import server, resource
from twisted.internet import reactor, endpoints
from jsonschema import validate
import json

schema = {
    'type' : 'object',
    'properties': {
        'business': {
            'type': 'object',
            'properties': {
                'amount': {'type': 'number'}
            }
        }
    }
}

def enableCORS(methods, request):
    request.setHeader('Access-Control-Allow-Origin', '*')
    request.setHeader('Access-Control-Allow-Methods', ', '.join(methods))
    request.setHeader('Access-Control-Allow-Headers', 'Content-type')
    request.setHeader('Access-Control-Max-Age', '2520')

class Hello(resource.Resource):
    def render_GET(self, request):
        enableCORS(['GET'], request)
        request.setHeader(b"content-type", b"text/plain")
        content = u"Hello!, I am request server test"
        return content.encode("ascii")

class Apply(resource.Resource):

    def render_POST(self, request):
        enableCORS(['POST'], request)
        data = request.content.read().decode("utf-8")
        dataJSON = json.loads(data)
        print(dataJSON)
        try:
            validate(dataJSON, schema)
        except:
            request.setResponseCode(400)
            request.finish
            return server.NOT_DONE_YET

        amount = dataJSON['business']['amount']
        request.setHeader(b"content-type", b"aplication/json")

        if (amount > 50000):
            content = u'{ "decision": "declined"}'
        elif (amount == 50000):
            content = u'{ "decision": "undecided"}'
        elif (0 < amount):
            content = u'{ "decision": "approved"}'
        else:
            request.setResponseCode(400)
            request.finish()
            return server.NOT_DONE_YET

        return content.encode("ascii")

    def render_OPTIONS(self, request):
        enableCORS(['OPTIONS, POST'], request)
        request.finish()
        return server.NOT_DONE_YET

print (' server text run init ')
root = resource.Resource()
root.putChild(b"",  Hello())
root.putChild(b"apply", Apply())

endpoints.serverFromString(reactor, "tcp:8080").listen(server.Site(root))
app = reactor.run()