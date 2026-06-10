import { setLang, getLang } from "./i18n.js";
import { renderHomePage } from "./pages/home.js";
import { renderModelsPage } from "./pages/models.js";
import { renderShowroomPage } from "./pages/showroom.js";
import {
  renderAppointmentPage,
  attachAppointmentHandlers,
} from "./pages/appointment.js";
import { attachLangToggle } from "./components/layout.js";

const routes = {
  "/": renderHomePage,
  "/models": renderModelsPage,
  "/showroom": renderShowroomPage,
  "/appointment": renderAppointmentPage,
};

function getPath() {
  return window.location.pathname.replace(/\/$/, "") || "/";
}

function attachLinkHandlers() {
  document.querySelectorAll("[data-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const href = link.getAttribute("href");
      if (!href) return;
      const [path, query] = href.split("?");
      const url = query ? `${path}?${query}` : path;
      window.history.pushState({}, "", url);
      render();
    });
  });
}

function render() {
  setLang(getLang());
  const path = getPath();
  const renderPage = routes[path];

  if (!renderPage) {
    window.history.replaceState({}, "", "/");
    document.getElementById("app").innerHTML = renderHomePage();
  } else {
    document.getElementById("app").innerHTML = renderPage();
  }

  attachLinkHandlers();
  attachLangToggle();
  attachAppointmentHandlers();
}

window.addEventListener("popstate", render);
setLang(getLang());
render();
