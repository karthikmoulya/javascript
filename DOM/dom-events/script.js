var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li, toggleButton);
  input.value = '';

  var toggleButton = document.createElement('button');
  toggleButton.appendChild(document.createTextNode('Done!'));
  li.appendChild(toggleButton);
  toggleButton.onclick = underlineListElement;

  var deleteButton = document.createElement('button');
  deleteButton.appendChild(document.createTextNode('delete'));
  li.appendChild(deleteButton);
  deleteButton.onclick = removelineListElement;
}

function underlineListElement(event) {
  event.target.parentNode.classList.toggle('done');
}

function removelineListElement(event) {
  event.target.parentNode.remove();
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);
