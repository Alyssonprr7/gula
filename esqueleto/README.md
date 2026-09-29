# Gula — esqueleto HTML comum

Base para todas as páginas do site: cabeçalho (barra superior + navbar com
dropdown "Receitas"), rodapé, e um espaço reservado para o conteúdo de cada
página. Só HTML + CSS + JS, com Bootstrap via CDN.

## Arquivos

- `esqueleto/esqueleto.html` — modelo da página. Duplique este arquivo na
  raiz do projeto para cada página (`salgados.html`, `doces.html`,
  `drinks.html`, `bar.html`, `colunas.html`...).
- `esqueleto/esqueleto.css` — paleta de cores, tipografia e estilos comuns
  (header, rodapé, faixa, botões, filtro e cards de receita).
  Não precisa mexer aqui para montar o conteúdo de uma página.
- `esqueleto/esqueleto.js` — JS comum a todas as páginas. Monta o
  cabeçalho e o rodapé (veja abaixo). O menu hambúrguer e o dropdown
  funcionam sozinhos (componentes do Bootstrap).
- `css/style.css` — estilos exclusivos da capa (`index.html`).

## Como cada colega deve usar

1. Copie `esqueleto/esqueleto.html` para a raiz com o nome da página
   (ex.: `doces.html`).
2. **Não mexa** no `<header>` nem no `<footer>` — é o esqueleto comum.
3. Dentro de `<main id="conteudo">`, apague o placeholder e cole o conteúdo
   da página (título da seção, filtros, cards de receita, banner etc.).
4. Se a página tiver um JS próprio (ex.: filtro de busca), crie um arquivo
   separado (ex.: `js/doces.js`) e importe-o no fim do `body`, depois do
   `esqueleto/esqueleto.js`. Exemplo pronto: `js/salgados.js`.
5. Ajuste o `data-secao` do `<header>` para refletir a seção atual
   (ex.: "seção de doces", "seção de salgados").

## Cabeçalho (menu)

O cabeçalho (barra superior + navbar) é escrito uma única vez, em
`esqueleto/esqueleto.js`. Cada página tem só a tag vazia:

```html
<header id="header" data-secao="seção de doces"></header>
```

O script preenche a tag, escreve o `data-secao` como texto da seção atual
na navbar e destaca automaticamente o link da página aberta. Para adicionar
ou mudar um link do menu no site inteiro, edite apenas o
`esqueleto/esqueleto.js`.

## Rodapé

O rodapé é escrito uma única vez, em `esqueleto/esqueleto.js`. Cada página
tem só a tag vazia:

```html
<footer class="footer-gula" id="footer"></footer>
```

Ao carregar a página, o script preenche essa tag com o logo, o texto e os
selos da UFF. Para mudar o rodapé do site inteiro, edite apenas o
`esqueleto/esqueleto.js`. Funciona abrindo o arquivo direto no navegador,
sem precisar de servidor.

Como os caminhos das imagens do rodapé (`img/...`) são relativos, as páginas
devem ficar na raiz do projeto.

## Paleta (definida em `esqueleto/esqueleto.css`)

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
