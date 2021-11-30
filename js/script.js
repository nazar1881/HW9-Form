let input = document.getElementById('enter-todo-input');
let btn = document.getElementById('add-todo-btn');
let ul = document.getElementById('ul');
let form = document.forms.form;
let invalidMessage = document.createElement('div');
let regExp = /^[\s\w\()]{2,15}$/; 

function createTodoItem() {
    let li = document.createElement('li');
    let delBtn = document.createElement('button');
    delBtn.classList.add('remove-todo');
    ul.appendChild(li);
    li.innerText = input.value;
    li.append(delBtn);
    li.classList.toggle("not-done");
}

form.addEventListener('submit', function(e){
    e.preventDefault(); 
});

input.addEventListener('input', function(){
    if (!regExp.test(input.value)) {
        input.style.border = 'red 2px solid';
        input.style.color = 'red';
    } else if (regExp.test(input.value)) { 
        input.style.border = 'none';
        input.style.color = 'black';
        invalidMessage.classList.remove('invalidMessage');
        invalidMessage.innerText = '';
    }
});

btn.addEventListener('click', function(){
    if (!input.value) {
        alert('Error, please enter your task.');
    } else {
        if (!regExp.test(input.value)) {
            invalidMessage.classList.add('invalidMessage');
            invalidMessage.innerHTML = '<strong>Your "Todo-item" can contain:</strong> latin letters in any case, numbers from 0-9, length: 2-15 characters, spaces and special characters.';
            btn.after(invalidMessage);
        } else {     
            createTodoItem();
            input.value = '';
        }
    } 
});

ul.addEventListener('click', function(event){
    let i = event.target;
    if (i.tagName === 'LI') {
        i.classList.toggle("done");
    } else if (i.tagName === 'BUTTON') {
       i.closest('li').remove();
    }; 
});