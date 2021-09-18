class SessaoModel {
  fazerLogin(email) {
    window.sessionStorage.setItem("email", email);
  }

  verificarSeUsuarioEstaLogado() {
    return window.sessionStorage.getItem("email");
  }

  fazerLogout() {
    window.sessionStorage.clear();
  }
}
