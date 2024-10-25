function getRandomInRange(from, to, fixed){
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}

function getLocality(lat, long, id){
    var result;
    const local = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`
    var loc = fetch(local)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        result = data.locality;
        console.log(result)
        document.getElementById(id).innerHTML = `Locality: ${result}`
    });
}

async function createMap(){
    var map = L.map('map').setView([36.966428, -95.844032], 4);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var one = [getRandomInRange(30, 35, 3), getRandomInRange(-90, -100, 3)];
    var two = [getRandomInRange(30, 35, 3), getRandomInRange(-90, -100, 3)];
    var three = [getRandomInRange(30, 35, 3), getRandomInRange(-90, -100, 3)];


    var markOne = L.marker([one[0], one[1]]).addTo(map);

    var markTwo = L.marker([two[0], two[1]]).addTo(map);

    var markThree = L.marker([three[0], three[1]]).addTo(map);

    document.getElementById("m1").innerHTML = `Marker 1: Latitude: ${one[0]}, Logitude ${one[1]}`;
    document.getElementById("m2").innerHTML = `Marker 2: Latitude: ${two[0]}, Logitude ${two[1]}`;
    document.getElementById("m3").innerHTML = `Marker 3: Latitude: ${three[0]}, Logitude ${three[1]}`;

    getLocality(one[0], one[1], "local1");
    getLocality(two[0], two[1], "local2");
    getLocality(three[0], three[1], "local3");

}



window.onload = createMap;