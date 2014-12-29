"use strict";

chrome.runtime.onInstalled.addListener(function(details) {
  return console.log("previousVersion", details.previousVersion);
});

chrome.browserAction.onClicked.addListener(function() {
  console.log("Windowing...");
  return chrome.windows.create({
    url: "hunt.html",
    type: "popup",
    focused: true,
    width: 600,
    height: 400
  }, function() {
    return console.log("Window created");
  });
});

chrome.tabs.onUpdated.addListener(function(tabId) {
  return chrome.pageAction.show(tabId);
});

console.log("'Allo 'Allo! Event Page for Page Action");

