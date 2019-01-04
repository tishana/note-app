# Note App API

 I created this API with sample data and RESTful routes for use with an external front-end application built with Backbone.js. My goal is to combine the two for a fullstack application.

 You can access the deployed API [here](https://jot-tt.herokuapp.com/api/notes) .  

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
## Challenges During this Project
My original goal for Note App API was to make this a fullstack application with a front end portion in Backbone.js. I've never worked with Backbone.js and this  proved to be a huge hurdle. 

In the end, all front end frameworks intend to do the same thing, display your data. However, learning THIS framework took some serious brain gymnastics, and I lost a lot of valuable time due to a trivial mistake: BACKBONE IS NOT ES6 COMPATIBLE!

After figuring this out, I had to start all over because I was constantly scrapping what I thought was bad code. 

This experience has taught me a lot about learning on my own. I wasn't able to get any instructor assistance due to the nature of this project, but I feel more prepared for the job market and confident that I can teach myself anything.

--------------------------------------------
## Future Plans for Note App API:



Another goal is to use this API for other separate front end applications, as it is now, but with full CRUD capabilities regardless of the front end application.

I also want to add user authentication so anyone can log in and see their own notes.On top of that I would like to build out a way for people to send notes via email or SMS.


