const filme = [];

const listaDeId = [
  "tt1707386",
  "tt0166813",
  "tt0120794",
  "tt0120855",
  "tt4479380",
  "tt4154796",
  "tt2361509",
  "tt0203009",
  "tt3783958",
  "tt1285016",
  "tt0289879",
  "tt2096673",
];

function inserirFilmeNaPagina(filme) {
  const divFilme = `
    <div class="div-filme">
    <h2 class="titulo-filme">${filme.titulo}</h2>
    <img class="poster-filme" src=${filme.poster}>
    <p class="duracao-filme"><b>Duração:</b> ${filme.duracao}</p>
    <p class="genero-filme"><b>Gênero:</b> ${filme.genero}</p>
    <p class="classificacao-filme"><b>Classificação:</b> ${filme.classificacao}</p>
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
        result.Runtime,
        result.Genre
      );

      inserirFilmeNaPagina(novoFilme);
    },
  });
}

$(function () {
  listaDeId.forEach(function (id) {
    buscarFilme(id);
  });
});
