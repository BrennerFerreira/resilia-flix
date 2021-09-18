class FilmeModel {
  buscarFilmePorId(id, index, callback) {
    $.ajax({
      url: `https://www.omdbapi.com/?apikey=da8a6c76&i=${id}`,
      success: function (result) {
        const novoFilme = new Filme(
          result.Title,
          result.Poster,
          result.Rated,
          result.Runtime,
          result.Genre,
          result.Plot
        );

        callback(novoFilme, index);
      },
    });
  }
}
