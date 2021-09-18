class EmailView {
  constructor() {
    this.erroDiv = $("#erro");
    this.emailDiv = $("#email");
  }

  limparErro() {
    this.erroDiv.text("");
    this.emailDiv.css("border", "none");
  }

  inserirEmailInvalido() {
    this.erroDiv.text("E-mail inválido");
    this.erroDiv.css("color", "red");
    this.emailDiv.css("border", "1px solid red");
  }

  campoEmailDigitacaoListener() {
    $("#form").keyup(() => {
      this.erroDiv.text("");
      this.emailDiv.css("border", "none");
    });
  }

  _mostrarAlerta() {
    const paginaAtual = window.location.pathname;

    switch (paginaAtual) {
      case "/html/senha.html":
        alert(
          "Uma mensagem com instruções foi enviado para o e-mail informado."
        );
        break;
      case "/html/pagina-cadastro.html":
        alert("Conta criada com sucesso.");
        break;
      default:
        alert("Login bem-sucedido.");
        break;
    }
  }

  formSubmitListener(validarEmail, fazerLoginDoUsuario) {
    $("#form").submit((event) => {
      event.preventDefault();

      this.limparErro();

      const emailValue = this.emailDiv.val();

      if (validarEmail(emailValue)) {
        if (fazerLoginDoUsuario) {
          fazerLoginDoUsuario(emailValue);
        }
        this._mostrarAlerta();
        window.location.href = "../index.html";
      } else {
        this.inserirEmailInvalido();
      }
    });
  }

  registrarListeners(validarEmail, fazerLoginDoUsuario) {
    $(this.campoEmailDigitacaoListener());
    $(this.formSubmitListener(validarEmail, fazerLoginDoUsuario));
  }
}
