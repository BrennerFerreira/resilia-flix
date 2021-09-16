function validarEmail(email) {
  const emailRegExp =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegExp.test(email);
}

const erroDiv = $("#erro");
const emailDiv = $("#inputname");

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
    alert("Login bem-sucedido.");
    window.location.href = "../index.html";
  }
});
