class IndexController {
  constructor() {
    this.listaDeId = [
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

    this.filmeModel = new FilmeModel();
    this.indexView = new IndexView();
  }

  buscarFilmesNaApi() {
    this.listaDeId.forEach((id, index) => {
      this.filmeModel.buscarFilmePorId(
        id,
        index,
        this.indexView.inserirFilmeNaPagina
      );
    });
  }
}

const indexController = new IndexController();
$(indexController.buscarFilmesNaApi());
