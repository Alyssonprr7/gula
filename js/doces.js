const recipes = document.querySelectorAll("#recipe-list .recipe-item");
const chips = document.querySelectorAll(".filter-chip");
const searchForm = document.getElementById("doces-search");
const searchInput = searchForm.querySelector("input");
const emptyMessage = document.getElementById("recipe-empty");
const recipeStatus = document.getElementById("recipe-status");

let activeFilter = "all";

// Assim, "limao" também encontra "limão".
function normalize(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function matchesFilter(recipe) {
  if (activeFilter === "all") return true;
  // O tempo de geladeira não entra nos minutos de preparo.
  if (activeFilter === "quick") return Number(recipe.dataset.time) <= 30;
  return recipe.dataset.tags.split(" ").includes(activeFilter);
}

function updateList() {
  const term = normalize(searchInput.value);
  let visible = 0;

  recipes.forEach(recipe => {
    const title = normalize(recipe.querySelector(".recipe-card-title").textContent);
    const show = matchesFilter(recipe) && title.includes(term);

    recipe.classList.toggle("d-none", !show);
    if (show) visible++;
  });

  emptyMessage.classList.toggle("d-none", visible > 0);
  recipeStatus.textContent = visible === 1
    ? "1 receita encontrada."
    : `${visible} receitas encontradas.`;
}

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    activeFilter = chip.dataset.filter;

    chips.forEach(button => {
      const selected = button === chip;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });

    updateList();
  });
});

searchForm.addEventListener("submit", event => {
  event.preventDefault();
  updateList();
});

searchInput.addEventListener("input", updateList);
updateList();
