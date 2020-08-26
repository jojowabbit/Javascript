// Font Awesome Icons
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

// Main Style File
import "../style/main.scss";

// Model
class Model {
  constructor() {}
}

// View
class View {
  constructor() {}
}

// Controller
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}

const app = new Controller(new Model(), new View());
