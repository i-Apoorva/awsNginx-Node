# awsNginx-Node App

This repository holds code for Node.js application to view Nginx Logs. The application is running on EC2 ubuntu instance.

The application can be accessed by going to the link: http://ec2-3-18-215-194.us-east-2.compute.amazonaws.com/

The API routes includes:

1. /login :- It is used to land to dashboard page to view the nginx logs. '/' home also redirects to login.
2. /signup :- You need to signup using email address, set the password. Then will be redirected to verify page and will receive verification email. You will be required to verify your email first before login.
3. /dashboard :- It provides list view to view the logs of nginx server. Logs are sorted for newest logs to be seen first.

4./dashboard/filter :- This path is used to send queries to filter out the logs on the basis of date, IP etc.

# Authentication - Authorization- 
AWS Cognito is used.

# PM2
PM2 is a daemon process manager that will help you manage and keep your application online. It is being used to manage instances of the application and application stays online even if we make changes to the application.

# scaling
By Using ELB we can create a scalable solution for our app, which will provide us autoscaling, health check, load distribution and hence redundancy. We can use elastic bean stalk to deploy the application.
ALB (Application load balancer can be used, set up as such to make sure all requests from the same client end up on the same server.






