const filme = [];

const listaDeId = ["tt1285016", "tt4154796"];

function inserirFilmeNaPagina(filme) {
  const divFilme = `
    <div>
    <h1 class="titulo-filme">${filme.titulo}</h1>
    <img class="poster-filme" src=${filme.poster}>
    <p class="duracao-filme">Duração: ${filme.duracao}</p>
    <p class="classificacao-filme">Classificação: ${filme.classificacao}</p>
    </div>
  `;

  $("#filmes").append(divFilme);
}

function buscarFilme(id) {
  $.ajax({
    url: `http://www.omdbapi.com/?apikey=da8a6c76&i=${id}`,
    success: function (result) {
      const novoFilme = new Filme(
        result.Title,
        result.Poster,
        result.Rated,
        result.Runtime
      );

      inserirFilmeNaPagina(novoFilme);
    },
  });
}

for (let i = 0; i < listaDeId.length; i++) {
  buscarFilme(listaDeId[i]);
}
