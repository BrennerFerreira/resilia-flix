function fazerLogin(email) {
  window.sessionStorage.setItem("email", email);
}

function verificarSeUsuarioEstaLogado() {
  return window.sessionStorage.getItem("email");
}

function fazerLogout() {
  window.sessionStorage.clear();
}

function alterarViewUsuarioDeslogado() {
  $("#texto-nav").html(`
    <a class="nav-link" href="./html/pagina-cadastro.html"
      >Cadastre-se</a
    >
  `);

  $("#texto-nav").removeClass(
    "d-flex align-items-center justify-content-center px-1 logado"
  );

  const paginaAtual = window.location.pathname;

  $("#botao-nav").html(`
    <a
      id="botao-login"
      class="nav-link rounded text-light"
      aria-current="page"
      href=".${paginaAtual === "/index.html" ? "/html" : ""}/login.html"
      >Entrar</a
    >
  `);
}

function botaoSairClicado() {
  fazerLogout();
  alterarViewUsuarioDeslogado();
}

function alterarViewUsuarioLogado(emailUsuario) {
  $("#texto-nav").html(`
    <div>${emailUsuario}</div>
  `);

  $("#texto-nav").addClass(
    "d-flex align-items-center justify-content-center px-1 logado"
  );

  $("#botao-nav").html(`
    <button class="btn btn-primary botao-sair">
      Sair
    </button>
  `);

  $(".botao-sair").click(botaoSairClicado);
}

function buscarUsuarioLogado() {
  const emailUsuario = verificarSeUsuarioEstaLogado();

  if (emailUsuario) {
    alterarViewUsuarioLogado(emailUsuario);
  }
}

$(buscarUsuarioLogado);
