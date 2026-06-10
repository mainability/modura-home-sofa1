let currentLang = localStorage.getItem("modura-lang") || "he";

export function getLang() {
  return currentLang;
}

export function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("modura-lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
}

export function t(key) {
  const keys = key.split(".");
  let value = site.ui[currentLang];
  for (const k of keys) {
    value = value?.[k];
  }
  return value ?? key;
}

export function tModel(model, field) {
  return model[field][currentLang];
}

export function tShowroom(day, field) {
  return day[field][currentLang];
}

export const site = {
  brand: {
    name: { he: "מודורה הום", en: "Modura Home" },
    tagline: {
      he: "ספות שמתאימות לחיים שלכם",
      en: "Sofas designed for how you live",
    },
  },
  contact: {
    phone: "+972-3-555-0199",
    phoneDisplay: { he: "03-555-0199", en: "+972-3-555-0199" },
    email: "hello@modurahome.co.il",
    whatsapp: "97235550199",
    address: {
      he: "רחוב המסגר 22, תל אביב",
      en: "22 HaMasger St, Tel Aviv",
    },
    mapsQuery: "22+HaMasger+Street+Tel+Aviv",
    mapsUrl: "https://maps.google.com/?q=22+HaMasger+Street+Tel+Aviv",
  },
  hours: [
    { day: { he: "ראשון – חמישי", en: "Sun – Thu" }, time: "10:00 – 19:00" },
    { day: { he: "שישי", en: "Friday" }, time: "09:00 – 14:00" },
    { day: { he: "שבת", en: "Saturday" }, time: { he: "סגור", en: "Closed" } },
  ],
  delivery: {
    he: "משלוח והרכבה בפריסה ארצית. זמן אספקה ממוצע: 14–21 ימי עסקים.",
    en: "Nationwide delivery and assembly. Average lead time: 14–21 business days.",
  },
  appointmentSlots: [
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ],
  maxVisitors: 6,
  models: [
    {
      id: "milano",
      name: { he: "מילאנו", en: "Milano" },
      style: { he: "ספה פינתית", en: "Corner sofa" },
      dimensions: { he: "280 × 180 ס״מ", en: "280 × 180 cm" },
      fabrics: { he: "קטיפה, פשתן, עור", en: "Velvet, linen, leather" },
      featured: true,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c8ea4be2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "oslo",
      name: { he: "אוסלו", en: "Oslo" },
      style: { he: "3 מושבים", en: "3-seater" },
      dimensions: { he: "220 × 95 ס״מ", en: "220 × 95 cm" },
      fabrics: { he: "בד, קטיפה", en: "Fabric, velvet" },
      featured: true,
      image:
        "https://images.unsplash.com/photo-1493663284031-f7abcb247c93?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "luna",
      name: { he: "לונה", en: "Luna" },
      style: { he: "ספת מיטה", en: "Sleeper sofa" },
      dimensions: { he: "200 × 90 ס״מ", en: "200 × 90 cm" },
      fabrics: { he: "בד, מיקרופיבר", en: "Fabric, microfiber" },
      featured: true,
      image:
        "https://images.unsplash.com/photo-1540574163026-d643ea20ade2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "atlas",
      name: { he: "אטלס", en: "Atlas" },
      style: { he: "ספה פינתית", en: "Corner sofa" },
      dimensions: { he: "310 × 200 ס״מ", en: "310 × 200 cm" },
      fabrics: { he: "עור, בד", en: "Leather, fabric" },
      featured: true,
      image:
        "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "nova",
      name: { he: "נובה", en: "Nova" },
      style: { he: "2 מושבים", en: "2-seater" },
      dimensions: { he: "180 × 90 ס״מ", en: "180 × 90 cm" },
      fabrics: { he: "קטיפה, פשתן", en: "Velvet, linen" },
      featured: false,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "river",
      name: { he: "ריבר", en: "River" },
      style: { he: "3 מושבים", en: "3-seater" },
      dimensions: { he: "240 × 100 ס״מ", en: "240 × 100 cm" },
      fabrics: { he: "בד, עור", en: "Fabric, leather" },
      featured: false,
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "cloud",
      name: { he: "קלאוד", en: "Cloud" },
      style: { he: "ספה מודולרית", en: "Modular sofa" },
      dimensions: { he: "מותאם אישית", en: "Custom layout" },
      fabrics: { he: "בד, קטיפה, פשתן", en: "Fabric, velvet, linen" },
      featured: false,
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "sage",
      name: { he: "סייג'", en: "Sage" },
      style: { he: "ספת מיטה", en: "Sleeper sofa" },
      dimensions: { he: "210 × 95 ס״מ", en: "210 × 95 cm" },
      fabrics: { he: "מיקרופיבר, בד", en: "Microfiber, fabric" },
      featured: false,
      image:
        "https://images.unsplash.com/photo-1551298370-9d63d2400a04?auto=format&fit=crop&w=800&q=80",
    },
  ],
  showroomDays: [
    {
      id: "spring-weekend",
      date: "2026-06-14",
      time: "10:00 – 18:00",
      title: {
        he: "סוף שבוע קולקציית אביב",
        en: "Spring Collection Weekend",
      },
      description: {
        he: "כל דגמי האביב במבצע תצוגה — מילאנו, אוסלו ולונה בחלל התצוגה הראשי.",
        en: "All spring models on display — Milano, Oslo, and Luna in the main showroom.",
      },
      modelIds: ["milano", "oslo", "luna"],
    },
    {
      id: "new-arrivals",
      date: "2026-06-21",
      time: "11:00 – 17:00",
      title: { he: "יום הגעות חדשות", en: "New Arrivals Day" },
      description: {
        he: "הצגת דגמי אטלס וקלאוד — ספות פינתיות ומודולריות חדשות.",
        en: "Introducing Atlas and Cloud — new corner and modular sofas.",
      },
      modelIds: ["atlas", "cloud"],
    },
    {
      id: "fabric-day",
      date: "2026-06-28",
      time: "10:00 – 16:00",
      title: { he: "יום בדים וריפודים", en: "Fabric & Upholstery Day" },
      description: {
        he: "בואו לבחור בדים, צבעים וריפודים עם יועצי העיצוב שלנו.",
        en: "Choose fabrics, colors, and upholstery with our design consultants.",
      },
      modelIds: ["milano", "nova", "river", "sage"],
    },
    {
      id: "family-day",
      date: "2026-07-05",
      time: "09:00 – 15:00",
      title: { he: "יום משפחות", en: "Family Day" },
      description: {
        he: "יום מיוחד למשפחות — ספות מיטה, פינות ישיבה וייעוץ מותאם.",
        en: "Special day for families — sleeper sofas, lounge sets, and tailored advice.",
      },
      modelIds: ["luna", "sage", "atlas"],
    },
  ],
  ui: {
    he: {
      nav: {
        home: "בית",
        models: "דגמים",
        showroom: "ימי תצוגה",
        appointment: "קביעת פגישה",
      },
      home: {
        eyebrow: "חנות ספות · תל אביב",
        ctaModels: "לכל הדגמים",
        ctaAppointment: "קביעת פגישה",
        featuredTitle: "דגמים נבחרים",
        featuredLead: "גלו את הקולקציה שלנו — מפינות ישיבה ועד ספות מיטה.",
        hoursTitle: "שעות פתיחה",
        deliveryTitle: "משלוח והרכבה",
        contactTitle: "צרו קשר",
        viewOnMap: "פתיחה במפות",
      },
      models: {
        title: "כל הדגמים",
        lead: "מגוון דגמים לכל חלל — פינתיות, 3 מושבים, ספות מיטה ומודולריות.",
        style: "סגנון",
        dimensions: "מידות",
        fabrics: "בדים",
        bookModel: "קביעת פגישה לדגם זה",
      },
      showroom: {
        title: "ימי תצוגה",
        lead: "אירועים מיוחדים בחלל התצוגה — בואו לראות, לגעת ולהתייעץ.",
        modelsOnDisplay: "דגמים בתצוגה",
        bookVisit: "קביעת ביקור",
        backHome: "חזרה ל",
      },
      appointment: {
        title: "קביעת פגישה",
        lead: "בחרו תאריך ושעה נוחים — נחזור אליכם עם אישור.",
        name: "שם מלא",
        phone: "טלפון",
        email: "אימייל",
        date: "תאריך מועדף",
        time: "שעה מועדפת",
        visitors: "מספר מבקרים",
        note: "הערות (דגם מועדף, בקשות מיוחדות)",
        submit: "שליחת בקשה",
        successTitle: "הבקשה התקבלה",
        successLead: "ניצור איתכם קשר בהקדם לאישור הפגישה.",
        backHome: "חזרה לדף הבית",
        selectTime: "בחרו שעה",
        selectVisitors: "מבקרים",
      },
      footer: {
        hours: "שעות פתיחה",
        contact: "יצירת קשר",
        whatsapp: "WhatsApp",
      },
      labels: {
        seat: "מושב",
        seats: "מושבים",
      },
    },
    en: {
      nav: {
        home: "Home",
        models: "Models",
        showroom: "Showroom Days",
        appointment: "Book Visit",
      },
      home: {
        eyebrow: "Sofa Showroom · Tel Aviv",
        ctaModels: "View all models",
        ctaAppointment: "Book appointment",
        featuredTitle: "Featured models",
        featuredLead: "Explore our collection — from corner sofas to sleepers.",
        hoursTitle: "Opening hours",
        deliveryTitle: "Delivery & assembly",
        contactTitle: "Contact us",
        viewOnMap: "Open in Maps",
      },
      models: {
        title: "Model catalog",
        lead: "A range of styles for every space — corner, 3-seater, sleeper, and modular.",
        style: "Style",
        dimensions: "Dimensions",
        fabrics: "Fabrics",
        bookModel: "Book to see this model",
      },
      showroom: {
        title: "Showroom display days",
        lead: "Special events in our showroom — come see, touch, and consult.",
        modelsOnDisplay: "Models on display",
        bookVisit: "Book a visit",
        backHome: "Back to",
      },
      appointment: {
        title: "Book an appointment",
        lead: "Choose a convenient date and time — we'll confirm with you shortly.",
        name: "Full name",
        phone: "Phone",
        email: "Email",
        date: "Preferred date",
        time: "Preferred time",
        visitors: "Number of visitors",
        note: "Notes (preferred model, special requests)",
        submit: "Submit request",
        successTitle: "Request received",
        successLead: "We'll contact you shortly to confirm your appointment.",
        backHome: "Back to home",
        selectTime: "Select a time",
        selectVisitors: "visitors",
      },
      footer: {
        hours: "Opening hours",
        contact: "Contact",
        whatsapp: "WhatsApp",
      },
      labels: {
        seat: "visitor",
        seats: "visitors",
      },
    },
  },
};
