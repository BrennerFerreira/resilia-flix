class EmailController {
  constructor() {
    this.emailModel = new EmailModel();
    this.emailView = new EmailView();
    this.sessaoController = new SessaoController();
  }

  registrarViewListeners() {
    const validarEmail = (email) => this.emailModel.validarEmail(email);
    const fazerLoginFunction =
      window.location.pathname === "/html/senha.html"
        ? null
        : this.sessaoController.fazerLogin;
    this.emailView.registrarListeners(validarEmail, fazerLoginFunction);
  }

  redirecionarSeUsuarioLogado() {
    const usuarioLogado = this.sessaoController.verificarSeUsuarioEstaLogado();

    if (usuarioLogado) {
      alert("Você já efetuou o login!");
      window.location.href = "../index.html";
    }
  }
}

const emailController = new EmailController();
$(emailController.redirecionarSeUsuarioLogado());
$(emailController.registrarViewListeners());
