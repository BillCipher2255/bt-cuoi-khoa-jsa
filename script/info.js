const API_KEY = "95363966f0944c3a99ddd0b43ea0d626";
const API_BASE_URL = "https://api.rawg.io/api/games";

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const game_id = params.get("id");

  if (!game_id) {
    console.error("Không tìm thấy game id trong URL");
    return;
  }

  fetch(`${API_BASE_URL}/${game_id}?key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      /* ===== Poster ===== */
      document.getElementById("preview-img").src =
        data.background_image || "";

      /* ===== Tên game ===== */
      document.getElementById("name").textContent =
        data.name || "Unknown";

      /* ===== Platforms ===== */
      const platformsEl = document.getElementById("parent_platforms");
      platformsEl.textContent = "Platforms: ";
      if (data.parent_platforms?.length) {
        platformsEl.textContent += data.parent_platforms
          .map((p) => p.platform.name)
          .join(", ");
      } else {
        platformsEl.textContent += "Unknown";
      }

      /* ===== Release date ===== */
      document.getElementById("release-date").textContent =
        `Release date: ${data.released || "Unknown"}`;

      /* ===== Developers ===== */
      const devEl = document.getElementById("developers");
      if (data.developers?.length) {
        devEl.textContent =
          "Developers: " +
          data.developers.map((d) => d.name).join(", ");
      } else {
        devEl.textContent = "Developers: Unknown";
      }

      /* ===== Updated ===== */
      document.getElementById("updated").textContent =
        `Last updated: ${data.updated || "Unknown"}`;

      /* ===== Description ===== */
      document.getElementById("game-description").textContent =
        data.description_raw || "No description available.";

      /* ===== Genres ===== */
      const genresBox = document.getElementById("genres");
      genresBox.innerHTML = "";

      if (data.genres?.length) {
        data.genres.forEach((genre) => {
          const span = document.createElement("span");
          span.className = "genre-tag";
          span.textContent = genre.name;
          genresBox.appendChild(span);
        });
      } else {
        genresBox.textContent = "No genres available";
      }
    })
    .catch((err) => console.error("API error:", err));
});


