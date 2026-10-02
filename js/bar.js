const drinks = document.querySelectorAll("#drink-list .recipe-item");
const filterButtons = document.querySelectorAll(".filter-chip");
const searchForm = document.getElementById("drink-search");
const searchInput = searchForm.querySelector("input");
const emptyMessage = document.getElementById("drink-empty");

let activeFilter = "all";

function normalize(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function updateList() {
  const searchTerm = normalize(searchInput.value);
  let visibleDrinks = 0;

  drinks.forEach(drink => {
    const tags = drink.dataset.tags.split(" ");
    const text = normalize(drink.textContent);
    const matchesFilter = activeFilter === "all" || tags.includes(activeFilter);
    const matchesSearch = text.includes(searchTerm);
    const isVisible = matchesFilter && matchesSearch;

    drink.classList.toggle("d-none", !isVisible);
    if (isVisible) visibleDrinks++;
  });

  emptyMessage.classList.toggle("d-none", visibleDrinks > 0);
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(filterButton => {
      filterButton.classList.remove("is-active");
      filterButton.setAttribute("aria-pressed", "false");
    });

    button.classList.add("is-active");
    button.setAttribute("aria-pressed", "true");
    activeFilter = button.dataset.filter;
    updateList();
  });
});

searchForm.addEventListener("submit", event => {
  event.preventDefault();
  updateList();
});

searchInput.addEventListener("input", updateList);