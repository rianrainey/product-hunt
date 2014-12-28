"use strict"
chrome.runtime.onInstalled.addListener (details) ->
  console.log "previousVersion", details.previousVersion

chrome.browserAction.onClicked.addListener ->
  console.log "Windowing..."
  chrome.windows.create
    url: "hunt.html"
    type: "popup"
    focused: true
    width: 600
    height: 400
  , ->
    console.log "Window created"

chrome.tabs.onUpdated.addListener (tabId) ->
  chrome.pageAction.show tabId

console.log "'Allo 'Allo! Event Page for Page Action"
