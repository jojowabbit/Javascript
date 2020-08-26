// Font Awesome Icons
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import { v4 as uuidv4 } from "uuid";

// Main Style File
import "../style/main.scss";

// Model
class Model {
  constructor() {
    // State of model, prepopulated with array of objects
    this.todos = [
      { id: 1234, text: "todo 1", complete: false },
      { id: 1234, text: "todo 1", complete: false },
    ];
  }
  // Method Add, Edit, Delete, Toggle Completion
  addTodo(todoText) {
    const todo = { id: uuidv4(), text: todoText, complete: false };
    this.todos.push(todo);
  }
  editTodo(id, updatedText) {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? { id: todo.id, text: updatedText, complete: todo.complete }
        : todo
    );
  }
  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
  toggleTodo(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? { id: todo.id, text: todo.text, complete: !todo.complete }
        : todo
    );
  }
}

// View
class View {
  constructor() {
    // The root element
    this.app = this.getElement("#root");
    // Title of the app
    this.title = this.createElement("h1");
    this.title.textContent = "Todos";
    // The Form
    this.form = this.createElement("form");
    // The Input with Type = text
    this.input = this.createElement("input");
    this.input.type = "text";
    this.input.placeholder = "Add todo";
    this.input.name = "todo";
    // The Button
    this.submitButton = this.createElement("button");
    this.submitButton.textContent = "Submit";
    // The UL of Todo List
    this.todoList = this.createElement("ul", "todo-list");
    // Append input & button to form
    this.form.append(this.input, this.submitButton);
    // Append title, form, ul to App
    this.app.append(this.title, this.form, this.todoList);
  }
  // Create Element with optional CSS Class
  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) {
      element.classList.add(className);
    }
    return element;
  }
  // Retrieve element from DOM
  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }
}

// Controller
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}

const app = new Controller(new Model(), new View());
app.model.addTodo("third todo");
console.log(app.model.todos);
