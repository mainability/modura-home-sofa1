import { getLang, t, site } from "../i18n.js";
import { renderHeader, renderFooter } from "../components/layout.js";
import { renderModelCard } from "../components/modelCard.js";

export function renderModelsPage() {
  const modelsHtml = site.models.map((m) => renderModelCard(m)).join("");

  return `
    ${renderHeader("/models")}
    <main class="page-main">
      <div class="container">
        <p class="eyebrow">${site.brand.name[getLang()]}</p>
        <h1 class="page-title">${t("models.title")}</h1>
        <p class="page-lead">${t("models.lead")}</p>
        <div class="model-grid">${modelsHtml}</div>
      </div>
    </main>
    ${renderFooter()}
  `;
}
