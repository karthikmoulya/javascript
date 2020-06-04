var age = prompt('Please enter your age');
if (Number(age) < 18) {
  alert('Sorry, you are too young to drive this car. Powering off');
} else if (Number(age) === 18) {
  alert('Congratulations on your first year of driving. Enjoy the ride!');
} else {
  alert('Powering On. Enjoy the ride!');
}

//Make the above code have a function called checkDriverAge()

function checkDriverAge() {
  var age = prompt('Please enter your age');
  if (Number(age) < 18) {
    alert('Sorry, you are too young to drive this car. Powering off');
  } else if (Number(age) === 18) {
    alert('Congratulations on your first year of driving. Enjoy the ride!');
  } else {
    alert('Powering On. Enjoy the ride!');
  }
}

// // checkDriverAge();

////2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

var checkDriverAge2 = function (age) {
  var age = prompt('Please enter your age');
  if (Number(age) < 18) {
    alert('Sorry, you are too young to drive this car. Powering off');
  } else if (Number(age) === 18) {
    alert('Congratulations on your first year of driving. Enjoy the ride!');
  } else {
    alert('Powering On. Enjoy the ride!');
  }
};

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!"

function checkDriverAge(age) {
  if (Number(age) < 18) {
    return 'Sorry, you are too young to drive this car. Powering off';
  } else if (Number(age) === 18) {
    return 'Congratulations on your first year of driving. Enjoy the ride!';
  } else {
    return 'Powering On. Enjoy the ride!';
  }
}

console.log(checkDriverAge(25));
