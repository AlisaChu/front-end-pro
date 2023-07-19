    let btn = document.getElementById('msgButton');
    let input = document.getElementById('msgInput');
    let todoList = document.getElementById('todoList');
    btn.addEventListener('click', function() {
        let text = input.value.trim();

        if(text === "") {
            alert("Input cannot be empty");
            return;
        }

        let li = document.createElement('li');
        li.innerText = text;
        todoList.prepend(li);

        input.value = "";
    });

    input.addEventListener('keydown', function(e) {

    });

