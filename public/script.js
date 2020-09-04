const searchElement = document.querySelector('[data-city-secrch]')
console.log(searchElement)
const searchBox = new google.maps.places.SearchBox(searchElement)
searchBox.addListener('place_changed', () => {
    const place = searchBox.getPlace()[0]
    if (place == null) return
    const latitude = place.geometry.location.lat()
    const longitude = place.geometry.location.lng()
    fetch('/weather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            latitude: latitude,
            longitude: longitude
        })
    }).then(res => res.json()).then(data => {
        setWeatherData(data, place.formatted_address)
    })
})