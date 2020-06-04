var database = [
  {
    userName: 'Karthik',
    password: 'karthik123',
  },
  {
    userName: 'Blacky',
    password: 'black123',
  },
  {
    userName: 'Keerthi',
    password: 'keerthi123',
  },
];

var newsFeed = [
  {
    userName: 'Bobby',
    timeLine: 'hahahaha',
  },
  {
    userName: 'Simha',
    timeLine: 'graaaa',
  },
];

function isUserValid(userName, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].userName === userName &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(user, pass) {
  if (isUserValid(user, pass)) {
    console.log(newsFeed);
  } else {
    alert('Sorry, wrong username or password');
  }
}

var userNamePrompt = prompt('Whats your username?');
var passwordPrompt = prompt('Whats your password?');

signIn(userNamePrompt, passwordPrompt);
