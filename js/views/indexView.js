class IndexView {
  inserirFilmeNaPagina = (filme, index) => {
    const divFilme = $(`
        <div class="carousel-item ${index === 0 ? "active" : ""}">
            <div
            class="
                d-block
                w-100
                d-flex
                align-items-center
                justify-content-center
            "
            >
            <img class="d-block w-25 img-filme" id="filme${index}" src=${
      filme.poster
    } />
            </div>
        </div>
        `);

    $(divFilme).click(() => this._inserirInformacoesDoFilmeNaDiv(filme));

    $("#filmes").append(divFilme);
    $("#carrossel-filmes").css("display", "block");
  };

  _inserirInformacoesDoFilmeNaDiv(filme) {
    $("#modal-titulo").text(filme.titulo);
    $("#modal-poster").attr("src", filme.poster);
    $("#modal-duracao").html(`<b>Duração:</b> ${filme.duracao}</p>`);
    $("#modal-genero").html(`<b>Gênero:</b> ${filme.genero}</p>`);
    $("#modal-classificacao").html(
      `<b>Classificação:</b> ${filme.classificacao}</p>`
    );
    $("#modal-plot").html(filme.plot);

    $("#filme-detalhes").modal("show");
  }
}
