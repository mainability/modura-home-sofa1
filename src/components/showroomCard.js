import { getLang, t, tShowroom, site } from "../i18n.js";
import { getModelName } from "./modelCard.js";

function formatDate(dateStr, lang) {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString(lang === "he" ? "he-IL" : "en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function renderShowroomCard(day) {
  const lang = getLang();
  const modelsList = day.modelIds
    .map((id) => `<span class="model-tag">${getModelName(id)}</span>`)
    .join("");

  return `
    <article class="showroom-card">
      <div class="showroom-date">
        <time datetime="${day.date}">${formatDate(day.date, lang)}</time>
        <span class="showroom-time">${day.time}</span>
      </div>
      <h3 class="showroom-title">${tShowroom(day, "title")}</h3>
      <p class="showroom-desc">${tShowroom(day, "description")}</p>
      <div class="showroom-models">
        <p class="showroom-models-label">${t("showroom.modelsOnDisplay")}</p>
        <div class="model-tags">${modelsList}</div>
      </div>
      <a href="/appointment?date=${day.date}" class="btn-secondary btn-sm" data-link>${t("showroom.bookVisit")}</a>
    </article>
  `;
}
