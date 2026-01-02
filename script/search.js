const search_input = document.getElementById("search-input");
const search_button = document.getElementById("search-game");

function search_game() {
  const keyword = search_input.value.trim();

  window.location.href = `../search.html?query=${encodeURIComponent(keyword)}`;
}

search_button.addEventListener("click", search_game);

search_input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") search_game();
});