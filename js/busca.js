$("#button-addon2").on("click", async function (event) {
  $("#filmeBuscado").remove();
  let textoBusca = $("#texto-busca").val();
  buscarFilmeTitulo(textoBusca);
  $("#footer").css({ position: "relative" });
});

function inserirFilmeNaPagina(filme) {
  console.log(filme);
  const divFilme = $(`
      <div class="text-center div-filme" id="filmeBuscado">
      <h2 class="titulo-filme">${filme.titulo}</h2>
      <img class="poster-filme" src=${filme.poster}>
      </div>
    `);

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

function buscarFilmeTitulo(titulo) {
  $.ajax({
    url: `https://www.omdbapi.com/?apikey=da8a6c76&t=${titulo}`,
    success: function (result) {
      const novoFilme = new Filme(
        result.Title,
        result.Poster,
        result.Rated,
        result.Runtime,
        result.Genre,
        result.Plot
      );

      inserirFilmeNaPagina(novoFilme);
    },
  });
}
