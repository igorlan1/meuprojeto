import { Router } from "./router.js";

const router = new Router();
router.add("/", "/pages/home.html");
router.add("/universe", "/pages/universe.html");
router.add("/explorer", "/pages/explorer.html");
router.add(404, "/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();
window.explorerScreen = () => router.explorerScreen();
window.homeScreen = () => router.homeScreen();
window.universeScreen = () => router.universeScreen();
