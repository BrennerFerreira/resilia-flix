class CadastroController {
  constructor() {
    this.cadastroModel = new CadastroModel();
    this.cadastroView = new CadastroView();
  }

  adicionarListeners() {
    this.cadastroView.adicionarCepInputEventListeners(
      this.cadastroModel.buscarEndereco
    );
  }
}

const cadastroController = new CadastroController();
$(cadastroController.adicionarListeners());
