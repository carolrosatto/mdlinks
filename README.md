# MD Links - v. 1.0.0
## 1. O que é o MD Links?
[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação
muito popular entre os programadores. É usada em muitas plataformas que
manipulam texto (GitHub, fórum, blogs e etc), e é muito comum encontrar arquivos
com este formato em qualquer repositório (começando pelo tradicional
`README.md`).

**MD Links** é uma biblioteca que busca links e suas descrições dentro de um arquivo .md, trazendo no terminal toda a relação de links encontrados.

## 2. Instalação
Você deve ter o node.js e o npm instalados em seu computador ou projeto. 

No terminal, dentro da pasta destinada ao projeto, inserir:
```shell
​
$  npm install carolrosatto/mdlinks
​
```

## 3. Utilização
No arquivo JavaScript, linkar a biblioteca e o arquivo .md que será utilizado. Substituir o caminho do arquivo na constante mdLinks:

```node

> const mdLinks = require('path_do_arquivo.md');

```

No terminal, chamar a biblioteca e o arquivo em que ela deve buscar os links:
```shell
​
$  npm md-links path_do_arquivo.md
​
```

O formato do resultado será esse:
```
returns 

text:Markdown
href:https://pt.wikipedia.org/wiki/Markdown
text:Node.js
href:https://nodejs.org/
text:`curriculum-parser`
href:https://github.com/Laboratoria/curriculum-parser
```

## 4. Roadmap
Versão 1.0.0: Localização e extração de links em arquivos .md

## 5. Recursos utilizados:
- JavaScript
- Node.js
- Jest
- CLI
- Eslint
- Git e Github
- Testes unitários
