if (navigator.geolocation) {
  navigator -
    geolocation.getCurrentPosition(function (position) {
      console.log('Length:' + position.coords.longitude);
      console.log('Width:' + position.coords.latitude);
    });
} else {
  console.log('Browser does not support geolocation');
}
