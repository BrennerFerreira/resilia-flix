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

function inserirFilmeNaPagina(filme, index) {
  const divFilme = $(`#filme${index}`);

  divFilme.attr("src", filme.poster);

  $(divFilme).click(function () {
    $("#modal-titulo").text(filme.titulo);
    $("#modal-poster").attr("src", filme.poster);
    $("#modal-duracao").html(`<b>Duração:</b> ${filme.duracao}</p>`);
    $("#modal-genero").html(`<b>Gênero:</b> ${filme.genero}</p>`);
    $("#modal-classificacao").html(
      `<b>Classificação:</b> ${filme.classificacao}</p>`
    );
    $("#modal-plot").html(filme.plot);

    $("#filme-detalhes").modal("show");
  });

  $("#filmes").append(divFilme);
}

function buscarFilme(id, index) {
  $.ajax({
    url: `http://www.omdbapi.com/?apikey=da8a6c76&i=${id}`,
    success: function (result) {
      const novoFilme = new Filme(
        result.Title,
        result.Poster,
        result.Rated,
        result.Runtime,
        result.Genre,
        result.Plot
      );

      inserirFilmeNaPagina(novoFilme, index);
    },
  });
}

function buscarFilmesNaApi() {
  listaDeId.forEach(function (id, index) {
    buscarFilme(id, index);
  });
}

$(buscarFilmesNaApi);
