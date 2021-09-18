class CadastroView {
  _limparEndereco() {
    $("#inputRua").val("");
    $("#inputComplemento").val("");
    $("#inputBairro").val("");
    $("#inputCity").val("");
    $("#inputState").val("");
  }

  _mostrarEndereco(endereco) {
    $("#inputRua").val(endereco.logradouro);
    $("#inputComplemento").val(endereco.complemento);
    $("#inputBairro").val(endereco.bairro);
    $("#inputCity").val(endereco.localidade);
    $("#inputState").val(endereco.estado);
  }

  _mostrarErroNaBuscaDoCep() {
    this._limparEndereco();
    alert("CEP inválido!");
  }

  _fazerBuscaDoEndereco(cep) {}

  _validarDigitacaoCep(fazerBuscaDoEndereco) {
    $("#inputZip").keyup((event) => {
      if (
        event.which !== 8 &&
        event.which !== 0 &&
        (event.which < 48 || event.which > 57)
      ) {
        $("#inputZip").val(function (index, value) {
          return value.replace(/\D/g, "");
        });
      }

      if ($("#inputZip").val().length == 8) {
        fazerBuscaDoEndereco(
          $("#inputZip").val().substring(0, 8),
          this._mostrarEndereco,
          this._mostrarErroNaBuscaDoCep
        );
      }
    });
  }

  _impedirCepComTamanhoErrado() {
    $("#inputZip").on("input", function () {
      if ($("#inputZip").val().length > 8) {
        const valorMaximo = $("#inputZip").val().slice(0, 8);
        $("#inputZip").val(valorMaximo);
      }
    });
  }

  adicionarCepInputEventListeners(fazerBuscaDoEndereco) {
    this._impedirCepComTamanhoErrado();
    this._validarDigitacaoCep(fazerBuscaDoEndereco);
  }
}
