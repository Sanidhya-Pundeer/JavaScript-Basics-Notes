const button = document.getElementById('search-button');
const city = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');


async function getData(cityName) {
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=4224cec53c9c4aa48e680405242701&q=${cityName}&aqi=yes`
        )
        return await promise.json();
}

button.addEventListener('click', async () => {
    // console.log(city.value);// to ge the value entered in the form
    const result = await city.value;
    

});
