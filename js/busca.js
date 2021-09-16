$("#button-addon2").on("click", async function (event) {
    $("#filmes").html("");
    let textoBusca = $("#texto-busca").val();
    buscarFilmeTitulo(textoBusca);
    $("#footer").css({ position: "relative" });
});

function inserirFilmeNaPagina(filme) {
    if (filme != null) {
        const divFilme = $(`
            <div class="text-center div-filme">
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
    }else{
        const divFilme = $(`
            <div class="text-center div-filme" id="filmeBuscado">
            <h2 class="titulo-filme">Nenhum filme encontrado.</h2>
            </div> `
        );
        $("#filmes").append(divFilme);
        $("#footer").css({ position: "absolute" });
    }

}

function buscarFilmeTitulo(titulo) {
    $.ajax({
        url: `https://www.omdbapi.com/?apikey=da8a6c76&s=${titulo}`,
        success: function (result) {
            if(result.Response == "True"){
                const listaFilmes = result.Search;
                for(let i=0; i < listaFilmes.length; i++){
                    const novoFilme = new Filme(
                        listaFilmes[i].Title,
                        listaFilmes[i].Poster,
                        listaFilmes[i].Rated,
                        listaFilmes[i].Runtime,
                        listaFilmes[i].Genre,
                        listaFilmes[i].Plot
                    );
                    inserirFilmeNaPagina(novoFilme);
                }
            }else{
                inserirFilmeNaPagina(null);
            }
            
        },
    });
}
