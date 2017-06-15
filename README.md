# **MEAN-Todo-App (Angular)**

A Mongo, Express, Angular, Node TODO application. The technology stack is visible from the acronym MEAN, however let me point out the following facts:

1. For Mongo (database layer) I used MLAB that offers a mongo database on the cloud. You consume the API offered to manipulate, push, edit your non relational database.

2. Well Express is just Express 4.0.
3. Angular is Angular 2.
4. Node is version 8, so I am using/trying ES6.

## **Development Process**

1. **Basic Structure**

I started by setting up the structure of the project, hence, creating our server (app.js), installing and requiring modules, setting up the middlewares, routes, view engine and static folders.

Use the express generator, is faster !

2. **Create routes/api endpoints + DB set up**

We start by setting a mongodb on the clound using MLAB (free package), creating a user (for access control) as well as some documents to start with.

The following step is to set up the routes of the API (database layer + backend) that our client (Angular) is going to consume during the interaction with the user. We set up the database connection by using the mongojs module for each route (add, update, get todos) we use the realative method offered by the module.

3. **Set Up Client**

Setting Up Angular2 wasn't that straight forward at first glance, but it was the next step. This task was just a matter of copying and pasting the quickstart files such as tsconfig.js etc and paste them in the client folder I created in the folder structure. Moreover, I installed bower (client side package manager) by which I installed jquery and bootstrap, this is makes more reliable than actually using CDN's.

4 **User Interface**
