import { getLang, setLang, t, site } from "../i18n.js";

function langToggle() {
  const lang = getLang();
  const other = lang === "he" ? "en" : "he";
  return `
    <button type="button" class="lang-toggle" data-lang="${other}" aria-label="Switch language">
      ${lang === "he" ? "EN" : "עב"}
    </button>
  `;
}

export function renderHeader(activePath) {
  const brand = site.brand.name[getLang()];
  return `
    <header class="header">
      <div class="header-inner">
        <a href="/" class="logo" data-link>${brand}</a>
        <nav class="nav">
          <a href="/" class="nav-link${activePath === "/" ? " active" : ""}" data-link>${t("nav.home")}</a>
          <a href="/models" class="nav-link${activePath === "/models" ? " active" : ""}" data-link>${t("nav.models")}</a>
          <a href="/showroom" class="nav-link${activePath === "/showroom" ? " active" : ""}" data-link>${t("nav.showroom")}</a>
          <a href="/appointment" class="nav-link nav-cta${activePath === "/appointment" ? " active" : ""}" data-link>${t("nav.appointment")}</a>
          ${langToggle()}
        </nav>
      </div>
    </header>
  `;
}

export function renderFooter() {
  const lang = getLang();
  const hoursHtml = site.hours
    .map((row) => {
      const time = typeof row.time === "object" ? row.time[lang] : row.time;
      return `<div class="hours-row"><span>${row.day[lang]}</span><span>${time}</span></div>`;
    })
    .join("");

  const whatsappMsg =
    lang === "he"
      ? "שלום, אשמח לקבוע פגישה בחנות"
      : "Hello, I'd like to book a showroom visit";
  const whatsappUrl = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;

  return `
    <footer class="footer">
      <div class="footer-grid">
        <div>
          <p class="footer-brand">${site.brand.name[lang]}</p>
          <p class="footer-tagline">${site.brand.tagline[lang]}</p>
        </div>
        <div>
          <p class="footer-heading">${t("footer.hours")}</p>
          ${hoursHtml}
        </div>
        <div>
          <p class="footer-heading">${t("footer.contact")}</p>
          <p>${site.contact.address[lang]}</p>
          <p>
            <a href="tel:${site.contact.phone.replace(/[^\d+]/g, "")}">${site.contact.phoneDisplay[lang]}</a>
          </p>
          <p><a href="mailto:${site.contact.email}">${site.contact.email}</a></p>
          <p>
            <a href="${site.contact.mapsUrl}" target="_blank" rel="noopener noreferrer" class="map-link">
              ${t("home.viewOnMap")} →
            </a>
          </p>
        </div>
      </div>
      <div class="footer-bottom">
        <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="whatsapp-link">
          ${t("footer.whatsapp")}
        </a>
      </div>
    </footer>
    <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="whatsapp-float" aria-label="WhatsApp">
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  `;
}

export function attachLangToggle() {
  document.querySelectorAll(".lang-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLang(btn.dataset.lang);
      window.dispatchEvent(new PopStateEvent("popstate"));
    });
  });
}
