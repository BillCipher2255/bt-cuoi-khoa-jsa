const API_KEY = "95363966f0944c3a99ddd0b43ea0d626";
const BASE_URL = "https://api.rawg.io/api";
const endpoint = "/games";

const params = new URLSearchParams(window.location.search);
const keyword = params.get("query") || "";

const search_results = document.getElementById("search-results");
const search_title = document.getElementById("search-title");

function fetch_game(query) {

  fetch(`${BASE_URL}${endpoint}?key=${API_KEY}&search=${encodeURIComponent(query)}&page_size=20`)
    .then(res => res.json())
    .then(data => {

      for (let i = 0; i < data.results.length; i++) {
        const game = data.results[i];
        const div = document.createElement("div");
        div.className = "game-card";

        div.innerHTML = `
          <img src="${game.background_image}" alt="${game.name}" />
          <p>${game.name}</p>
        `;

        div.addEventListener("click", () => {
          window.location.href = `../info.html?id=${game.id}`;
        });

        search_results.appendChild(div);
      };
    })
    .catch(err => console.error(err));
}