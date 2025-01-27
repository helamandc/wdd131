const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.getElementById('list');


button.addEventListener('click', function () {
    const li = document.createElement('li');
    const delButton = document.createElement('button');
    if (input.value.trim() !== '') {
        li.textContent = input.value;
        delButton.textContent = '❌';
        li.appendChild(delButton);
        list.appendChild(li);

        input.value = '';
        input.focus();

        delButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        })

    } else {
        input.focus();
    }
})






