# awsNginx-Node App

Task 1 Solution:

This repository holds code for Node.js application to view Nginx Logs. The application is running on EC2 ubuntu instance.

The application can be accessed by going to the link: http://ec2-3-18-215-194.us-east-2.compute.amazonaws.com/

The API routes includes:

1. /login :- It is used to land to dashboard page to view the nginx logs. '/' home also redirects to login.
2. /signup :- You need to signup using email address, set the password. Then will be redirected to verify page and will receive verification email. You will be required to verify your email first before login.
3. /dashboard :- It provides list view to view the logs of nginx server. Logs are sorted for newest logs to be seen first.

4./dashboard/filter :- This path is used to send queries to filter out the logs on the basis of date, IP etc.

# Authentication - Authorization- 
AWS Cognito


Task 2 Solution:
- What problems will your application face when ELB(load balancer) is used to route requests?
- Suggest a scalable solution when ELB (Elastic load balancer) is used. 
Problem can be with redirection of HTTP traffic to HTTPS. I will be needing different instances to handle the requests.






