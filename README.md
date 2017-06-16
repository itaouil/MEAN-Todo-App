# **MEAN-Todo-App (Angular)**

A Mongo, Express, Angular, Node TODO application. The technology stack is visible from the acronym MEAN, however let me point out the following facts:

1. For Mongo (database layer) I used MLAB that offers a mongo database on the cloud. You consume the API offered to manipulate, push, edit your non relational database.

2. Well Express is just Express 4.0.
3. Angular is Angular 2.
4. Node is version 8, so I am using/trying ES6.

## **Pic**
![alt] (https://github.com/itaouil95/MEAN-Todo-App/blob/master/todo.png)

## **Development Process**

1. **Basic Structure**

I started by setting up the structure of the project, hence, creating our server (app.js), installing and requiring modules, setting up the middlewares, routes, view engine and static folders.

Use the express generator, is faster !

2. **Create routes/api endpoints + DB set up**

We start by setting a mongodb on the clound using MLAB (free package), creating a user (for access control) as well as some documents to start with.

The following step is to set up the routes of the API (database layer + backend) that our client (Angular) is going to consume during the interaction with the user. We set up the database connection by using the mongojs module for each route (add, update, get todos) we use the realative method offered by the module.

3. **Set Up Client**

Setting Up Angular2 wasn't that straight forward at first glance, but it was the next step. This task was just a matter of copying and pasting the quickstart files such as tsconfig.js etc and paste them in the client folder I created in the folder structure. Moreover, I installed bower (client side package manager) by which I installed jquery and bootstrap, this is makes more reliable than actually using CDN's.

4. **User Interface**

I proceeded by cloning the Angular2 quickstart repo and literally copying all of the configuration files the root of our structure under the client folder. I then moved the index.html into my views folder (set up on step 1) and changed the references to the .js, .css files import to match our structure. Afterwards I had to change the systemjs.config.js to avoid 404 Not Found errors.

5. **Services**

This one of the most interesting parts. We leave the world of bootstrap and user interface and we dive deeper into Angular2 world. A service is a class whose main task is to offer data actions (consuming API's, reading CSV, etc) in a modular manner such that it can be re-used between the many components we might have in our app.

We create a *services* folder and we create out *todo.service.ts* where we include our **Injectable** module (for dependency injection) and we define our constructor that takes in an HTTP module instance and defines a method that makes the call to the API and returns a response.

We do create as well a commons structure that holds our response attributes, again for modularity and re-usability purposes.

6. **Add Todo**

Add method in service that consume API built, add method in todo component that on click event calls method in the class that itself calls the service method.

Add element to UI and clear storage.

7. **Edit Todo**

This has been by most the most exciting part, as not only we had to create a new service method, but we got to play around with Angular2 directives like ```[class.disable]``` and ```[class.hidden]```, which has been pretty cool. Just a side note that ```[class.hidden]``` differently from ```ngIf``` only plays around with the display property in CSS and **DOES NOT** remove the element from the DOM.

8. **Delete Todo**

Give a call to the API, subscribe to the call and delete todo from array.
