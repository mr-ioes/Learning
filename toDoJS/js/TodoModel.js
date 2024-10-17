// todo example
// {
//  id: 1,
//  name: "my todos"
//  isDone: false
// }

export default class TodoModel {
    _todos = [];

    onToDoUpdated = null;

    constructor() {
        this._todos = JSON.parse(localStorage.getItem("listOfToDosAsJSON")); // read from localStorage
    }

    getTodos() {
        return this._todos;
    }

    addTodo(toDoText) {
        const todo = {
            id: this._todos.length,
            topic: toDoText,
            isDone: false,
        }
        this._todos.push(todo);
    }

    removeTodo(id) {
        // delete item by id in array
        const objectToDelete = this._todos.findIndex((obj) => obj.id === id);
        this._todos = this._todos.splice(objectToDelete, 1);
    }

    toggleTodo(id) {
        // toggle item
        const objectToToggleIndex = this._todos.findIndex((obj) => obj.id === id);
        this._todos[objectToToggleIndex].isDone = !this._todos[objectToToggleIndex].isDone;
        this._updateLocalStorage();
        this.onToDoUpdated();
    }

    _updateLocalStorage() {
        // update local storage here
        localStorage.setItem("listOfToDosAsJSON", JSON.stringify(this._todos));
    }

    _clearLocalStorage() {
        localStorage.clear();
    }
}
