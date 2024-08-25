export function requestNotificationPermission() {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification('You have new habits to track!');
      }
    });
  }
  