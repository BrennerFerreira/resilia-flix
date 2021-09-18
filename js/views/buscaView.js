class BuscaView {
  botaoBuscarListener(buscarFilme) {
    $("#button-addon2").click(function (event) {
      $("#filmes").html("");
      const textoBusca = $("#texto-busca").val();
      buscarFilme(textoBusca);
      $("#footer").css({ position: "relative" });
    });
  }

  inserirFilmeNaPagina(filme) {
    if (filme != null) {
      const divFilme = $(`
            <div class="text-center div-filme">
            <h5 class="titulo-filme">${filme.titulo}</h5>
            <img class="poster-filme img-filme" src=${filme.poster}>
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
    } else {
      const divFilme = $(`
            <div class="text-center div-filme" id="filmeBuscado">
            <h4 class="titulo-filme">Nenhum filme encontrado.</h4>
            </div> `);
      $("#filmes").append(divFilme);
      $("#footer").css({ position: "absolute" });
    }
  }
}
