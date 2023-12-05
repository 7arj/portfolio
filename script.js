function initMap() {
    // Replace 'YOUR_LATITUDE' and 'YOUR_LONGITUDE' with your actual coordinates
    var myLatLng = {lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Your Location'
    });
}

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Add code to handle form submission (e.g., send an email)
    alert('Message sent!');
});
