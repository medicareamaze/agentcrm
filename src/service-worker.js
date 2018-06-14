/**
 * Check out https://googlechromelabs.github.io/sw-toolbox/ for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('./build/sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'ionic-cache'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    './build/main.js',
    './build/vendor.js',
    './build/main.css',
    './build/polyfills.js',
    'index.html',
    'manifest.json'
  ]
);

// dynamically cache any other local assets
self.toolbox.router.any('/*', self.toolbox.fastest);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;


var baseurl = ""; //replace that with you website baseurl. you could handle this differently but it was simplier in this sample

self.addEventListener('push', function (event) {

  //creating the notification message (we should never be in the "no message" case)
  var payload = event.data ? event.data.text() : 'No message...';

  //we show a notification to the user with the text message
  //and an icon which is hosted as a resource on the website
  event.waitUntil(
    self.registration.showNotification('MedicareAmaze!', {
      body: payload,
      icon: 'assets/imgs/logo_ms.png'
    })
  );
});

self.addEventListener('notificationclick', function (event) {
  // Android doesn't close the notification when you click on it  
  // See: http://crbug.com/463146  
  event.notification.close();

  // This looks to see if the current is already open and  
  // focuses if it is  
  event.waitUntil(

    //searching for all clients / tab opened in the browser
    clients.matchAll({
      type: "window"
    })
      .then(function (clientList) {

        //going through the list of clients/tab and trying to find our website
        for (var i = 0; i < clientList.length; i++) {
          var client = clientList[i];

          //if we find it, we put focus back on the tab
          if ((client.url.toLowerCase() == baseurl + 'index.html' || client.url.toLowerCase() == baseurl + '/web/index.html?isback=y') && 'focus' in client)
            return client.focus();
        }

        if (clients.openWindow) {
          //if we did not find it, then we re-open it with the isback=y parameter
          //to ensure that we resume the conversation using the conversationid
          return clients.openWindow('index.html');
        }
      })
  );
});
