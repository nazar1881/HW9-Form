let input = document.getElementById('enter-todo-input');
let btn = document.getElementById('add-todo-btn');
let ul = document.getElementById('ul');
let form = document.forms.form;
let invalidMessage = document.createElement('div');
let regExp = /^[\s\w]{2,15}$/; 

function createTodoItem() {
    let li = document.createElement('li');
    let delBtn = document.createElement('button');
    delBtn.classList.add('remove-todo');
    ul.appendChild(li);
    li.innerText = input.value;
    li.append(delBtn);
    li.classList.add("not-done");
}

form.addEventListener('submit', function(e){
    e.preventDefault(); 
    if (regExp.test(input.value)) {
        createTodoItem();
        input.value = '';
    };
});

input.addEventListener('input', function(){
    if (!regExp.test(input.value)) {
        input.classList.add('invalid');
        input.classList.remove('valid');
        invalidMessage.classList.add('invalidMessage');
        invalidMessage.innerHTML = '<strong>Your "Todo-item" can contain:</strong> latin letters in any case, numbers from 0-9, length: 2-15 characters, spaces and special characters.';
        btn.after(invalidMessage);
    } else if (regExp.test(input.value)) { 
        input.classList.remove('invalid');
        input.classList.add('valid');
        invalidMessage.classList.remove('invalidMessage');
        invalidMessage.innerText = '';
    }
});

btn.addEventListener('click', function(){
    if (!input.value) {
        alert('Error, please enter your task.');
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