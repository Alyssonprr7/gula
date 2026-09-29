// script.js
// JavaScript comum ao esqueleto do site Gula.
// O menu hambúrguer e o dropdown "Receitas" já funcionam sozinhos via
// componentes do Bootstrap (data-bs-toggle) — não é necessário JS extra
// para eles.
//
// Use este arquivo apenas para comportamento realmente global (comum a
// todas as páginas). Lógica específica de uma página (busca, filtros de
// receitas, carrossel etc.) deve ficar em um arquivo próprio dessa página,
// para não misturar responsabilidades aqui.

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
