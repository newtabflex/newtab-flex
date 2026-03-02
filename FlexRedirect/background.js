// background.js

const REDIRECT_URL = chrome.runtime.getURL("redirect.html");

const isOperaBrowser = () => {
  return (
    navigator.userAgent.indexOf("OPR") > -1 ||
    navigator.userAgent.indexOf("Opera") > -1
  );
};

// --- Part 1: Message handler (universal) ---
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "redirect" && message.url) {
    const tabId = sender.tab && sender.tab.id;
    if (tabId) {
      chrome.tabs.update(tabId, { url: message.url });
    }
  }
  return true;
});

// --- Part 2: New tab interceptor (Opera specific) ---
if (isOperaBrowser()) {
  const candidateTabs = new Set();

  function openCustomTab(tabId) {
    chrome.tabs.create({ url: REDIRECT_URL }, () => {
        setTimeout(() => {
            chrome.tabs.remove(tabId).catch(() => {});
        }, 150);
    });
  }

  chrome.tabs.onCreated.addListener((tab) => {
    if (!tab.active) return;
    candidateTabs.add(tab.id);
  });

  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (!candidateTabs.has(tabId)) return;
    const url = changeInfo.url || tab.url || "";
    if (!url) return;
    if (
      url.startsWith("http://") ||
      url.startsWith("https://") ||
      url.startsWith("file://") ||
      url.startsWith("ftp://")
    ) {
      candidateTabs.delete(tabId);
      return;
    }
    if (
      url.includes("redirect.html") ||
      url.includes(chrome.runtime.id) ||
      url.startsWith("chrome-extension://") ||
      url.startsWith("opera://extensions") ||
      url.startsWith("chrome://extensions") ||
      url.startsWith("edge://extensions")
    ) {
      candidateTabs.delete(tabId);
      return;
    }
    const isStartPage =
      url.includes("startpage") ||
      url.includes("newtab");
    if (!isStartPage) {
      candidateTabs.delete(tabId);
      return;
    }
    candidateTabs.delete(tabId);
    openCustomTab(tabId);
  });
}  // <-- if (isOperaBrowser()) CLOSED HERE

// --- Part 3: Deliver pending tiles to NTF on any load ---
// This block is OUTSIDE if(isOperaBrowser) — runs in ALL browsers
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status !== 'complete') return;
  const url = tab.url || '';
  if (!url.startsWith('file:///')) return;
  if (!url.toLowerCase().includes('newtab-flex')) return;
  if (url.includes('#addtiles=')) return;

  // --- Part 3a: Navigate to internal browser URLs (chrome://, opera://, etc.) ---
  if (url.includes('#flexnav=')) {
    try {
      const navUrl = decodeURIComponent(url.split('#flexnav=')[1]);
      if (navUrl) chrome.tabs.update(tabId, { url: navUrl });
    } catch(e) {}
    return;
  }

  chrome.storage.local.get(['flexPendingTiles'], (result) => {
    const queue = result.flexPendingTiles || [];
    if (queue.length === 0) return;
    const hash = '#addtiles=' + encodeURIComponent(JSON.stringify(queue));
    chrome.storage.local.remove('flexPendingTiles');
    chrome.tabs.update(tabId, { url: url.split('#')[0] + hash });
  });
});
