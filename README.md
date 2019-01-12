# BETTERNOTE

[SimplyTravel](https://simply-travel.herokuapp.com/#/) is a FullStack original group project created by engineers John Huang, Jorge Bocanegra, Henry Chu and Alejandro Chang. SimplyTravel is a single page application that uses the MERN (MongoDB, Express.js, React/Redux and Node.js) Stack. The project was designed and built in 8 days.

SimplyTravel is a one-stop-shop traveling application that allows user to choose a place on the map around the world, based on their location, and be able to get the closest aiport, cheapest flight and most direct way to get to the specific place chosen. .

## Home page
![alt text]()

## Main Page
![alt text]()

## Features
* Secured backend user authentication using MongoDB Database using mLab.
* Created a database schema to define a User for registration and login purposes.
* Setup Server with Node.js and Express.js.
* Incorporated Google's Javascript Geolocation/Geocode API to be implement google maps and users location.
* Implemented multiple API calls to different providers for location data, hotels data and airport/airfare data.
* Used React as the UI library of choice for component rendering and Redux as a state management library.

# Fetching User's Location
Through the Google's geolocation we're able to get a specific user's location which is necessary for the functionality of this application. 

<!-- # Saving User's updates
There are many different ways to handle the users's input which is created inside the Quill Editor. At first, I used a setTimeout function that was triggered after every three seconds updating the current note that the user was using. However, after close inspection and the realization that setTimeout is determined by a series of factors that could affect the user's experience I opted out to use a more efficient approach - debounce. Debounce is a much better event handler, as it allows us to group multiple sequential calls into a single one. The sequential calls in this situation occur while the user is typing in the text editor. As soon as the user stops typing, the event is triggered through debounce updating the user's current note body and title. 

```javascript

``` -->

# Betternote in Action
![](/app/assets/images/)


# Project Design
In the 8 day-window for working on this project. SimplyTravel was focused on the aesthetic design, user experience and ultimately the main functionality of the application. The project was split among group members giving equal access to multiple experiences in both frontend technologies such as React, Redux and backend technologies including Node.js and Express.js. 


<!-- # Future Features
* Tags and Taggings ability, with search on notes key-words
* Notebooks (editing and creating features)
* Sorting Search bar based on Notes or Notebook -->
