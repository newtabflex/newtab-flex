// Execute immediately — no DOMContentLoaded wait for zero-flicker redirect
chrome.storage.local.get(['flexUrl', 'flexPendingTiles'], (result) => {
  const url = result.flexUrl;
  if (url && url.startsWith('file:///')) {
    let finalUrl = url;
    const queue = result.flexPendingTiles || [];
    if (queue.length > 0) {
      finalUrl = url + '#addtiles=' + encodeURIComponent(JSON.stringify(queue));
      chrome.storage.local.remove('flexPendingTiles');
    }
    chrome.runtime.sendMessage({ action: 'redirect', url: finalUrl });
  } else {
    window.location.href = chrome.runtime.getURL('options.html');
  }
});
