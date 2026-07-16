/* ---------------- i18n ---------------- */
const translations = {
  ar:{
    boot1:"// جاري تشغيل النظام",
    boot2:"MAHER-TECH v2.077 :: تحميل الواجهة",
    status_online:"النظام متصل",
    status_mid:"جدة، السعودية · دعم فني ومعدات تقنية",
    status_hours:"السبت–الخميس 10ص–10م",
    brand:"كمبيوترجي ماهر",
    brand_sub:"حلول تقنية · جدة",
    nav_services:"الخدمات", nav_how:"آلية العمل", nav_products:"المنتجات", nav_reviews:"آراء العملاء", nav_contact:"تواصل معنا",
    nav_book:"احجز الآن",
    hero_eyebrow:"// حلول تقنية موثوقة منذ 2016",
    hero_h1_line1:"نُصلح أجهزتك،", hero_h1_line2:"ونُجهّز", hero_h1_line3:"مستقبلك.",
    hero_sub:"من إصلاح الطابعات ومشاكل الواي فاي إلى تجهيز مكتبك بأحدث الكابلات والمحولات — فريق ماهر يصل إليك أينما كنت.",
    hero_cta1:"احجز جلسة الآن", hero_cta2:"تصفح المنتجات",
    hud_monitor:"مراقبة النظام", hud_desc:"نسبة رضا العملاء<br>خلال آخر 200 طلب صيانة",
    services_tag:"// الخدمات", services_h2:"احجز جلسة دعم فني في دقائق",
    services_p:"اختر نوع الخدمة، حدد الموعد المناسب، وسيصلك فنيّ مختص — أو انضم لجلسة عن بُعد فورية.",
    s1_title:"جلسة استشارة تقنية", s1_desc:"مكالمة فيديو مع مختص لتشخيص المشكلة، اختيار الأجهزة المناسبة، أو استشارة عامة حول أنظمتك.",
    s2_title:"جلسة إصلاح الطابعة", s2_desc:"زيارة ميدانية لحل مشاكل الطباعة، التوصيل، الحبر، والتعريفات — على أجهزتك المنزلية أو المكتبية.",
    s3_title:"إصلاح مشاكل الواي فاي", s3_desc:"تحسين تغطية الشبكة، حل مشاكل الانقطاع، وإعداد الراوتر والمكررات بأفضل أداء ممكن.",
    s4_title:"صيانة كمبيوتر ميدانية", s4_desc:"تنظيف، ترقية القطع، إزالة الفيروسات، وتسريع الجهاز — نصل إلى منزلك أو مكتبك.",
    per_session:"/ الجلسة (45 دقيقة)", per_visit:"/ الزيارة", book_now:"احجز الآن",
    how_tag:"// آلية العمل", how_h2:"أربع خطوات، ومشكلتك تُحل",
    how1_h:"اختر الخدمة", how1_p:"حدّد نوع المشكلة أو الخدمة التي تحتاجها من القائمة.",
    how2_h:"اختر الموعد", how2_p:"حدد الوقت المناسب لك، عن بُعد أو زيارة ميدانية.",
    how3_h:"تأكيد الحجز", how3_p:"ادفع بأمان واستلم تأكيد الموعد فوراً على جوالك.",
    how4_h:"استلم الحل", how4_p:"فني ماهر يحل مشكلتك ويشرح لك كل خطوة بوضوح.",
    products_tag:"// المتجر", products_h2:"معدات وكابلات تثق بها",
    products_p:"كل ما تحتاجه لربط أجهزتك — كابلات ومحولات أصلية مع ضمان.",
    p_new:"جديد", p_hot:"الأكثر مبيعاً",
    p1_title:"كابل HDMI 4K", p1_desc:"طول 2 متر، دعم 4K@60Hz، مضفر ومقاوم للتلف.",
    p2_title:"محول USB-C إلى HDMI", p2_desc:"وصل جهازك بأي شاشة أو بروجكتر بدقة 4K.",
    p3_title:"كابل USB-C إلى Lightning", p3_desc:"شحن سريع ونقل بيانات لأجهزة آيفون وآيباد.",
    p4_title:"هَب USB-C متعدد المنافذ", p4_desc:"7 في 1: HDMI، USB 3.0، قارئ بطاقات، وشحن.",
    p5_title:"ماوس لاسلكي", p5_desc:"اتصال ثنائي، بطارية تدوم شهرين، تصميم صامت.",
    p6_title:"لوحة مفاتيح ميكانيكية", p6_desc:"إضاءة RGB، مفاتيح باللمس الأزرق، لوحة تقنية.",
    stat1:"طلب صيانة مُنجز", stat2:"تقييم متوسط من العملاء", stat3:"متوسط وقت الوصول", stat4:"سنوات خبرة ميدانية",
    reviews_tag:"// آراء العملاء", reviews_h2:"موثوق من عملاء حقيقيين",
    t1_p:"حلّوا مشكلة الطابعة خلال نصف ساعة، وفنيّ محترف جداً وواضح في الشرح.", t1_name:"سارة العتيبي", t1_role:"صاحبة عمل صغير",
    t2_p:"أصلحوا الواي فاي في المكتب وصار الاتصال ثابت في كل الأقسام، خدمة سريعة.", t2_name:"فهد القحطاني", t2_role:"مدير مكتب",
    t3_p:"اشتريت الهَب والكابلات وكلها أصلية وجودة ممتازة، والتوصيل كان سريع.", t3_name:"نورة الحربي", t3_role:"مصممة جرافيك",
    cta_h2:"جاهز تحل مشكلتك التقنية؟", cta_p:"احجز جلستك الآن وخلّي فريق ماهر يتكفّل بالباقي.", cta_btn:"احجز جلستك الآن",
    footer_desc:"فريق دعم فني وتجهيزات تقنية، نصل إليك أينما كنت في جدة والمنطقة الغربية.",
    footer_services:"الخدمات", footer_company:"الشركة", footer_careers:"الوظائف",
    footer_contact:"تواصل معنا", footer_addr:"جدة، المملكة العربية السعودية",
    footer_copy:"© 2077/12/12 — كمبيوترجي ماهر. جميع الحقوق محفوظة (نموذج تجريبي).",
    footer_note:"مصمم لأغراض العرض فقط",
    toast_book:"تم استلام الطلب — سيتواصل معك فريقنا قريباً",
    toast_cart:"تمت الإضافة إلى السلة",
    toast_wa:"جاري تحويلك إلى واتساب..."
  },
  en:{
    boot1:"// booting system",
    boot2:"MAHER-TECH v2.077 :: loading interface",
    status_online:"SYSTEM ONLINE",
    status_mid:"Jeddah, Saudi Arabia · IT support & hardware",
    status_hours:"Sat–Thu 10AM–10PM",
    brand:"Maher Tech",
    brand_sub:"IT SOLUTIONS · JEDDAH",
    nav_services:"Services", nav_how:"How it works", nav_products:"Products", nav_reviews:"Reviews", nav_contact:"Contact",
    nav_book:"Book now",
    hero_eyebrow:"// Trusted IT solutions since 2016",
    hero_h1_line1:"We fix your gear,", hero_h1_line2:"and gear", hero_h1_line3:"you up for what's next.",
    hero_sub:"From printer jams and wifi dropouts to kitting out your desk with the latest cables and adapters — a skilled technician, wherever you are.",
    hero_cta1:"Book a session", hero_cta2:"Browse products",
    hud_monitor:"SYSTEM MONITOR", hud_desc:"Customer satisfaction rate<br>across the last 200 tickets",
    services_tag:"// Services", services_h2:"Book a support session in minutes",
    services_p:"Pick a service, choose a time slot, and a specialist technician comes to you — or join an instant remote session.",
    s1_title:"Consulting Session", s1_desc:"A video call with a specialist to diagnose issues, choose the right hardware, or get general system advice.",
    s2_title:"Printer Fixing Session", s2_desc:"On-site visit to resolve printing, connectivity, ink, and driver issues — at home or the office.",
    s3_title:"Wifi Troubleshooting", s3_desc:"Improve network coverage, fix dropouts, and configure your router and extenders for peak performance.",
    s4_title:"On-site PC Repair", s4_desc:"Cleaning, part upgrades, virus removal, and speed-ups — we come to your home or office.",
    per_session:"/ session (45 min)", per_visit:"/ visit", book_now:"Book now",
    how_tag:"// How it works", how_h2:"Four steps to a solved problem",
    how1_h:"Pick a service", how1_p:"Choose the issue or service you need from the list.",
    how2_h:"Choose a slot", how2_p:"Pick a time that suits you — remote or on-site.",
    how3_h:"Confirm booking", how3_p:"Pay securely and get instant confirmation on your phone.",
    how4_h:"Get it fixed", how4_p:"A skilled technician resolves your issue and walks you through it.",
    products_tag:"// Shop", products_h2:"Cables and hardware you can trust",
    products_p:"Everything you need to connect your devices — genuine cables and adapters, all warrantied.",
    p_new:"New", p_hot:"Best seller",
    p1_title:"HDMI 4K Cable", p1_desc:"2m length, 4K@60Hz support, braided and tangle-resistant.",
    p2_title:"USB-C to HDMI Adapter", p2_desc:"Connect your device to any display or projector in 4K.",
    p3_title:"USB-C to Lightning Cable", p3_desc:"Fast charging and data transfer for iPhone and iPad.",
    p4_title:"USB-C Multiport Hub", p4_desc:"7-in-1: HDMI, USB 3.0, card reader, and charging pass-through.",
    p5_title:"Wireless Mouse", p5_desc:"Dual connectivity, two-month battery life, silent clicks.",
    p6_title:"Mechanical Keyboard", p6_desc:"RGB backlight, blue tactile switches, tech-forward build.",
    stat1:"Repairs completed", stat2:"Average customer rating", stat3:"Average arrival time", stat4:"Years of field experience",
    reviews_tag:"// Reviews", reviews_h2:"Trusted by real customers",
    t1_p:"Fixed our printer issue in half an hour — professional and explained everything clearly.", t1_name:"Sarah Al-Otaibi", t1_role:"Small business owner",
    t2_p:"Fixed the office wifi and now the connection is stable across every room. Fast service.", t2_name:"Fahad Al-Qahtani", t2_role:"Office manager",
    t3_p:"Bought the hub and cables — all genuine and great quality, delivery was quick too.", t3_name:"Noura Al-Harbi", t3_role:"Graphic designer",
    cta_h2:"Ready to fix your tech problem?", cta_p:"Book your session now and let the Maher Tech team take it from here.", cta_btn:"Book your session",
    footer_desc:"A team of technicians and hardware specialists, reaching you anywhere in Jeddah and the Western Region.",
    footer_services:"Services", footer_company:"Company", footer_careers:"Careers",
    footer_contact:"Contact", footer_addr:"Jeddah, Saudi Arabia",
    footer_copy:"© 2077/12/12 — Maher Tech. All rights reserved (mock site).",
    footer_note:"Designed for demo purposes only",
    toast_book:"Request received — our team will reach out shortly",
    toast_cart:"Added to cart",
    toast_wa:"Redirecting you to WhatsApp..."
  }
};

let currentLang = "ar";

function applyLang(lang){
  currentLang = lang;
  const html = document.documentElement;
  html.setAttribute("lang", lang);
  html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  html.setAttribute("data-lang", lang);
  document.getElementById("langBtn").textContent = lang === "ar" ? "EN" : "AR";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(translations[lang][key] !== undefined){
      el.innerHTML = translations[lang][key];
    }
  });
}

document.getElementById("langBtn").addEventListener("click", ()=>{
  applyLang(currentLang === "ar" ? "en" : "ar");
});

/* ---------------- boot sequence ---------------- */
window.addEventListener("load", ()=>{
  setTimeout(()=>{
    document.getElementById("boot").classList.add("hide");
  }, 1500);
});

/* ---------------- clock ---------------- */
function tickClock(){
  const d = new Date();
  const pad = n => String(n).padStart(2,"0");
  document.getElementById("clock").textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}
tickClock();
setInterval(tickClock, 1000);

/* ---------------- scroll reveal ---------------- */
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("in");
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.15});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

/* ---------------- toast ---------------- */
let toastTimer;
function showToast(type){
  const toast = document.getElementById("toast");
  const text = document.getElementById("toastText");
  text.textContent = translations[currentLang][type === "cart" ? "toast_cart" : "toast_book"];
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>toast.classList.remove("show"), 2600);
}

function showWaToast(){
  const toast = document.getElementById("toast");
  const text = document.getElementById("toastText");
  text.textContent = translations[currentLang]["toast_wa"];
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>toast.classList.remove("show"), 2600);
}

/* ---------------- WhatsApp booking ---------------- */
const WHATSAPP_NUMBER = "966555972970";

function openWhatsApp(message){
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
  showWaToast();
}

function bookService(key){
  const name = translations.ar[key + "_title"];
  const message = `مرحباً، أرغب في حجز ${name}. أرجو التواصل معي لتحديد الموعد.`;
  openWhatsApp(message);
}

function buyProduct(key){
  const name = translations.ar[key + "_title"];
  const message = `مرحباً، أرغب في شراء ${name}. أرجو تزويدي بتفاصيل الطلب.`;
  openWhatsApp(message);
}

function bookGeneral(){
  const message = "مرحباً، أرغب في حجز جلسة دعم فني مع كمبيوترجي ماهر.";
  openWhatsApp(message);
}

/* ---------------- nav shrink on scroll (subtle) ---------------- */
let lastY = 0;
window.addEventListener("scroll", ()=>{
  const nav = document.querySelector("header.nav");
  if(window.scrollY > 40){ nav.style.boxShadow = "0 6px 24px rgba(0,0,0,.35)"; }
  else{ nav.style.boxShadow = "none"; }
});
