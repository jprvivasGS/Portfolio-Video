# Portfólio — João Pedro Ribeiro Vivas

Site estático (HTML, CSS e JS puro), sem build.

## Estrutura

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── videos.js      <- títulos, datas, descrições e vídeos (edite aqui)
│   └── main.js
└── assets/
    ├── videos/        <- coloque seus .mp4 aqui
    └── img/
```

## Adicionando os vídeos

Abra `js/videos.js` e preencha, em cada item, um destes campos:

- `file: "assets/videos/nome-do-arquivo.mp4"` para um arquivo na pasta `assets/videos/`
- `youtube: "ID_DO_VIDEO"` para um vídeo do YouTube (pode ser "não listado")

Sem nenhum dos dois, o card mostra "Vídeo em breve".

O GitHub recusa arquivos com mais de 100 MB. Para vídeos grandes, use o YouTube.

## Publicando no GitHub Pages

1. Crie um repositório e envie o **conteúdo** desta pasta (o `index.html` precisa ficar na raiz do repositório).
2. No GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**.
3. Escolha a branch `main` e a pasta `/ (root)`, e salve.
4. O site fica em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

Todos os caminhos são relativos, então funcionam tanto na raiz quanto em subpasta.

## Testar localmente

```
python3 -m http.server 8000
```

e abra http://localhost:8000
