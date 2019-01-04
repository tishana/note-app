# Note App API

 I created this API with sample data and RESTful routes for use with an external front-end application built with Backbone.js. My goal is to combine the two for a fullstack application.  

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
* MLab
* Heroku

--------------------------------------------
## How to Install Note App API locally:

* Fork and clone this repository to your machine
* Change into the new directory
* Run npm install:

```
$ npm install

```
* Open another terminal tab, and run Mongod

```
$ mongod

```
* Open yet another terminal tab, and run nodemon
```
$ nodemon

```
* In your first terminal tab, seed the database:
```
$ node seeds.js

```
* Lastly, open a browser window, and navigate to http://localhost:3001

You're all set to run Note App API on your machine. You will see notes on the main page. You can delete these, and create your own. Have fun with it... 


--------------------------------------------
## Future Plans for Note App API:

My original goal for Note App API was to make this a fullstack application with a front end portion in Backbone.js. This proved to be a huge hurdle 

Another goal is to use this API for other separate front end applications, as it is now, but with full CRUD capabilities regardless of the front end application.

I also want to add user authentication so anyone can log in and see their own notes.On top of that I would like to build out a way for people to send notes via email or SMS.


