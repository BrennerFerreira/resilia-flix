class BuscaController {
  constructor() {
    this.filmeModel = new FilmeModel();
    this.buscaView = new BuscaView();
  }

  popularFilme = (id, poster) => {
    if (id != null && poster != null) {
      this.filmeModel.buscarFilmePorId(
        id,
        null,
        this.buscaView.inserirFilmeNaPagina,
        poster
      );
    } else {
      this.buscaView.inserirFilmeNaPagina(null);
    }
  };

  buscarFilmeFn = (titulo) =>
    this.filmeModel.buscarFilmePorTitulo(titulo, this.popularFilme);

  registrarListeners() {
    this.buscaView.botaoBuscarListener(this.buscarFilmeFn);
  }
}

const buscaController = new BuscaController();
$(buscaController.registrarListeners());
