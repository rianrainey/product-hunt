'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.onClicked.addListener(function() {
  console.log('Windowing...');
  chrome.windows.create({
    'url': 'http://www.cnn.com',
    'type': 'popup',
    'focused': true
  },
  function() {
    console.log('Window created');
  });
});


chrome.tabs.onUpdated.addListener(function (tabId) {
  chrome.pageAction.show(tabId);
});

console.log('\'Allo \'Allo! Event Page for Page Action');
