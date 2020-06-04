var todos = [
  'clean room',
  'brush teeth',
  'exercise',
  'study javascript',
  'eat healthy',
];

var todos2 = [
  'clean room',
  'brush teeth',
  'exercise',
  'study javascript',
  'eat healthy',
];

for (let index = 0; index < todos.length; index++) {
  todos[index] = todos[index] + '!';
}

function logTodos(todo, i) {
  console.log(todo, i);
}

todos.forEach(logTodos);
todos2.forEach(logTodos);

var count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

var count1 = 0;
do {
  console.log(count1);
  count1++;
} while (count1 < 10);
