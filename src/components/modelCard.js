import { t, tModel, site } from "../i18n.js";

export function renderModelCard(model, showBook = true) {
  const appointmentHref = `/appointment?model=${model.id}`;

  return `
    <article class="model-card">
      <div class="model-image-wrap">
        <img src="${model.image}" alt="${tModel(model, "name")}" loading="lazy" />
      </div>
      <div class="model-body">
        <h3 class="model-name">${tModel(model, "name")}</h3>
        <dl class="model-details">
          <div><dt>${t("models.style")}</dt><dd>${tModel(model, "style")}</dd></div>
          <div><dt>${t("models.dimensions")}</dt><dd>${tModel(model, "dimensions")}</dd></div>
          <div><dt>${t("models.fabrics")}</dt><dd>${tModel(model, "fabrics")}</dd></div>
        </dl>
        ${
          showBook
            ? `<a href="${appointmentHref}" class="btn-secondary btn-sm" data-link>${t("models.bookModel")}</a>`
            : ""
        }
      </div>
    </article>
  `;
}

export function getModelById(id) {
  return site.models.find((m) => m.id === id);
}

export function getModelName(id) {
  const model = getModelById(id);
  if (!model) return id;
  return tModel(model, "name");
}
