export const BASE_URL = process.env.NODE_ENV === "production" ? "deployed-backend-url" : "http://localhost:3001";

export const checkServerResponse = (res) => {
  if (!res.ok) return Promise.reject(`An error with the Status Code ${res.status} has occurred`);
  return res.json();
};

export const weatherOptions = [
  {
    url: require("../../src/images/day_clear.svg").default,
    isDuringDay: true,
    weatherType: "clearSky",
    weatherId: 800,
  },
  {
    url: require("../../src/images/day_cloudy.svg").default,
    isDuringDay: true,
    weatherType: "cloudy",
    weatherId: 801,
  },
  {
    url: require("../../src/images/day_rain.svg").default,
    isDuringDay: true,
    weatherType: "rain",
    weatherId: 501,
  },
  {
    url: require("../../src/images/day_storm.svg").default,
    isDuringDay: true,
    weatherType: "storm",
    weatherId: 201,
  },
  {
    url: require("../../src/images/day_snow.svg").default,
    isDuringDay: true,
    weatherType: "snow",
    weatherId: 601,
  },
  {
    url: require("../../src/images/day_fog.svg").default,
    isDuringDay: true,
    weatherType: "fog",
    weatherId: 741,
  },
  // Night starts below
  {
    url: require("../../src/images/night_clear.svg").default,
    isDuringDay: false,
    weatherType: "clearSky",
    weatherId: 800,
  },
  {
    url: require("../../src/images/night_cloudy.svg").default,
    isDuringDay: false,
    weatherType: "cloudy",
    weatherId: 801,
  },
  {
    url: require("../../src/images/night_rain.svg").default,
    isDuringDay: false,
    weatherType: "rain",
    weatherId: 501,
  },
  {
    url: require("../../src/images/night_storm.svg").default,
    isDuringDay: false,
    weatherType: "storm",
    weatherId: 201,
  },
  {
    url: require("../../src/images/night_snow.svg").default,
    isDuringDay: false,
    weatherType: "snow",
    weatherId: 601,
  },
  {
    url: require("../../src/images/night_fog.svg").default,
    isDuringDay: false,
    weatherType: "fog",
    weatherId: 741,
  },
];
