// todo example
// {
//  id: 1,
//  name: "my todos"
//  isDone: false
// }

export default class TodoModel {
    _todos = [];

    constructor() {
        this._todos = []; // read from localStorage
    }

    getTodos() {
        return this._todos;
    }

    addTodo(name) {
        // add new item
    }

    removeTodo(id) {
        // delete item by id in array
    }

    toggleTodo(id) {
        // toggle item
    }

    _updateLocalStorage() {
        // update local storage here
    }
}
