/* ===== TRANSLATIONS ===== */
const messages = {
  en: {
    appName: "Flex Redirect", settings: "Settings",
    newTab: "New Tab", newWindow: "New Window",
    addedTo: "Added to workspace", autoOpen: "Auto-redirect",
    saveTo: "Add site to workspace"
  },
  ru: {
    appName: "Flex Redirect", settings: "Настройки",
    newTab: "Новая вкл.", newWindow: "Новое окно",
    addedTo: "Добавлено в", autoOpen: "Автопереход",
    saveTo: "Добавить сайт в пространство"
  }
};

/* ===== CORE THEMES (6) ===== */
const CORE = {
  'black-flat': {
    vars: {
      '--popup-bg':'#0a0a0a','--popup-text':'#ccc',
      '--btn-bg':'rgba(255,255,255,0.06)','--btn-border':'rgba(255,255,255,0.1)',
      '--btn-hover-bg':'rgba(255,255,255,0.12)','--btn-hover-border':'rgba(255,255,255,0.2)',
      '--ws-font-color':'rgba(255,255,255,0.85)',
      '--ws-active-bg':'rgba(74,222,128,0.08)','--ws-active-border':'rgba(74,222,128,0.4)',
      '--ws-active-color':'#4ade80','--ws-active-glow':'rgba(74,222,128,0.15)',
      '--label-color':'rgba(255,255,255,0.35)','--settings-color':'rgba(255,255,255,0.35)',
      '--toggle-bg':'rgba(255,255,255,0.15)',
      '--toggle-active':'linear-gradient(135deg,#7c3aed,#3b82f6)',
      '--confirm-bg':'rgba(74,222,128,0.08)','--confirm-border':'rgba(74,222,128,0.3)','--confirm-glow':'rgba(74,222,128,0.1)',
      '--neo-shadow':'none','--neo-shadow-hover':'none','--neo-inset':'none',
      '--neo-active-shadow':'0 0 12px rgba(74,222,128,0.15)'
    }, neo: false, light: false
  },
  'black-neo': {
    vars: {
      '--popup-bg':'#0e0e0e','--popup-text':'#bbb',
      '--btn-bg':'#0a0a0a','--btn-border':'transparent',
      '--btn-hover-bg':'#0f0f0f','--btn-hover-border':'transparent',
      '--ws-font-color':'rgba(255,255,255,0.7)',
      '--ws-active-bg':'#0a0a0a','--ws-active-border':'transparent',
      '--ws-active-color':'#4ade80','--ws-active-glow':'rgba(74,222,128,0.12)',
      '--label-color':'rgba(255,255,255,0.3)','--settings-color':'rgba(255,255,255,0.3)',
      '--toggle-bg':'rgba(255,255,255,0.08)',
      '--toggle-active':'linear-gradient(135deg,#7c3aed,#3b82f6)',
      '--confirm-bg':'rgba(74,222,128,0.06)','--confirm-border':'rgba(74,222,128,0.2)','--confirm-glow':'rgba(74,222,128,0.08)',
      '--neo-shadow':'5px 5px 10px rgba(0,0,0,0.8),-3px -3px 8px rgba(255,255,255,0.018)',
      '--neo-shadow-hover':'3px 3px 7px rgba(0,0,0,0.8),-2px -2px 5px rgba(255,255,255,0.018)',
      '--neo-inset':'inset 1px 1px 2px rgba(255,255,255,0.06),inset -1px -1px 2px rgba(0,0,0,0.5)',
      '--neo-active-shadow':'inset 3px 3px 6px rgba(0,0,0,0.6),inset -3px -3px 6px rgba(255,255,255,0.015)'
    }, neo: true, light: false
  },
  'gray-flat': {
    vars: {
      '--popup-bg':'#2d2d2d','--popup-text':'#ddd',
      '--btn-bg':'rgba(255,255,255,0.06)','--btn-border':'rgba(255,255,255,0.1)',
      '--btn-hover-bg':'rgba(255,255,255,0.12)','--btn-hover-border':'rgba(255,255,255,0.2)',
      '--ws-font-color':'rgba(255,255,255,0.85)',
      '--ws-active-bg':'rgba(74,222,128,0.08)','--ws-active-border':'rgba(74,222,128,0.4)',
      '--ws-active-color':'#4ade80','--ws-active-glow':'rgba(74,222,128,0.15)',
      '--label-color':'rgba(255,255,255,0.35)','--settings-color':'rgba(255,255,255,0.35)',
      '--toggle-bg':'rgba(255,255,255,0.12)',
      '--toggle-active':'linear-gradient(135deg,#7c3aed,#3b82f6)',
      '--confirm-bg':'rgba(74,222,128,0.08)','--confirm-border':'rgba(74,222,128,0.3)','--confirm-glow':'rgba(74,222,128,0.1)',
      '--neo-shadow':'none','--neo-shadow-hover':'none','--neo-inset':'none',
      '--neo-active-shadow':'0 0 12px rgba(74,222,128,0.15)'
    }, neo: false, light: false
  },
  'gray-neo': {
    vars: {
      '--popup-bg':'#2d2d2d','--popup-text':'#ccc',
      '--btn-bg':'#2d2d2d','--btn-border':'transparent',
      '--btn-hover-bg':'#303030','--btn-hover-border':'transparent',
      '--ws-font-color':'rgba(255,255,255,0.7)',
      '--ws-active-bg':'#2d2d2d','--ws-active-border':'transparent',
      '--ws-active-color':'#4ade80','--ws-active-glow':'rgba(74,222,128,0.12)',
      '--label-color':'rgba(255,255,255,0.3)','--settings-color':'rgba(255,255,255,0.3)',
      '--toggle-bg':'rgba(255,255,255,0.08)',
      '--toggle-active':'linear-gradient(135deg,#7c3aed,#3b82f6)',
      '--confirm-bg':'rgba(74,222,128,0.06)','--confirm-border':'rgba(74,222,128,0.2)','--confirm-glow':'rgba(74,222,128,0.08)',
      '--neo-shadow':'5px 5px 10px rgba(0,0,0,0.45),-4px -4px 8px rgba(60,60,60,0.2)',
      '--neo-shadow-hover':'3px 3px 7px rgba(0,0,0,0.45),-3px -3px 6px rgba(60,60,60,0.2)',
      '--neo-inset':'inset 1px 1px 2px rgba(255,255,255,0.08),inset -1px -1px 2px rgba(0,0,0,0.35)',
      '--neo-active-shadow':'inset 3px 3px 6px rgba(0,0,0,0.4),inset -3px -3px 6px rgba(60,60,60,0.15)'
    }, neo: true, light: false
  },
  'white-flat': {
    vars: {
      '--popup-bg':'#e0e5ec','--popup-text':'#4d4d4d',
      '--btn-bg':'rgba(0,0,0,0.04)','--btn-border':'rgba(0,0,0,0.08)',
      '--btn-hover-bg':'rgba(0,0,0,0.07)','--btn-hover-border':'rgba(0,0,0,0.12)',
      '--ws-font-color':'#4d4d4d',
      '--ws-active-bg':'rgba(45,138,78,0.08)','--ws-active-border':'rgba(45,138,78,0.35)',
      '--ws-active-color':'#2d8a4e','--ws-active-glow':'rgba(45,138,78,0.12)',
      '--label-color':'rgba(77,77,77,0.45)','--settings-color':'rgba(77,77,77,0.4)',
      '--toggle-bg':'rgba(0,0,0,0.1)',
      '--toggle-active':'linear-gradient(135deg,#6366f1,#818cf8)',
      '--confirm-bg':'rgba(45,138,78,0.08)','--confirm-border':'rgba(45,138,78,0.25)','--confirm-glow':'rgba(45,138,78,0.08)',
      '--neo-shadow':'none','--neo-shadow-hover':'none','--neo-inset':'none',
      '--neo-active-shadow':'0 0 10px rgba(45,138,78,0.12)'
    }, neo: false, light: true
  },
  'white-neo': {
    vars: {
      '--popup-bg':'#e0e5ec','--popup-text':'#4d4d4d',
      '--btn-bg':'#e0e5ec','--btn-border':'transparent',
      '--btn-hover-bg':'#dde2e9','--btn-hover-border':'transparent',
      '--ws-font-color':'#4d4d4d',
      '--ws-active-bg':'#e0e5ec','--ws-active-border':'transparent',
      '--ws-active-color':'#2d8a4e','--ws-active-glow':'rgba(45,138,78,0.1)',
      '--label-color':'rgba(77,77,77,0.4)','--settings-color':'rgba(77,77,77,0.35)',
      '--toggle-bg':'rgba(0,0,0,0.1)',
      '--toggle-active':'linear-gradient(135deg,#6366f1,#818cf8)',
      '--confirm-bg':'rgba(45,138,78,0.06)','--confirm-border':'rgba(45,138,78,0.2)','--confirm-glow':'rgba(45,138,78,0.06)',
      '--neo-shadow':'6px 6px 12px rgba(163,177,198,0.5),-6px -6px 12px rgba(255,255,255,0.7)',
      '--neo-shadow-hover':'4px 4px 8px rgba(163,177,198,0.5),-4px -4px 8px rgba(255,255,255,0.7)',
      '--neo-inset':'inset 1px 1px 2px rgba(255,255,255,0.5),inset -1px -1px 2px rgba(163,177,198,0.3)',
      '--neo-active-shadow':'inset 4px 4px 8px rgba(163,177,198,0.35),inset -4px -4px 8px rgba(255,255,255,0.5)'
    }, neo: true, light: true
  }
};

/* ===== COLOR THEMES (21) ===== */
const COLOR_THEMES = [
  { id:'crimson-galaxy', name:'Crimson Galaxy', bg:'linear-gradient(135deg,#1a0005 0%,#2d0a1e 50%,#0d001a 100%)', text:'#fda4af', accent:'#e11d48', btnBg:'rgba(225,29,72,0.08)', btnBorder:'rgba(225,29,72,0.15)', activeColor:'#fb7185', toggleActive:'linear-gradient(135deg,#e11d48,#9333ea)', swatch:'linear-gradient(135deg,#e11d48,#9333ea)' },
  { id:'midnight-purple', name:'Midnight Purple', bg:'linear-gradient(160deg,#1a0533,#0d0015)', text:'#e0d0ff', accent:'#a855f7', btnBg:'rgba(168,85,247,0.08)', btnBorder:'rgba(168,85,247,0.2)', activeColor:'#c084fc', toggleActive:'linear-gradient(135deg,#a855f7,#7c3aed)', swatch:'linear-gradient(135deg,#a855f7,#7c3aed)' },
  { id:'rose-quartz', name:'Rose Quartz', bg:'linear-gradient(160deg,#2d1525,#150a12)', text:'#fda4af', accent:'#ec4899', btnBg:'rgba(236,72,153,0.08)', btnBorder:'rgba(236,72,153,0.18)', activeColor:'#f472b6', toggleActive:'linear-gradient(135deg,#ec4899,#db2777)', swatch:'linear-gradient(135deg,#ec4899,#db2777)' },
  { id:'emerald-night', name:'Emerald Night', bg:'linear-gradient(160deg,#0a1f14,#020d08)', text:'#a8e6cf', accent:'#10b981', btnBg:'rgba(16,185,129,0.08)', btnBorder:'rgba(16,185,129,0.18)', activeColor:'#34d399', toggleActive:'linear-gradient(135deg,#10b981,#059669)', swatch:'linear-gradient(135deg,#10b981,#059669)' },
  { id:'aurora-borealis', name:'Aurora Borealis', bg:'linear-gradient(135deg,#0a192f 0%,#0d1f22 30%,#0f2318 60%,#1a0e33 100%)', text:'#a8edea', accent:'#14b8a6', btnBg:'rgba(20,184,166,0.08)', btnBorder:'rgba(20,184,166,0.15)', activeColor:'#5eead4', toggleActive:'linear-gradient(135deg,#14b8a6,#7c3aed)', swatch:'linear-gradient(135deg,#14b8a6,#7c3aed)' },
  { id:'deep-ocean', name:'Deep Ocean', bg:'linear-gradient(160deg,#0a1628,#020a14)', text:'#b0d4ff', accent:'#3b82f6', btnBg:'rgba(59,130,246,0.08)', btnBorder:'rgba(59,130,246,0.18)', activeColor:'#60a5fa', toggleActive:'linear-gradient(135deg,#3b82f6,#1d4ed8)', swatch:'linear-gradient(135deg,#3b82f6,#1d4ed8)' },
  { id:'cherry-noir', name:'Cherry Noir', bg:'linear-gradient(160deg,#2a0a0f,#120005)', text:'#ffc0cb', accent:'#f43f5e', btnBg:'rgba(244,63,94,0.08)', btnBorder:'rgba(244,63,94,0.18)', activeColor:'#fb7185', toggleActive:'linear-gradient(135deg,#f43f5e,#e11d48)', swatch:'linear-gradient(135deg,#f43f5e,#e11d48)' },
  { id:'amber-glow', name:'Amber Glow', bg:'linear-gradient(160deg,#1f1408,#0d0a02)', text:'#fde68a', accent:'#f59e0b', btnBg:'rgba(245,158,11,0.08)', btnBorder:'rgba(245,158,11,0.18)', activeColor:'#fbbf24', toggleActive:'linear-gradient(135deg,#f59e0b,#d97706)', swatch:'linear-gradient(135deg,#f59e0b,#d97706)' },
  { id:'cyan-pulse', name:'Cyan Pulse', bg:'linear-gradient(160deg,#061d22,#010d11)', text:'#a5f3fc', accent:'#06b6d4', btnBg:'rgba(6,182,212,0.08)', btnBorder:'rgba(6,182,212,0.18)', activeColor:'#22d3ee', toggleActive:'linear-gradient(135deg,#06b6d4,#0891b2)', swatch:'linear-gradient(135deg,#06b6d4,#0891b2)' },
  { id:'nordic-frost', name:'Nordic Frost', bg:'linear-gradient(160deg,#1e2a38,#0c1420)', text:'#c8dff0', accent:'#64748b', btnBg:'rgba(100,116,139,0.1)', btnBorder:'rgba(100,116,139,0.2)', activeColor:'#94a3b8', toggleActive:'linear-gradient(135deg,#64748b,#475569)', swatch:'linear-gradient(135deg,#64748b,#475569)' },
  { id:'volcanic', name:'Volcanic', bg:'linear-gradient(160deg,#1a0800,#0a0200)', text:'#ffb088', accent:'#ea580c', btnBg:'rgba(234,88,12,0.1)', btnBorder:'rgba(234,88,12,0.2)', activeColor:'#fb923c', toggleActive:'linear-gradient(135deg,#ea580c,#c2410c)', swatch:'linear-gradient(135deg,#ea580c,#c2410c)' },
  { id:'ultraviolet', name:'Ultraviolet', bg:'linear-gradient(160deg,#1e0040,#0a0018)', text:'#d8b4fe', accent:'#8b5cf6', btnBg:'rgba(139,92,246,0.1)', btnBorder:'rgba(139,92,246,0.2)', activeColor:'#a78bfa', toggleActive:'linear-gradient(135deg,#8b5cf6,#7c3aed)', swatch:'linear-gradient(135deg,#8b5cf6,#7c3aed)' },
  { id:'neon-lime', name:'Neon Lime', bg:'linear-gradient(160deg,#0d1a00,#050d00)', text:'#d9f99d', accent:'#84cc16', btnBg:'rgba(132,204,22,0.08)', btnBorder:'rgba(132,204,22,0.18)', activeColor:'#a3e635', toggleActive:'linear-gradient(135deg,#84cc16,#65a30d)', swatch:'linear-gradient(135deg,#84cc16,#65a30d)' },
  { id:'glacier-blue', name:'Glacier Blue', bg:'linear-gradient(160deg,#0f2027,#050d12)', text:'#bae6fd', accent:'#0ea5e9', btnBg:'rgba(14,165,233,0.08)', btnBorder:'rgba(14,165,233,0.18)', activeColor:'#38bdf8', toggleActive:'linear-gradient(135deg,#0ea5e9,#0284c7)', swatch:'linear-gradient(135deg,#0ea5e9,#0284c7)' },
  { id:'sakura', name:'Sakura', bg:'linear-gradient(160deg,#2e1520,#180a10)', text:'#fbcfe8', accent:'#f472b6', btnBg:'rgba(244,114,182,0.06)', btnBorder:'rgba(244,114,182,0.15)', activeColor:'#f9a8d4', toggleActive:'linear-gradient(135deg,#f472b6,#ec4899)', swatch:'linear-gradient(135deg,#f472b6,#ec4899)' },
  { id:'midnight-teal', name:'Midnight Teal', bg:'linear-gradient(160deg,#042f2e,#011615)', text:'#99f6e4', accent:'#14b8a6', btnBg:'rgba(20,184,166,0.08)', btnBorder:'rgba(20,184,166,0.18)', activeColor:'#2dd4bf', toggleActive:'linear-gradient(135deg,#14b8a6,#0d9488)', swatch:'linear-gradient(135deg,#14b8a6,#0d9488)' },
  { id:'slate-storm', name:'Slate Storm', bg:'linear-gradient(160deg,#1e293b,#0f172a)', text:'#cbd5e1', accent:'#6366f1', btnBg:'rgba(99,102,241,0.08)', btnBorder:'rgba(99,102,241,0.18)', activeColor:'#818cf8', toggleActive:'linear-gradient(135deg,#6366f1,#4f46e5)', swatch:'linear-gradient(135deg,#6366f1,#4f46e5)' },
  { id:'copper-dusk', name:'Copper Dusk', bg:'linear-gradient(160deg,#2a1810,#150c08)', text:'#fed7aa', accent:'#c2410c', btnBg:'rgba(194,65,12,0.1)', btnBorder:'rgba(194,65,12,0.2)', activeColor:'#ea580c', toggleActive:'linear-gradient(135deg,#c2410c,#9a3412)', swatch:'linear-gradient(135deg,#c2410c,#9a3412)' },
  { id:'toxic-neon', name:'Toxic Neon', bg:'linear-gradient(160deg,#001a00,#000a00)', text:'#bbf7d0', accent:'#22c55e', btnBg:'rgba(34,197,94,0.1)', btnBorder:'rgba(34,197,94,0.2)', activeColor:'#4ade80', toggleActive:'linear-gradient(135deg,#22c55e,#16a34a)', swatch:'linear-gradient(135deg,#22c55e,#16a34a)' },
  { id:'royal-indigo', name:'Royal Indigo', bg:'linear-gradient(160deg,#1a0a3e,#0d0520)', text:'#c7d2fe', accent:'#6366f1', btnBg:'rgba(99,102,241,0.1)', btnBorder:'rgba(99,102,241,0.2)', activeColor:'#a5b4fc', toggleActive:'linear-gradient(135deg,#6366f1,#4338ca)', swatch:'linear-gradient(135deg,#6366f1,#4338ca)' },
  { id:'sandstorm', name:'Sandstorm', bg:'linear-gradient(160deg,#1c1810,#0e0c08)', text:'#fef3c7', accent:'#ca8a04', btnBg:'rgba(202,138,4,0.1)', btnBorder:'rgba(202,138,4,0.2)', activeColor:'#facc15', toggleActive:'linear-gradient(135deg,#ca8a04,#a16207)', swatch:'linear-gradient(135deg,#ca8a04,#a16207)' }
];

/* ===== THEME ENGINE ===== */
let currentThemeId = 'black-flat';
let currentColorIndex = 0;
let colorNeoMode = false;
let currentLang = 'en';

function applyTheme(themeId) {
  currentThemeId = themeId;
  const body = document.body;
  let config;
  let isColor = false;

  if (CORE[themeId]) {
    config = CORE[themeId];
  } else {
    isColor = true;
    const ct = COLOR_THEMES.find(t => t.id === themeId);
    if (!ct) return;
    currentColorIndex = COLOR_THEMES.indexOf(ct);
    config = {
      vars: {
        '--popup-bg': ct.bg, '--popup-text': ct.text,
        '--btn-bg': ct.btnBg, '--btn-border': ct.btnBorder,
        '--btn-hover-bg': ct.btnBg.replace(/[\d.]+\)$/, m => (parseFloat(m)+0.06).toFixed(2)+')'),
        '--btn-hover-border': ct.btnBorder.replace(/[\d.]+\)$/, m => (parseFloat(m)+0.1).toFixed(2)+')'),
        '--ws-font-color': ct.text,
        '--ws-active-bg': ct.btnBg,
        '--ws-active-border': ct.accent + '66',
        '--ws-active-color': ct.activeColor,
        '--ws-active-glow': ct.activeColor + '33',
        '--label-color': ct.text + '55',
        '--settings-color': ct.text + '55',
        '--toggle-bg': 'rgba(255,255,255,0.12)',
        '--toggle-active': ct.toggleActive,
        '--confirm-bg': ct.activeColor + '15',
        '--confirm-border': ct.activeColor + '44',
        '--confirm-glow': ct.activeColor + '22',
        '--neo-shadow':'none','--neo-shadow-hover':'none','--neo-inset':'none',
        '--neo-active-shadow':'0 0 12px ' + ct.activeColor + '33'
      }, neo: false, light: false
    };
    if (colorNeoMode) {
      config.vars['--neo-shadow'] = '5px 5px 10px rgba(0,0,0,0.8),-3px -3px 8px rgba(255,255,255,0.018)';
      config.vars['--neo-shadow-hover'] = '3px 3px 7px rgba(0,0,0,0.8),-2px -2px 5px rgba(255,255,255,0.018)';
      config.vars['--neo-inset'] = 'inset 1px 1px 2px rgba(255,255,255,0.06),inset -1px -1px 2px rgba(0,0,0,0.5)';
      config.vars['--neo-active-shadow'] = 'inset 3px 3px 6px rgba(0,0,0,0.6),inset -3px -3px 6px rgba(255,255,255,0.015)';
      config.neo = true;
    }
  }

  for (const [k, v] of Object.entries(config.vars)) {
    body.style.setProperty(k, v);
  }

  body.classList.toggle('neo', !!config.neo);
  body.classList.toggle('light', !!config.light);

  let baseKey = 'black';
  if (themeId.startsWith('gray')) baseKey = 'gray';
  else if (themeId.startsWith('white')) baseKey = 'white';
  else if (!themeId.startsWith('black')) baseKey = 'color';

  document.querySelectorAll('.theme-sq').forEach(sq => {
    sq.classList.toggle('active-sq', sq.getAttribute('data-base') === baseKey);
  });

  if (isColor) {
    const ct = COLOR_THEMES[currentColorIndex];
    const colorSq = document.querySelector('.theme-sq[data-base="color"]');
    if (colorSq && ct.swatch) colorSq.style.background = ct.swatch;
  }

  const nameEl = document.getElementById('themeName');
  if (nameEl) {
    if (isColor) {
      nameEl.textContent = COLOR_THEMES[currentColorIndex].name;
      nameEl.classList.add('visible');
    } else {
      nameEl.classList.remove('visible');
    }
  }

  chrome.storage.local.set({ flexPopupTheme: themeId, flexColorIndex: currentColorIndex, flexColorNeo: colorNeoMode });
}

/* ===== DOM READY ===== */
document.addEventListener('DOMContentLoaded', () => {

  /* --- Theme squares --- */
  document.querySelectorAll('.theme-sq').forEach(sq => {
    const base = sq.getAttribute('data-base');

    sq.addEventListener('click', (e) => {
      e.preventDefault();
      if (base === 'black') applyTheme('black-neo');
      else if (base === 'gray') applyTheme('gray-neo');
      else if (base === 'white') applyTheme('white-neo');
      else if (base === 'color') {
        colorNeoMode = true;
        if (currentThemeId.startsWith('black') || currentThemeId.startsWith('gray') || currentThemeId.startsWith('white')) {
          applyTheme(COLOR_THEMES[currentColorIndex].id);
        } else {
          currentColorIndex = (currentColorIndex + 1) % COLOR_THEMES.length;
          applyTheme(COLOR_THEMES[currentColorIndex].id);
        }
      }
    });

    sq.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      if (base === 'black') applyTheme('black-flat');
      else if (base === 'gray') applyTheme('gray-flat');
      else if (base === 'white') applyTheme('white-flat');
      else if (base === 'color') {
        colorNeoMode = false;
        if (currentThemeId.startsWith('black') || currentThemeId.startsWith('gray') || currentThemeId.startsWith('white')) {
          applyTheme(COLOR_THEMES[currentColorIndex].id);
        } else {
          currentColorIndex = (currentColorIndex - 1 + COLOR_THEMES.length) % COLOR_THEMES.length;
          applyTheme(COLOR_THEMES[currentColorIndex].id);
        }
      }
    });
  });

  /* --- Swallow animation --- */
  function triggerSwallow(btn) {
    btn.classList.remove('swallowing');
    void btn.offsetWidth;
    btn.classList.add('swallowing');
    btn.addEventListener('animationend', () => btn.classList.remove('swallowing'), { once: true });
  }

  /* --- Init --- */
  chrome.storage.local.get(['flexLang','flexAutoOpen','flexTiles','flexPopupTheme','flexColorIndex','flexColorNeo'], (result) => {
    const enabled = result.flexAutoOpen === true;
    document.getElementById('toggleEnabled').checked = enabled;

    currentLang = result.flexLang || 'en';
    const text = messages[currentLang] || messages.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (text[key]) el.textContent = text[key];
    });

    if (typeof result.flexColorIndex === 'number') currentColorIndex = result.flexColorIndex;
    if (result.flexColorNeo === true) colorNeoMode = true;
    applyTheme(result.flexPopupTheme || 'black-neo');

    const registry = result.flexTiles || { A: [], B: [], C: [] };
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (!tabs[0]) return;
      const tabUrl = tabs[0].url || '';
      if (tabUrl.startsWith('file:///') || tabUrl.startsWith('chrome-extension://')) {
        document.querySelectorAll('.ws-btn').forEach(b => b.classList.add('disabled'));
        return;
      }
      ['A','B','C'].forEach(ws => {
        if (registry[ws] && registry[ws].includes(tabUrl)) {
          const btn = document.querySelector('.ws-btn[data-ws="'+ws+'"]');
          if (btn) btn.classList.add('active');
        }
      });
    });
  });

  /* --- Workspace A/B/C --- */
  document.querySelectorAll('.ws-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const ws = btn.getAttribute('data-ws');
      triggerSwallow(btn);

      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (!tabs[0]) return;
        const tab = tabs[0];
        const url = tab.url;
        const title = tab.title || '';
        const favicon = tab.favIconUrl || '';
        const isAutoOpen = document.getElementById('toggleEnabled').checked;
        const tileData = { url, title, workspace: ws };
        if (isAutoOpen) tileData.autoSwitch = true;

        chrome.storage.local.get(['flexPendingTiles'], (r) => {
          const queue = r.flexPendingTiles || [];
          queue.push(tileData);
          chrome.storage.local.set({ flexPendingTiles: queue });
        });

        chrome.storage.local.get(['flexTiles'], (result) => {
          const registry = result.flexTiles || { A: [], B: [], C: [] };
          if (!registry[ws]) registry[ws] = [];
          if (!registry[ws].includes(url)) registry[ws].push(url);
          chrome.storage.local.set({ flexTiles: registry });

          const text = messages[currentLang] || messages.en;
          const card = document.getElementById('confirmCard');
          const icon = document.getElementById('confirmIcon');
          const msg = document.getElementById('confirmText');

          if (favicon) {
            icon.src = favicon; icon.style.display = 'block';
            icon.onerror = () => {
              const domain = new URL(url).hostname;
              icon.src = 'https://www.google.com/s2/favicons?domain='+domain+'&sz=32';
              icon.onerror = () => { icon.src = 'icon.png'; };
            };
          } else {
            try {
              const domain = new URL(url).hostname;
              icon.src = 'https://www.google.com/s2/favicons?domain='+domain+'&sz=32';
              icon.style.display = 'block';
              icon.onerror = () => { icon.src = 'icon.png'; };
            } catch(e) { icon.style.display = 'none'; }
          }

          const shortTitle = title.length > 25 ? title.substring(0,25)+'\u2026' : title;
          msg.innerHTML = text.addedTo + ' <span class="ws-badge">'+ws+'</span><br>'+shortTitle;
          card.classList.add('show');
          btn.classList.add('active');

          if (isAutoOpen) {
            setTimeout(() => { chrome.tabs.create({ url: 'redirect.html' }); window.close(); }, 1500);
          }
        });
      });
    });

        btn.addEventListener('mousedown', (e) => {
      if (e.button !== 1) return;
      e.preventDefault();
      const ws = btn.getAttribute('data-ws');
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (!tabs[0]) return;
        const url = tabs[0].url;
        chrome.storage.local.get(['flexTiles'], (result) => {
          const registry = result.flexTiles || { A: [], B: [], C: [] };
          if (registry[ws]) {
            registry[ws] = registry[ws].filter(u => u !== url);
            chrome.storage.local.set({ flexTiles: registry });
          }
          btn.classList.remove('active');
        });
      });
    });

    btn.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      const ws = btn.getAttribute('data-ws');
      chrome.storage.local.get(['flexPendingTiles'], (r) => {
        const queue = r.flexPendingTiles || [];
        queue.push({ autoSwitch: true, workspace: ws });
        chrome.storage.local.set({ flexPendingTiles: queue }, () => {
          chrome.tabs.create({ url: 'redirect.html' });
          window.close();
        });
      });
    });
  });

  /* --- Other buttons --- */
  document.getElementById('settingsBtn').addEventListener('click', () => {
    if (chrome.runtime.openOptionsPage) chrome.runtime.openOptionsPage();
    else window.open(chrome.runtime.getURL('options.html'));
  });
  document.getElementById('openBtn').addEventListener('click', () => {
    chrome.tabs.create({ url: "redirect.html" }); window.close();
  });
  document.getElementById('windowBtn').addEventListener('click', () => {
    chrome.windows.create({ url: "redirect.html" }); window.close();
  });
  document.getElementById('toggleEnabled').addEventListener('change', (e) => {
    chrome.storage.local.set({ flexAutoOpen: e.target.checked });
  });
});
