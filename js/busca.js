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
            <h5 class="titulo-filme">${filme.titulo}</h5>
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
    } else {
        const divFilme = $(`
            <div class="text-center div-filme" id="filmeBuscado">
            <h4 class="titulo-filme">Nenhum filme encontrado.</h4>
            </div> `
        );
        $("#filmes").append(divFilme);
        $("#footer").css({ position: "absolute" });
    }

}

function popularFilme(id, poster) {
    if(id != null && poster != null){
        $.ajax({
            url: "https://www.omdbapi.com/?apikey=da8a6c76&i=" + id,
            success: function (result) {
                const novoFilme = new Filme(
                    result.Title,
                    poster,
                    result.Rated,
                    result.Runtime,
                    result.Genre,
                    result.Plot
                );
                
                inserirFilmeNaPagina(novoFilme);
    
    
            },
        });
    }else{
        inserirFilmeNaPagina(null);
    }
    
}

function buscarFilmeTitulo(titulo) {
    $.ajax({
        url: `https://www.omdbapi.com/?apikey=da8a6c76&s=${titulo}`,
        success: function (result) {
            if (result.Response == "True") {
                const listaFilmes = result.Search;
                const imagemIndisponivel = "https://www.bacozon.com/images/produto_indisponivel.png";
                for (let i = 0; i < listaFilmes.length; i++) {
                    let poster = "";
                    if (listaFilmes[i].Poster != "N/A") {
                        poster = listaFilmes[i].Poster;
                    } else {
                        poster = imagemIndisponivel;
                    }
                    popularFilme(listaFilmes[i].imdbID, poster)
                }
            } else {
                popularFilme(null, null)
            }
        },
    });
}
