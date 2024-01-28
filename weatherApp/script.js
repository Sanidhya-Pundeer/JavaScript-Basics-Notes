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
        //use `` to enter a variable in the url of the api 
}

button.addEventListener('click', async () => {
    // console.log(city.value);// to ge the value entered in the form
    // const value = city.value;
    const result = await getData(city.value);
    console.log(result);

    // have to use `` for writing part of E6
    cityName.innerText = `Location: ${result.location.name}, ${result.location.region} - ${result.location.country}`;
    cityTime.innerText = `Local Time: ${result.location.localtime}`; 
    cityTemp.innerText = `Temperature: ${result.current.temp_c}`;
});
