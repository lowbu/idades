function calcularFaixaEtaria() {
    var idade = document.getElementById('idade').value;
    var resultado = document.getElementById('resultado');
    var imagem = document.getElementById('imagem');
  
    if 
    (idade >= 0 && idade <= 2) {
        resultado.textContent = 'Bebé';
        imagem.src = 'imagens/bebe.png';
    } else if 
    (idade > 0 && idade < 2) {
     resultado.textContent = 'Bebé';
     imagem.src = 'imagens/bebe.png';
    } else if 
    (idade > 2 && idade < 12) {
     resultado.textContent = 'Criança';
     imagem.src = 'imagens/crianca.png';
    } else if
     (idade >= 12 && idade <= 16) {
      resultado.textContent = 'Adolescente';
      imagem.src = 'imagens/adolescente.png';
    } else if
     (idade > 16 && idade < 18) {
      resultado.textContent = 'Jovem Adulto';
      imagem.src = 'imagens/jovem adulto.png';
    } else if
     (idade >= 18 && idade < 50) {
      resultado.textContent = 'Adulto';
      imagem.src = 'imagens/adulto.png';
    } else if
     (idade >= 50 && idade <= 65) {
      resultado.textContent = 'Adulto de Meia Idade';
      imagem.src = 'imagens/adulto meia idade.png';
    } else if
     (idade > 65 && idade < 100) {
      resultado.textContent = 'Idoso';
      imagem.src = 'imagens/idoso.png';
    } else if 
     (idade >= 100 && idade < 130) {
      resultado.textContent = 'Lendário';
      imagem.src = 'imagens/lendario.png';
    } else if 
     (idade >= 130) {
      resultado.textContent = 'Imortal';
      imagem.src = 'imagens/imortal.png';
    } else {
      resultado.textContent = 'Idade inexistente';
      imagem.src = 'imagens/impossivel.png';
    }
  }
  