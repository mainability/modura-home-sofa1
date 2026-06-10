import { getLang, t, site } from "../i18n.js";
import { renderHeader, renderFooter } from "../components/layout.js";
import { renderModelCard } from "../components/modelCard.js";

export function renderHomePage() {
  const lang = getLang();
  const featured = site.models.filter((m) => m.featured);
  const featuredHtml = featured.map((m) => renderModelCard(m, false)).join("");

  const hoursHtml = site.hours
    .map((row) => {
      const time = typeof row.time === "object" ? row.time[lang] : row.time;
      return `<div class="hours-row"><span>${row.day[lang]}</span><span>${time}</span></div>`;
    })
    .join("");

  return `
    ${renderHeader("/")}
    <main>
      <section class="hero">
        <div class="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2400&q=80"
            alt="Modern sofa showroom"
            class="hero-image"
          />
          <div class="hero-overlay"></div>
        </div>
        <div class="hero-content">
          <p class="eyebrow">${t("home.eyebrow")}</p>
          <h1 class="hero-title">${site.brand.name[lang]}</h1>
          <p class="hero-tagline">${site.brand.tagline[lang]}</p>
          <div class="hero-actions">
            <a href="/models" class="btn-primary" data-link>${t("home.ctaModels")}</a>
            <a href="/appointment" class="btn-outline" data-link>${t("home.ctaAppointment")}</a>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <p class="eyebrow">${site.brand.name[lang]}</p>
          <h2 class="section-title">${t("home.featuredTitle")}</h2>
          <p class="section-lead">${t("home.featuredLead")}</p>
          <div class="model-grid">${featuredHtml}</div>
          <div class="section-cta">
            <a href="/models" class="btn-secondary" data-link>${t("home.ctaModels")}</a>
          </div>
        </div>
      </section>

      <section class="section section-alt">
        <div class="container info-grid">
          <div>
            <h2 class="section-title">${t("home.hoursTitle")}</h2>
            <div class="hours-grid">${hoursHtml}</div>
          </div>
          <div>
            <h2 class="section-title">${t("home.deliveryTitle")}</h2>
            <p class="section-lead">${site.delivery[lang]}</p>
          </div>
          <div>
            <h2 class="section-title">${t("home.contactTitle")}</h2>
            <p>${site.contact.address[lang]}</p>
            <p><a href="tel:${site.contact.phone.replace(/[^\d+]/g, "")}">${site.contact.phoneDisplay[lang]}</a></p>
            <p><a href="mailto:${site.contact.email}">${site.contact.email}</a></p>
            <p>
              <a href="${site.contact.mapsUrl}" target="_blank" rel="noopener noreferrer" class="map-link">
                ${t("home.viewOnMap")} →
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
    ${renderFooter()}
  `;
}
