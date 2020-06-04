//Array Methods

//concat() method

var array = [10, 20, 30, 20, 15];

var newArray = array.concat([50, 60, 25]);

console.log(array);
console.log('After concat : ' + newArray);

var sarray = [1, 2, 3];
console.log(sarray.fill('Hello'));

console.log(array.findIndex(x => x === 20));
console.log(array.find(y => y > 10 && y < 20));
console.log(array.join(' '));
console.log(array.lastIndexOf(20));
console.log(array.map(x => x * 10));
console.log(array.unshift(1));
console.log(array.slice(0, 2));
