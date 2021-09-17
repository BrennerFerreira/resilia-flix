function validarEmail(email) {
  const emailRegExp =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegExp.test(email);
}

const erroDiv = $("#erro");
const emailDiv = $("#email");

function validar() {
  erroDiv.text("");

  if (!validarEmail(emailDiv.val())) {
    erroDiv.text("E-mail inválido");
    erroDiv.css("color", "red");
    emailDiv.css("border", "1px solid red");
  }

  return validarEmail(emailDiv.val());
}

$("#form").keyup(function () {
  erroDiv.text("");
  emailDiv.css("border", "none");
});

$("#form").submit(function (event) {
  event.preventDefault();
  if (validar()) {
    fazerLogin(emailDiv.val());
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
    window.location.href = "../index.html";
  }
});

function redirecionarSeUsuarioLogado() {
  const usuarioLogado = verificarSeUsuarioEstaLogado();

  if (usuarioLogado) {
    alert("Você já efetuou o login!");
    window.location.href = "../index.html";
  }
}

$(redirecionarSeUsuarioLogado);
