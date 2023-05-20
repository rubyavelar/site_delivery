function buscarEnderecoPorCEP(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          console.log('Erro: CEP não encontrado');
        } else {
          const endereco = data.logradouro;
          const cidade = data.localidade;

          document.getElementById('endereco').value = endereco;
          document.getElementById('cidade').value = cidade;
        }
      })
      .catch(error => {
        console.log('Erro na requisição:', error);
      });
  }

  const cepInput = document.getElementById('cep');
  cepInput.addEventListener('blur', function() {
    const cep = this.value.replace(/\D/g, '');

    if (cep.length === 8) {
      buscarEnderecoPorCEP(cep);
    }
  });




