//OK for this project that this free API key is publicly available as there is no consequence for exposing it.
//OpenWeather
// const APIkey = "8c0d6a6e3c285afa92b0398479b3ce9e";

//WeatherApi
const APIkey = "59a3eae2b2ea4a18bf811307232707";
let units = "metric";
function toggle() {
  units = units === "metric" ? "imperial" : "metric";
}

async function getInfo(data) {
  let response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${APIkey}&q=${data}&days=3`
  );

  if (response.status == 200) {
    let json = await response.json();
    return json;
  } else {
    throw new Error(response.status);
  }
}

let input = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  try {
    let data = await getInfo(input.value);
    console.log(data);
  } catch (err) {
    if (err == "Error: 400") {
      console.log(`No city found. Are you sure you meant ${input.value}?`);
    } else {
      console.log("Uh oh! Something went wrong, please try again later!");
    }
  }
});

function cityData(
  cityName,
  icon,
  description,
  currentTemp,
  wind,
  humidity,
  pressure,
  cloudiness,
  unix
) {
  return {
    cityName: cityName,
    icon: icon,
    description: description,
    currentTemp: currentTemp,
    wind: wind,
    humidity: humidity,
    pressure: pressure,
    cloudiness: cloudiness,
    unix: unix,
  };
}
