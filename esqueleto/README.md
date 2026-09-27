# Gula — esqueleto HTML comum

Base para todas as páginas do site: cabeçalho (barra superior + navbar com
dropdown "Receitas"), rodapé, e um espaço reservado para o conteúdo de cada
página. Só HTML + CSS + JS, com Bootstrap via CDN.

## Arquivos

- `index.html` — modelo da página. Duplique este arquivo para cada página
  (`salgadas.html`, `doces.html`, `drinks.html`, `bar.html`, `colunas.html`...).
- `css/style.css` — paleta de cores, tipografia e estilos do header/footer.
  Não precisa mexer aqui para montar o conteúdo de uma página.
- `js/script.js` — reservado para JS realmente global. O menu hambúrguer e o
  dropdown já funcionam sozinhos (componentes do Bootstrap).

## Como cada colega deve usar

1. Copie `index.html` com o nome da página (ex.: `doces.html`).
2. **Não mexa** no `<header>` nem no `<footer>` — é o esqueleto comum.
3. Dentro de `<main id="conteudo">`, apague o placeholder e cole o conteúdo
   da página (título da seção, filtros, cards de receita, banner etc.).
4. Se a página tiver um JS próprio (ex.: filtro de busca), crie um arquivo
   separado (ex.: `js/doces.js`) e importe-o no fim do `body`, depois do
   `script.js`.
5. Atualize o texto do `<span id="page-context">` na navbar para refletir a
   seção atual (ex.: "seção de doces", "seção de salgados").

## Paleta (definida em `css/style.css`)

| Variável            | Uso                                   |
|---------------------|----------------------------------------|
| `--gula-dark`        | barra superior e rodapé               |
| `--gula-maroon`       | navbar                                |
| `--gula-maroon-hi`    | hover / detalhes sobre o maroon       |
| `--gula-cream`        | fundo das páginas                    |
| `--gula-cream-2`      | fundo alternativo (cards, blocos)     |
| `--gula-gold`         | acento (botões, links de destaque)    |
| `--gula-ink`          | texto sobre fundo claro               |

Tipografia: `Playfair Display` (serifada) para o logo e títulos, `Inter`
para o corpo do texto — carregadas via Google Fonts no `<head>`.
