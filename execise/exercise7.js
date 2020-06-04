// Create an object and an array which we will use in our facebook exercise.

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var obj = {
  username: 'Karthik',
  password: 'karthik123',
};

var database = [obj];
console.log(database[0]);

var newsfeed = [
  { username: 'karthik', timeline: 2018 },
  { username: 'Keerthi', timeline: 2019 },
  { username: 'Blacky', timeline: 2020 },
];

console.log(newsfeed);
