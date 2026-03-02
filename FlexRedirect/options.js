/* --- TRANSLATIONS --- */
const translations = {

  en: {
    title: "FLEX REDIRECT",

    // Two separate blocks: header and description
    headerText: "This window connects New Tab Flex to your browser's new tab.",
    descText: "Download the archive by clicking the green button below and unzip it to any convenient location. Then copy the folder path from the address bar and paste it here.",

    // Input placeholder
    placeholder: "Paste folder path (Ctrl + V)",

    btnSave: "SAVE",
    saved: "Path saved successfully!",

    // Warning block title, subtitle and text
    warningTitle: "IMPORTANT: ENABLE FILE ACCESS!",
    warningSubtitle: "THE EXTENSION WILL NOT WORK WITHOUT IT.",
    warningText: `Right-click the Flex Redirect icon → "Manage extension" → enable the option:
• Chrome / Brave: "Allow access to file URLs"
• Opera / Opera GX: "Allow access to file URLs"
• Edge: "Allow access to file URLs"
• Others: Look for a similarly named toggle`,

    downloadLink: "Download New Tab Flex ↓",
    promoLink: "Official website →"
  },

  ru: {
    title: "FLEX REDIRECT",

    // Two separate blocks: header and description
    headerText: "Это окно подключает New Tab Flex к новой вкладке браузера.",
    descText: "Скачайте архив, нажав на зеленую кнопку ниже, и распакуйте его в любое удобное место. Затем скопируйте адрес этой папки из адресной строки и вставьте его сюда.",

    // Input placeholder
    placeholder: "Вставьте адрес папки (Ctrl + V)",

    btnSave: "СОХРАНИТЬ",
    saved: "Адрес сохранён!",

    // Warning block title, subtitle and text
    warningTitle: "ВАЖНО: ВКЛЮЧИТЕ ДОСТУП К ФАЙЛАМ!",
    warningSubtitle: "ИНАЧЕ РАСШИРЕНИЕ НЕ БУДЕТ РАБОТАТЬ.",
    warningText: `ПКМ по иконке Flex Redirect → «Управление расширением» → включите опцию:
• Chrome / Brave: «Разрешить открывать локальные файлы по ссылкам»
• Opera / Opera GX: «Разрешить доступ к файловым ссылкам»
• Edge: «Разрешить доступ к URL-адресам файлов»
• Другие: Ищите переключатель с похожим названием`,

    downloadLink: "Скачать New Tab Flex ↓",
    promoLink: "Официальный сайт →"
  }

};

let currentLang = 'en';

/* --- FUNCTIONS --- */
function toggleLang() {
  const newLang = currentLang === 'en' ? 'ru' : 'en';
  setLang(newLang);
}

function setLang(lang) {
  currentLang = lang;
  
  document.body.classList.remove('lang-en', 'lang-ru');
  document.body.classList.add('lang-' + lang);

  const btn1 = document.getElementById('lang-en');
  const btn2 = document.getElementById('lang-ru');
  
  if (btn1 && btn2) {
    if (lang === 'en') {
      btn1.textContent = 'EN';
      btn2.textContent = 'RU';
      btn1.classList.add('active');
      btn2.classList.remove('active');
    } else {
      btn1.textContent = 'RU';
      btn2.textContent = 'EN';
      btn1.classList.add('active');
      btn2.classList.remove('active');
    }
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  /* --- Header and description update --- */
  const headerEl = document.getElementById('header-text');
  if (headerEl && translations[lang].headerText) {
    headerEl.innerHTML = translations[lang].headerText;
  }
  
  const descEl = document.getElementById('desc-text');
  if (descEl && translations[lang].descText) {
    descEl.innerHTML = translations[lang].descText;
  }
  /* ------------------------------------- */

  const input = document.getElementById('urlInput');
  if (input && translations[lang]) {
    input.placeholder = translations[lang].placeholder;
  }

  if (chrome && chrome.storage) {
    chrome.storage.local.set({flexLang: lang});
  }
}

function saveSettings() {
  const urlInput = document.getElementById('urlInput');
  const status = document.getElementById('status');
  
  let url = urlInput.value.trim();
  
  // Block save if field is empty
  if (!url) return;
  
  // Cleanup
  url = url.replace(/"/g, '');
  url = url.replace(/\\/g, '/');
  
  // file:// prefix logic
  if (!url.startsWith('http') && !url.startsWith('file://')) {
    if (url.match(/^[a-zA-Z]:\//) || url.match(/^[a-zA-Z]:/)) {
       if (!url.startsWith('/')) {
         url = '/' + url;
       }
       url = 'file://' + url;
    }
  }


  // Auto-append filename if missing
  if (!url.toLowerCase().endsWith('.html')) {
    if (!url.endsWith('/')) url += '/';
    url += 'newtab-flex.html';
  }

  urlInput.value = url; 
  
  chrome.storage.local.set({flexUrl: url}, () => {
    status.innerHTML = translations[currentLang].saved;
    status.style.opacity = '1';
    setTimeout(() => { status.style.opacity = '0'; }, 2500);
  });
}

/* --- INIT --- */
document.addEventListener('DOMContentLoaded', () => {
  const btn1 = document.getElementById('lang-en');
  const btn2 = document.getElementById('lang-ru');
  const saveBtn = document.getElementById('saveBtn');
  const clearBtn = document.getElementById('clearBtn');
  const urlInput = document.getElementById('urlInput');

  if (btn1) btn1.addEventListener('click', toggleLang);
  if (btn2) btn2.addEventListener('click', toggleLang);
  
  if (saveBtn) saveBtn.addEventListener('click', saveSettings);

  if (clearBtn && urlInput) {
    const toggleClear = () => { clearBtn.style.display = urlInput.value ? 'block' : 'none'; };
    
    clearBtn.addEventListener('click', () => {
      urlInput.value = '';
      toggleClear();
      urlInput.focus();
    });
    
    urlInput.addEventListener('input', toggleClear);
  }

  chrome.storage.local.get(['flexUrl', 'flexLang'], (result) => {
    if (result.flexUrl && urlInput) {
      urlInput.value = result.flexUrl;
      if (clearBtn) clearBtn.style.display = 'block';
    }
    
    if (result.flexLang) {
      setLang(result.flexLang);
    } else {
      setLang('en');
    }
  });
});
