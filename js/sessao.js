function fazerLogin(email) {
  window.sessionStorage.setItem("email", email);
}

function fazerLogout() {
  window.sessionStorage.clear();
}
