const filme = [];

$.ajax({
  url: "http://www.omdbapi.com/?apikey=da8a6c76&i=tt1285016",
  success: function (result) {
    const novoFilme = new Filme(
      result.Title,
      result.Poster,
      result.Rated,
      result.Runtime
    );

    $("#movie").html(`
        <h1 class="titulo-filme">${novoFilme.titulo}</h1>
        <img class="poster-filme" src=${novoFilme.poster}>
        <p class="duracao-filme">Duração: ${novoFilme.duracao}</p>
        <p class="classificacao-filme">Classificação: ${novoFilme.classificacao}</p>
      `);
  },
});
