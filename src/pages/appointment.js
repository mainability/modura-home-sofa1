import { getLang, t, site } from "../i18n.js";
import { renderHeader, renderFooter } from "../components/layout.js";
import { getModelName } from "../components/modelCard.js";

function getQueryParams() {
  return Object.fromEntries(new URLSearchParams(window.location.search));
}

function renderForm(prefill = {}) {
  const lang = getLang();
  const slots = site.appointmentSlots
    .map((slot) => `<option value="${slot}"${prefill.time === slot ? " selected" : ""}>${slot}</option>`)
    .join("");

  const visitorOptions = Array.from({ length: site.maxVisitors }, (_, i) => {
    const count = i + 1;
    const label = count === 1 ? t("labels.seat") : t("labels.seats");
    return `<option value="${count}"${prefill.visitors === String(count) ? " selected" : ""}>${count} ${label}</option>`;
  }).join("");

  const minDate = new Date().toISOString().split("T")[0];
  const modelNote = prefill.model
    ? `${lang === "he" ? "מעוניין/ת בדגם" : "Interested in model"}: ${getModelName(prefill.model)}`
    : "";

  return `
    <form id="appointment-form" class="appointment-form">
      <div class="form-grid">
        <label>
          ${t("appointment.name")}
          <input name="name" required placeholder="${t("appointment.name")}" />
        </label>
        <label>
          ${t("appointment.phone")}
          <input name="phone" type="tel" required placeholder="${site.contact.phoneDisplay[lang]}" />
        </label>
        <label class="full-width">
          ${t("appointment.email")}
          <input name="email" type="email" placeholder="${site.contact.email}" />
        </label>
        <label>
          ${t("appointment.date")}
          <input name="date" type="date" required min="${minDate}" value="${prefill.date || ""}" />
        </label>
        <label>
          ${t("appointment.time")}
          <select name="time" required>
            <option value="" disabled${!prefill.time ? " selected" : ""}>${t("appointment.selectTime")}</option>
            ${slots}
          </select>
        </label>
        <label class="full-width">
          ${t("appointment.visitors")}
          <select name="visitors" required>${visitorOptions}</select>
        </label>
        <label class="full-width">
          ${t("appointment.note")}
          <textarea name="note" rows="3" placeholder="${t("appointment.note")}">${modelNote}</textarea>
        </label>
      </div>
      <button type="submit" class="btn-primary btn-full">${t("appointment.submit")}</button>
    </form>
  `;
}

function renderSuccess(data) {
  const contact = data.email || data.phone;
  return `
    <div class="success-card">
      <p class="eyebrow">${site.brand.name[getLang()]}</p>
      <h2 class="section-title">${t("appointment.successTitle")}</h2>
      <p class="success-text">
        ${data.name} — ${t("appointment.successLead")}
        <br /><br />
        <strong>${data.date} · ${data.time}</strong>
        ${contact ? `<br />${contact}` : ""}
      </p>
      <a href="/" class="btn-secondary" data-link>${t("appointment.backHome")}</a>
    </div>
  `;
}

export function renderAppointmentPage() {
  const lang = getLang();
  const prefill = getQueryParams();

  return `
    ${renderHeader("/appointment")}
    <main class="page-main">
      <div class="container narrow">
        <a href="/" class="back-link" data-link>← ${t("showroom.backHome")} ${site.brand.name[lang]}</a>
        <p class="eyebrow">${site.brand.name[lang]}</p>
        <h1 class="page-title">${t("appointment.title")}</h1>
        <p class="page-lead">${t("appointment.lead")}</p>
        <div id="appointment-content">${renderForm(prefill)}</div>
      </div>
    </main>
    ${renderFooter()}
  `;
}

export function attachAppointmentHandlers() {
  const form = document.getElementById("appointment-form");
  const content = document.getElementById("appointment-content");
  if (!form || !content) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    content.innerHTML = renderSuccess(data);
    window.dispatchEvent(new PopStateEvent("popstate"));
  });
}

export function getAppointmentPrefill() {
  return getQueryParams();
}
