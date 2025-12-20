

const API_KEY = "95363966f0944c3a99ddd0b43ea0d626";
const API_BASE_URL = "https://api.rawg.io/api/games";

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search); // sửa s1xearch -> search
  const game_id = params.get("id");

  //===== 1. Game details =====
  fetch(`${API_BASE_URL}/${game_id}?key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      // Ảnh game
      document.getElementById("preview-img").src = data.background_image || "";

      // Tên game
      document.getElementById("name").textContent = data.name;

      // Ngày phát hành
      document.getElementById("release-date").textContent = `Release date: ${data.released || "Unknown"}`;

      // Mô tả game
      document.getElementById("game-description").textContent = data.description_raw || "No description available.";

      // Thể loại game
      const genres_box = document.getElementById("genres");
      genres_box.innerHTML = ""; // reset trước khi thêm
      data.genres.forEach((genre) => {
        genres_box.innerHTML += `<span class="genre-tag">${genre.name}</span>`;
      });
    })
    .catch((err) => console.error(err));
});
