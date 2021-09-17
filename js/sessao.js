function fazerLogin(email) {
  window.sessionStorage.setItem("email", email);
}

function verificarSeUsuarioEstaLogado() {
  return window.sessionStorage.getItem("email");
}

function fazerLogout() {
  window.sessionStorage.clear();
}
