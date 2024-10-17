export default class TodoController {
    _model = null;
    _view = null;

    constructor(model, view) {
        this._model = model;
        this._view = view;

        // connect listeners

        this.renderTodos();
    }

    onItemClick() {
        //
    }

    onNewItemSubmit() {
        //
    }

    renderTodos() {
        const todos = this._model.getTodos();
        this._view.render(todos);

        //window.alert("render!") // delete it
    }
}
