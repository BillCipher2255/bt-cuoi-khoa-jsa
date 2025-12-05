const API_KEY = "95363966f0944c3a99ddd0b43ea0d626";
const BASE_URL = "https://api.rawg.io/api";
const url = "/games";

// Test fetch (log JSON ra console)
fetch(`${BASE_URL}${url}?key=${API_KEY}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));


// ---------------------
// Hàm fetch_game CHUẨN
// ---------------------
function fetch_game(url, containerid) {

    fetch(`${url}?key=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById(containerid);

            for (let i = 0; i < data.results.length; i++) {
                let game = data.results[i];

                let div = document.createElement('div');
                div.className = "game-card";

                div.innerHTML = `
                    <img src="${game.background_image}" />
                    <p>${game.name}</p>
                `;

                div.addEventListener("click", () => {
                    window.location.href = "../";
                });

                container.appendChild(div);
            }
        })
        .catch(err => console.error(err));
}


// ---------------------
// Gọi hàm đúng CÁCH
// ---------------------
fetch_game("https://api.rawg.io/api/games", "Upcoming-game");
