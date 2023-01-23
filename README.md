# Note App API

 I created this API with sample data and RESTful routes for use with an external front-end application. My goal is to combine the two for a fullstack application.

 <!-- You can access the deployed API [here](https://jot-tt.herokuapp.com/api/notes) . Please bear in mind that it may take a few moments to load the data because it is deployed to Heroku and may be hibernating. -->

--------------------------------------------
## User Stories

* I can create a note (Create Note).
* I can view a list of notes (Read Note).
* I can edit a note (Update Note).
* I can view a note (Read Note).
* I can delete a note (Delete Note).

--------------------------------------------

## Technologies Used for Note App API:

* Node.js
* Express.js
* Mongoose and MongoDB
* Heroku (in the past)


--------------------------------------------
## How to Install Note App API locally:

* Fork and clone this repository to your machine
* Change into the new directory
* In your IDEs terminal, run npm install:

```
$ npm install

```
<!-- * Open another terminal tab, and run Mongod

```
$ mongod

``` -->
* Open another terminal tab, and run nodemon
```
$ nodemon

```
* Next, seed the database by opening the browser and navigating to http://localhost:3001/seed 

* Lastly, once you see "done!" navigate to http://localhost:3001/notes

You're all set to run Note App API on your machine. You will see notes on the main page. You can delete these, and create your own either in the JSON file (then reseeding your database with node seeds.js) or using any front end framework. Have fun with it... 

--------------------------------------------
## Challenges During this Project

My original goal for Note App API was to make this a fullstack application. Since I would like to teach myself other frontend applications, I decided to keep the frontend and backend separate, using the backend as an API for any frontend.

I decided to use Node, Express, and Mongoose because I was already familiar with them. I like the ease of use in creating RESTful routes with Express. I also like the ease of creating simple data models with Mongoose, and I want to explore creating more complex models.

I decided to build a frontend application with React, which you can view [here](https://github.com/tishana/jot-app).


--------------------------------------------
## Future Plans for Note App API:

A goal is to use this API for other separate front end applications, as it is now, but with full CRUD capabilities regardless of the front end application.

I also want to add user authentication so anyone can log in and see their own notes. On top of that I would like to build out a way for people to send notes via email or SMS.


