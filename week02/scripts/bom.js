const input = document.getElementById('favchap');

const button = document.querySelector('button');

const list = document.getElementById('list');

const li = document.createElement('li');

const delButton = document.createElement('button');


li.textContent = input.value;

delButton.textContent = '❌';

li.append(delButton);

list.append(li);
