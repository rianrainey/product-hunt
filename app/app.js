(function() {
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

}).call(this);

(function() {
  "use strict";
  var LIVERELOAD_HOST, LIVERELOAD_PORT, connection;

  LIVERELOAD_HOST = "localhost:";

  LIVERELOAD_PORT = 35729;

  connection = new WebSocket("ws://" + LIVERELOAD_HOST + LIVERELOAD_PORT + "/livereload");

  connection.onerror = function(error) {
    return console.log("reload connection got error" + JSON.stringify(error));
  };

  connection.onmessage = function(e) {
    var data;
    if (e.data) {
      data = JSON.parse(e.data);
      if (data && data.command === "reload") {
        return chrome.runtime.reload();
      }
    }
  };

}).call(this);
