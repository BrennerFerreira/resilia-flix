class SessaoController {
  constructor() {
    this.sessaoModel = new SessaoModel();
    this.sessaoView = new SessaoView();
  }

  botaoSairClicado = () => {
    this.sessaoModel.fazerLogout();
    this.sessaoView.alterarViewUsuarioDeslogado();
  };

  buscarUsuarioLogado = () => {
    const emailUsuario = this.sessaoModel.verificarSeUsuarioEstaLogado();

    if (emailUsuario) {
      this.sessaoView.alterarViewUsuarioLogado(
        emailUsuario,
        this.botaoSairClicado
      );
    }
  };

  verificarSeUsuarioEstaLogado = () =>
    this.sessaoModel.verificarSeUsuarioEstaLogado();

  fazerLogin = (email) => this.sessaoModel.fazerLogin(email);
}

const sessaoController = new SessaoController();

$(sessaoController.buscarUsuarioLogado);
