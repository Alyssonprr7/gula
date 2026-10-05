// script.js
// JavaScript comum ao esqueleto do site Gula.
// Monta o cabeçalho e o rodapé de todas as páginas. O menu hambúrguer e o
// dropdown "Receitas" continuam funcionando sozinhos via componentes do
// Bootstrap (data-bs-toggle), mesmo com o HTML inserido por aqui.
//
// Use este arquivo apenas para comportamento realmente global (comum a
// todas as páginas). Lógica específica de uma página (busca, filtros de
// receitas, carrossel etc.) deve ficar em um arquivo próprio dessa página,
// para não misturar responsabilidades aqui.

// ---------- cabeçalho comum ----------
// O cabeçalho (topbar + menu) é escrito só aqui. Cada página deixa apenas
// <header id="header" data-secao="seção de salgados"></header>
// e este script preenche. O data-secao vira o texto da seção atual na navbar.
const header = document.getElementById("header");

if (header) {
  header.innerHTML = `
    <div class="topbar">
      <div class="container-fluid px-4 px-lg-5 d-flex justify-content-between">
        <span>Revista digital de receitas</span>
        <span id="edicao">Edição de setembro</span>
      </div>
    </div>

    <nav class="navbar navbar-expand-lg navbar-gula">
      <div class="container-fluid px-4 px-lg-5">

        <a class="navbar-brand" href="index.html">Gula</a>

        <button class="navbar-toggler" type="button"
                data-bs-toggle="collapse" data-bs-target="#navGula"
                aria-controls="navGula" aria-expanded="false"
                aria-label="Alternar navegação">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navGula">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="receitasDropdown"
                 role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Receitas
              </a>
              <ul class="dropdown-menu" aria-labelledby="receitasDropdown">
                <li><a class="dropdown-item" href="salgados.html">Salgadas</a></li>
                <li><a class="dropdown-item" href="doces.html">Doces</a></li>
                <li><a class="dropdown-item" href="bar.html">Drinks</a></li>
              </ul>
            </li>
          </ul>

          <span class="navbar-text page-context" id="page-context"></span>
        </div>

      </div>
    </nav>
  `;

  document.getElementById("page-context").textContent = header.dataset.secao || "";

  // destaca no menu o link da página aberta (abrindo na raiz, a página é a capa)
  const paginaAtual = location.pathname.split("/").pop() || "index.html";
  const linkAtual = header.querySelector(`a[href="${paginaAtual}"]:not(.navbar-brand)`);

  if (linkAtual) {
    linkAtual.classList.add("active");
    linkAtual.setAttribute("aria-current", "page");
  }
}

// ---------- rodapé comum ----------
// O rodapé é escrito só aqui. Cada página deixa apenas
// <footer class="footer-gula" id="footer"></footer> e este script preenche.
const footer = document.getElementById("footer");

if (footer) {
  footer.innerHTML = `
    <div class="container-fluid px-4 px-lg-5 footer-barra d-flex flex-column flex-sm-row justify-content-between align-items-center gap-4">
      <div class="text-center text-sm-start">
        <span class="footer-logo">Gula</span>
        <span class="footer-text d-block">Revista digital de receitas</span>
      </div>
      <div class="d-flex align-items-center gap-4">
        <img class="footer-selo" src="img/uff.svg" alt="Universidade Federal Fluminense">
        <img class="footer-selo" src="img/ic-uff.png" alt="Instituto de Computação">
      </div>
    </div>
  `;
}
