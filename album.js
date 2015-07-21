// Create a variable that holds your name
var myName = "Rick";

// Create an object that holds your personal information
var myInfo = {
  age: 51,
  last_company: "General Motors",
  marital_status: "Married",
  spouse: "Susan"
};

// Add your name as a new key on the info object
myInfo.name = myName;

// Create another object that represents a record/album
var Eliminator = {
  name: "Eliminator",
  artist: "ZZ Top",
  year: 1981,
  sales: 11000000,
  number_of_hits: 4
};


var backToBasics = {
  name: "Back to Basice",
  artist: "Christina Aquilera",
  year: 2006,
  sales: 4000000,
  number_of_hits: 6
};

var rebelHeart = {
  name: "Rebel Heart",
  artist: "Madonna",
  year: 2014,
  sales: 1200000,
  number_of_hits: 5
};

// Create an array that holds records
var recordArray = [Eliminator];
recordArray.push(backToBasics, rebelHeart);

// Add at least two more album objects to the array



/*
Create a function that adds a new rating
property to an album. The function should take
two arguments.
  1. album - The name of the album
  2. rating - A numeric rating from 1-10
*/
var addRating = function (album, newRating) {
  album.rating = newRating;
};

  // Add the rating to the album


/*
Create a function that loops over your record
array and adds the same rating (of your choice)
to each one.
*/
var modifyAlbums = function (albumList) {
  for (var i=0; i < albumList.length; i++) {
    addRating(albumList[i], 7);
  }
};
// Call the function that starts modifying the array
modifyAlbums(recordArray);
  
// console.log your array of records
console.log(recordArray);

// Display the new array in the browser
var recordDom = document.getElementById('records');

/*
 JSON.stringify() is a built-in function
 on all major browsers that parses a complex
 structure like an array or JavaScript 
 object and lets you see it as a string.
*/
recordDom.innerHTML = JSON.stringify(recordArray, null, 2);
