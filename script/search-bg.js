const TMDB_API_KEYAPI_KEY = "95363966f0944c3a99ddd0b43ea0d626";
const BASE_URL = "https://api.rawg.io/api";
const url = "/games";

const params = new URLSearchParams(window.location.search)
const keyword = params.get("query") || "";
const search_results = document.getElementById("search-results");

function fetch_movie (query) {
    fetch(`${BASE_URL}?api_key=${TMDB_API_KEY}&&query=${query}`)
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.results.length; i++) {
                let movie = data.results[i];
                search_results.innerHTML += `
                <div class="movie-card" onclick=open_movie(${movie.id})">
                <img src="${IMG_URL + movie.poster_path}>
                <h4>${movie.title}</h4>
                </div>`
            }
        })
        .catch(err => console.error(err));
}

function open_movie(id) {
    window.location.href = `../info.html?id=${id}`;
}