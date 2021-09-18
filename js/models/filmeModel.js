class FilmeModel {
  buscarFilmePorId(id, index, callback, posterOpcional) {
    $.ajax({
      url: `https://www.omdbapi.com/?apikey=da8a6c76&i=${id}`,
      success: function (result) {
        const novoFilme = new Filme(
          result.Title,
          posterOpcional ?? result.Poster,
          result.Rated,
          result.Runtime,
          result.Genre,
          result.Plot
        );

        callback(novoFilme, index);
      },
    });
  }

  buscarFilmePorTitulo(titulo, callback) {
    $.ajax({
      url: `https://www.omdbapi.com/?apikey=da8a6c76&s=${titulo}`,
      success: function (result) {
        if (result.Response == "True") {
          const listaFilmes = result.Search;
          const imagemIndisponivel =
            "https://www.bacozon.com/images/produto_indisponivel.png";
          for (let i = 0; i < listaFilmes.length; i++) {
            let poster = "";
            if (listaFilmes[i].Poster != "N/A") {
              poster = listaFilmes[i].Poster;
            } else {
              poster = imagemIndisponivel;
            }
            callback(listaFilmes[i].imdbID, poster);
          }
        } else {
          callback(null, null);
        }
      },
    });
  }
}
