const mdLinks = require('../index.js');
const arrayResult = [
  { text: 'Markdown', href: 'https://pt.wikipedia.org/wiki/Markdown' },
  { text: 'Node.js', href: 'https://nodejs.org/' },
  { text: '`curriculum-parser`', href: 'https://github.com/Laboratoria/curriculum-parser' }
];

describe("function mdLinks", () => {
  it("is a function", () => {
    expect(typeof mdLinks).toBe("function");
  });

  it("bring link and description from text", (done) => {
    mdLinks('./lib/texto.md')
      .then((result) => {
        expect(result).toEqual(arrayResult);
        done();
      });
  });

  it("Wrong path", (done) => {
    mdLinks('')
      .catch((error) => {
        expect(error).toEqual("Wrong path or archive");
        done();
      });
  });
});

//Instalação é npm + o que ta depois da barra URL do repositorio (carolrosatto/mdlinks)