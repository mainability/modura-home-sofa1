import { getLang, t, site } from "../i18n.js";
import { renderHeader, renderFooter } from "../components/layout.js";
import { renderShowroomCard } from "../components/showroomCard.js";

export function renderShowroomPage() {
  const lang = getLang();
  const cardsHtml = site.showroomDays.map((d) => renderShowroomCard(d)).join("");

  return `
    ${renderHeader("/showroom")}
    <main class="page-main">
      <div class="container">
        <p class="eyebrow">${site.brand.name[lang]}</p>
        <h1 class="page-title">${t("showroom.title")}</h1>
        <p class="page-lead">${t("showroom.lead")}</p>
        <div class="showroom-list">${cardsHtml}</div>
      </div>
    </main>
    ${renderFooter()}
  `;
}
