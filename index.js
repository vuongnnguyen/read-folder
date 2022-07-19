function notifyMe() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
  
    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      let notification = new Notification("Hi there!");
    }
  
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          let notification = new Notification("Hi there!");
        }
      });
    }
  
    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them anymore.
  }

//   if ('serviceWorker' in navigator) {
//     console.log("dsd")
//    // We need the service worker registration to check for a subscription
//   navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
//     // Do we already have a push message subscription?
//     console.log("dsd")
//     serviceWorkerRegistration.pushManager.getSubscription()
//       .then(function(subscription) {
//         // Enable any UI which subscribes / unsubscribes from
//         // push messages.
//         // const pushButton = document.querySelector('.js-push-button');
//         // pushButton.disabled = false;
//         console.log(subscription);
//         console.log(subscription);
//         if (!subscription) {
//           // We aren't subscribed to push, so set UI
//           // to allow the user to enable push
//           return;
//         }

//         // Keep your server in sync with the latest subscriptionId
//         // sendSubscriptionToServer(subscription);

//         // showCurlCommand(subscription);

//         // Set your UI to show they have subscribed for
//         // push messages
//         // pushButton.textContent = 'Disable Push Messages';
//         isPushEnabled = true;
//       })
//       .catch(function(err) {
//         window.Demo.debug.log('Error during getSubscription()', err);
//       });
//   })
//   .catch(function(err) {
//     window.Demo.debug.log('Error during getSubscription()', err);
//   });

// }


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(function(reg) {
        console.log('Service Worker Registered!', reg);
        reg.pushManager.getSubscription().then(function(sub) {
          console.log('Subscription object: ', sub);
        })
        .catch(function(err) {
            console.log('Service Worker registration failed: ', err);
          });
    })

}
    
