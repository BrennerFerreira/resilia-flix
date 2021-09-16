$("#inputZip").keyup(function (event) {
  if (
    event.which !== 8 &&
    event.which !== 0 &&
    (event.which < 48 || event.which > 57)
  ) {
    $(this).val(function (index, value) {
      return value.replace(/\D/g, "");
    });
  }

  if ($(this).val().length == 8) {
    buscarEndereco($(this).val().substring(0, 8));
  }

  if ($(this).val().length < 8) {
    limparEndereco();
  }
});

$("#inputZip").on("input", function () {
  if ($(this).val().length > 8) {
    $(this).val($(this).val().slice(0, 8));
  }
});

function limparEndereco() {
  $("#inputRua").val("");
  $("#inputComplemento").val("");
  $("#inputBairro").val("");
  $("#inputCity").val("");
  $("#inputState").val("");
}

function mostrarEndereco(endereco) {
  $("#inputRua").val(endereco.logradouro);
  $("#inputComplemento").val(endereco.complemento);
  $("#inputBairro").val(endereco.bairro);
  $("#inputCity").val(endereco.localidade);
  $("#inputState").val(endereco.estado);
}

function buscarEndereco(cep) {
  $.ajax({
    url: `https://viacep.com.br/ws/${cep}/json/`,
    success: function (result) {
      if (result["erro"]) {
        limparEndereco();
        alert("CEP inválido!");
        return;
      }

      const endereco = new Endereco(
        result.cep,
        result.logradouro,
        result.complemento,
        result.bairro,
        result.localidade,
        result.uf
      );

      mostrarEndereco(endereco);
    },
  });
}
