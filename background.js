chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.url.includes('www.youtube.com')) {
    chrome.tabs.sendMessage(tabId, { action: 'runSnippet' });
  }
});
