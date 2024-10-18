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
        let idFilter = 0;
        for (const todo of this._todos) {
            if (todo.id > idFilter)
                idFilter = todo.id;
        }
        const todo = {
            id: idFilter + 1,
            topic: toDoText,
            isDone: false,
        }
        this._todos.push(todo);
        this._updateLocalStorage();
        this.onToDoUpdated();
    }

    removeTodo(id) {
        for (let i = this._todos.length - 1; i >= 0; --i) {
            if (this._todos[i].id === id) {
                this._todos.splice(i, 1);
            }
        }
        this._updateLocalStorage();
        this.onToDoUpdated();

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
