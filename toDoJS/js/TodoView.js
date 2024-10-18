export default class TodoView {
    _todoListElement = null;
    _newTodoInputElement = null;

    onItemClick = null; // should be triggered to toggle item
    onItemDoubleClick = null; // should be triggered to remove item
    onNewItemSubmit = null; // should be triggered on new item

    constructor(parentElement) {
        this._todoListElement = null; // parentElement.querySelector("");
        this._newTodoInputElement = null; //  parentElement.querySelector("");
    }

    render(todos) {
        let ul = document.getElementById("list");
        let div = document.getElementById("inputDiv")
        let toDoDiv = document.getElementById("listContainer");
        div.classList.add("inputDiv");
        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        let newToDoInput = document.createElement("textarea");
        newToDoInput.classList.add("newToDoInput");
        newToDoInput.rows = 2;
        newToDoInput.placeholder = "Write a task...";

        ul.replaceChildren();
        div.replaceChildren();


        for (const todo of todos) {
            let li = document.createElement("li");
            let checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            li.classList.add("liToDoElements");
            li.addEventListener("click", () => this.onItemClick(todo.id));
            li.addEventListener('dblclick', (event) => {
                if (todo.isDone) {
                    this.onItemDoubleClick(todo.id);
                }
            });

            if (todo.isDone) {
                li.classList.add("done");
                checkBox.checked = true;
            }

            if (todo.topic !== "") {
                li.appendChild(checkBox);
                li.appendChild(document.createTextNode(todo.topic));
                ul.appendChild(li);
            }

        }
        // render input

        newToDoInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                this.onNewItemSubmit(newToDoInput.value)

            }
        });

        checkBox.disabled = true;
        div.appendChild(checkBox);
        div.appendChild(newToDoInput);
        newToDoInput.focus();
    }
}
