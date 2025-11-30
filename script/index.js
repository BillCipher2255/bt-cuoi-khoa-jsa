const API_KEY = "95363966f0944c3a99ddd0b43ea0d626";
const BASE_URL = "https://api.rawg.io/api";
const url = "games";

fetch(`${BASE_URL}/${url}?key=${API_KEY}`)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
