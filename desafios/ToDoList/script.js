const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('listContainer')
const addButton = document.getElementById('addButton')

function addTask() {
    if (inputBox.value === '' || inputBox.value.length === '') {
        alert('Você deve inserir alguma tarefa para prosseguir.')
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = ''
}

listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'li') {
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'span') {
        e.target.parentElement.remove();
    }
}, false);