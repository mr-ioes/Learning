export default class TodoView {
    _todoListElement = null;
    _newTodoInputElement = null;

    onItemClick = null; // should be triggered to toggle item
    onNewItemSubmit = null; // should be triggered on new item

    constructor(parentElement) {
        this._todoListElement = null; // parentElement.querySelector("");
        this._newTodoInputElement = null; //  parentElement.querySelector("");
    }

    render(todos) {
        // render all elements
        let ul = document.getElementById("list");
        // clean template
        ul.replaceChildren();

        for (const todo of todos) {
            let li = document.createElement("li");
            li.classList.add("liToDoElements");
            li.addEventListener("click", () => this.onItemClick(todo.id));
            if (todo.isDone)
                li.classList.add("done");

            li.appendChild(document.createTextNode(todo.topic));
            ul.appendChild(li);
        }
    }
}


// appendchild
// const item = `<li>${item.}</li>`;
// eventlistener
//
//document.createElement()
