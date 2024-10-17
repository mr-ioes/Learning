import TodoModel from "./TodoModel.js";
import TodoView from "./TodoView.js";
import TodoController from "./TodoController.js";

const parentElement = document.getElementById("body");

const model = new TodoModel();
const view = new TodoView(parentElement);
const controller = new TodoController(model, view);
