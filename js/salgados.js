// salgados.js
// Filtro por categoria e busca por nome das receitas salgadas.
// Cada receita (.recipe-item) guarda data-time (minutos) e data-tags
// (modo de preparo + "vegan"); os botões de filtro guardam data-filter.

const recipes = document.querySelectorAll(".recipe-item");
const chips = document.querySelectorAll(".filter-chip");
const searchForm = document.querySelector(".filter-search");
const searchInput = searchForm.querySelector("input");
const emptyMessage = document.getElementById("recipe-empty");

let activeFilter = "all";

// deixa o texto minúsculo e sem acento, para "pao" achar "Pão"
function normalize(text) {
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
}

function matchesFilter(recipe) {
  const tags = recipe.dataset.tags.split(" ");
  const time = Number(recipe.dataset.time);

  if (activeFilter === "all") return true;
  if (activeFilter === "quick") return time <= 30;
  return tags.includes(activeFilter);
}

function matchesSearch(recipe) {
  const term = normalize(searchInput.value);
  const title = normalize(recipe.querySelector(".recipe-card-title").textContent);
  return title.includes(term);
}

function updateList() {
  let visible = 0;

  recipes.forEach(recipe => {
    const show = matchesFilter(recipe) && matchesSearch(recipe);
    recipe.classList.toggle("d-none", !show);
    if (show) visible++;
  });

  emptyMessage.classList.toggle("d-none", visible > 0);
}

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("is-active"));
    chip.classList.add("is-active");
    activeFilter = chip.dataset.filter;
    updateList();
  });
});

// Busca do filtro por nome da receita
searchForm.addEventListener("submit", event => {
  event.preventDefault();
  updateList();
});
