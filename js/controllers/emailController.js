class EmailController {
  constructor() {
    this.emailModel = new EmailModel();
    this.emailView = new EmailView();
  }

  registrarViewListeners() {
    const validarEmail = (email) => this.emailModel.validarEmail(email);
    const fazerLoginFunction =
      window.location.pathname === "/html/senha.html" ? null : fazerLogin();
    this.emailView.registrarListeners(validarEmail, fazerLoginFunction);
  }
}

function redirecionarSeUsuarioLogado() {
  const usuarioLogado = verificarSeUsuarioEstaLogado();

  if (usuarioLogado) {
    alert("Você já efetuou o login!");
    window.location.href = "../index.html";
  }
}

$(redirecionarSeUsuarioLogado);

const emailController = new EmailController();
$(emailController.registrarViewListeners());
