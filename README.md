# Landing test

App to technical assignment of lendingFront [live](http://test.lullabylab.com)

![googlecloud][2]
## To run application

Fist download the repo 

### Frontend
    
    cd loanding-test
    npm i 
    npm run build:watch

### Backend

    cd loanding-test/server
    pip install requirements.txt
    python main.py 

## DataBase

For a data base to bank loan i would started by something like that:

![database][1]

[1]: https://raw.githubusercontent.com/afbayonac/landing-test/master/database.png
[2]: https://raw.githubusercontent.com/afbayonac/landing-test/master/leanding-test.png

## Twisted vs Nodejs

* Nodejs and twisted are asynchronous this mean they are really great for handle I/O 
events into a network, they no block process while waiting for other events.

* Nodejs was made for web application , its have a environment with libraries and 
framework that make our lives easier.

* Twisted is more robust is make in python and support more protocols, is for make 
something low-level networking stuff, but not conventional web applications.


## Twisted vs Flask

- Flask is a micro-framework and its help us to develop a app (like API-REST), he 
comes with the essentials to make that, for a simple and agile development but no more.







