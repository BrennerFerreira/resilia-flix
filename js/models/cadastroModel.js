class CadastroModel {
  buscarEndereco(cep, callbackSucesso, callbackErro) {
    console.log("buscar endereco chamado");
    console.log({ cep, callbackSucesso, callbackErro });
    $.ajax({
      url: `https://viacep.com.br/ws/${cep}/json/`,
      success: function (result) {
        if (result["erro"]) {
          callbackErro();
        }

        const endereco = new Endereco(
          result.cep,
          result.logradouro,
          result.complemento,
          result.bairro,
          result.localidade,
          result.uf
        );

        callbackSucesso(endereco);
      },
    });
  }
}
