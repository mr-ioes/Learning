import TodoView from "./TodoView.js";
import TodoModel from "./TodoModel.js";

export default class TodoController {
    _model = null;
    _view = null;

    constructor(model, view) {
        this._model = model;
        this._view = view;

        this._view.onItemClick = this.onItemClick.bind(this);
        this._view.onNewItemSubmit = this.onNewItemSubmit.bind(this);
        this._view.onItemDoubleClick = this.onItemRemove.bind(this);
        this._model.onToDoUpdated = this.renderTodos.bind(this);

        // connect listeners

        this.renderTodos();
    }

    onItemClick(id) {
        this._model.toggleTodo(id)
    }

    onNewItemSubmit(toDoText) {
        this._model.addTodo(toDoText)
    }

    onItemRemove(id) {
        this._model.removeTodo(id);
    }

    renderTodos() {
        const todos = this._model.getTodos();
        this._view.render(todos);
    }
}