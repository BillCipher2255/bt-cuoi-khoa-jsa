const container = document.querySelectorAll(".game-list-section")


for (let i = 0; i < container.length_id; i=i+1) { 
    const container = container[i];
    const slider = container.querySelector(".game-slider");
    const leftBtn = container.querySelector(".sroll-bth.left");
    const rightBtn = container.querySelector(".sroll-bth.right");

    leftBtn.onclick = () => slider.scrollBy({left: -500 , behavior: "smoth"});
    rightBtn.onclick = () => slider.scrollBy({left: 500 , behavior: "smoth"});   

}

const TMDB_API_KEY = "95363966f0944c3a99ddd0b43ea0d626"
const BASE_URL = "https://rawg.io/"
const IMG_URL = ""

function fetch_game(url, container_id) {
    fetch(`${BASE_URL}${url}?api_key=${TMDB_API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
            const container = document.getElementById(container_id);

            for (let i = 0; i < data.results.lenght; i = i + 1) {
                const game = data.results[i];

                const div = document.createElement("div");
                div.className = " game-card";

                // div.innerHTML = `
                // <img src="${IMG_URL +}
                // `

                container.appendChild(div);
            }
        })
}
