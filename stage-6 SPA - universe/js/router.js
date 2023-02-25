import { screen } from "./elements.js";

export class Router {
  routes = {};
  add(routerName, page) {
    this.routes[routerName] = page;
  }

  route(event) {
    event = event || window.event;

    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];
    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
      });
  }

  explorerScreen() {
    screen.classList.remove("home");
    screen.classList.add("explorer");
    screen.classList.remove("universe");
  }
  universeScreen() {
    screen.classList.remove("home");
    screen.classList.remove("explorer");
    screen.classList.add("universe");
  }
  homeScreen() {
    screen.classList.add("home");
    screen.classList.remove("explorer");
    screen.classList.remove("universe");
  }
}
