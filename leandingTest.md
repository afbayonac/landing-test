## Your assignment is to design the system:

1. Read all the test and before starting solving it, send to the interviewer via email
the amount of time you estimate would take you to complete the test and a
delivery date/hour.
2. How would you design the database and its tables?
3. Write a small application that simulates the application process. The information does not
need to be stored in a database. The following are the application specifications:

    a. Frontend Javascript client in React + Redux + React Router that catch the
    fields info and send it to back end server:
    
        i. The application should capture the following fields:
            1. Business: Tax Id, Business Name, Business Address, City, State, 
            Postal Code, Requested amount
            2. Owner: Social Security Number, Name, email, address, city, state,
             postal code
            3. On the third page, display the loan decision based on therequested 
            amount calculated by the back end server.
        ii.Implement CSS styles from scratch, do not use any existing CSS library 
        like Bootstrap, Material Design or another similar one

    b. Back end API - Twisted or Tornado (pick one) - :
    
        i. Enable the endpoints that receive the data that comes from the front 
        end and evaluate the loan decision:
            If requested_amount > 50000 then Declined
            If requested_amount = 50000 then Undecided
            If requested_amount < 50000 then Approved
            
    c. Share the url of the resulting code in a versioning server: Ie, Github, Gitlab, Bitbucket.
    
    d. Share the url or your Deployed project in your prefered platform: AWS, Heroku, Dotcloud, Appfog, etc
4. Identify the advantages or disadvantages between twisted or tornado (pick one) and:
    
    a. Django or Flask
    
    b. Nodejs
5. Send to the interviewer the amount of time you spent doing the test, if different with the
estimated time of point 1 explain the reason.
If you have any questions in regards to the test don’t hesitate in sending an email to the
interviewer.

Happy coding!!
---

LendingFront’s loan system is designed for businesses that need fast access to capital. We
believe that a healthy cash flow should drive the decision of granting a loan rather than a
personal credit score.

LendingFront would like to create a loan platform that would allow its customers to apply for a
loan and keep track of the status of their application. Loan applications go through a multi-step
approval process: analysis based on basic criteria, credit verification, loan amount qualification
and loan document preparation.

During the application submission process, the small business owner creates the login
credentials (email and a password) and enters basic personal and business information.
LendingFront then collects additional information such as business credit reports, bank
transactions and non-traditional data such as yelp reviews using the basic information provided.
At this point LendingFront has all the data it needs to make an automated loan decision. The
decision is presented to the user, and if the user accepts the terms the loan is funded. If the
user logs back in after submitting a loan application, the system should present the current
Application status (“Pending”, “Approved”, “Denied”) or Loan status (“Active”, “Closed”) if a loan
has already been granted. If the loan is active, the application should display the remaining
balance on their loan, past payment activity and pending payments.
After a loan has been granted and funded, LendingFront starts to collect payments daily. The
funds collection process should be automatic. The application needs to create a daily file with all
due payments. This file is then sent to the ACH network and the funds are eventually deposited
in LendingFront’s bank account. Next day, LendingFront receives a file with all the transactions
that could not be collected. The loan platform should process this file and update the payment
status accordingly.
