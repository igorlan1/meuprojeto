//criando rotas
const routes = {
  "/": "/pages/home.html",
  "/universe": "/pages/universe.html",
  "/explorer": "/pages/explorer.html",
  404: "/pages/404.html"
};

const screen = document.querySelector(".screen");

function explorerScreen() {
  screen.classList.remove("home");
  screen.classList.add("explorer");
  screen.classList.remove("universe");
}
function universeScreen() {
  screen.classList.remove("home");
  screen.classList.remove("explorer");
  screen.classList.add("universe");
}
function homeScreen() {
  screen.classList.add("home");
  screen.classList.remove("explorer");
  screen.classList.remove("universe");
}

function route(event) {
  event = event || window.event;

  event.preventDefault();

  window.history.pushState({}, "", event.target.href);

  handle();
}

function handle() {
  const { pathname } = window.location;
  const route = routes[pathname] || routes[404];
  fetch(route)
    .then((data) => data.text())
    .then((html) => {
      document.querySelector("#app").innerHTML = html;
    });
}

handle();

window.onpopstate = () => handle();
window.route = () => route();
window.explorerScreen = () => explorerScreen();
window.homeScreen = () => homeScreen();
window.universeScreen = () => universeScreen();
