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
        // clean template
        // render all elements
    }
}
