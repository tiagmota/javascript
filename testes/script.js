var items = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ]; 
  /**
   * 
   * @param {string} texto -Texto para ser codificado
   * @returns - Texto codificado 
   */
  function Codificar(texto) {
    items.forEach((element) => {
      let textoProcurar = element[0];
      let textoSubstituir = element[1];
      texto = texto.replaceAll(textoProcurar, textoSubstituir);
    });
    return texto;
  }
  /** 
   * 
   * @param {string} texto - Texto para ser decodificado
   * @returns - Texto decodificado
   */
  function Decodificar(texto) {
    items.forEach((element) => {
      let textoProcurar = element[1];
      let textoSubstituir = element[0]; 
      texto = texto.replaceAll(textoProcurar, textoSubstituir);
    });
  
    return texto;
  }
  /**
   * 
   * @param {string} campo texto para ser copiado 
   */
  function copiar(campo) {
    campo.select();
    campo.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(campo.value);
    alert("O texto foi copiado");
  }
  /**
   * 
   * @param {string} texto - Texto para ser validado
   * @returns true ou false 
   */
  function entradaValida(texto) {
    if (texto === "") {
      alert("Digite um texto!");
      return false;
    }
    if (texto.toLowerCase() != texto) {
      alert("Deve usar apenas letras minusculas!");
      return false;
    }
    const caracteresAcentos = "ÁÉÍÓÚáéíóúâêîôûàèìòùÇç";
    var arrayCaracteresAcentos = caracteresAcentos.split("");
  
    arrayCaracteresAcentos.forEach(function (caractere) {
      if (texto.includes(caractere)) {
        alert("Não pode utilizar acentos!");
        return false;
      } 
    }); 
    return true;
  } 
  
  //botao de desencriptar
  document.getElementById("btn-cripto").addEventListener("click", function () {
    let textoCodificado = document.getElementById("input-texto").value;
    if (!entradaValida(textoCodificado)) {
      return;
    }
    let textoDecodificado = Codificar(textoCodificado);
    document.getElementById("msg").value = textoDecodificado;
  });
  //botao de encriptar
  document.getElementById("btn-descripto").addEventListener("click", function () {
    let textoNormal = document.getElementById("input-texto").value;
    if (!entradaValida(textoNormal)) {
      return;
    }
    let textoDecodificado = Decodificar(textoNormal);
    document.getElementById("msg").value = textoDecodificado;
  });
  //botao de copiar
  document.getElementById("btn-copy").addEventListener("click", function () {
    let inputMensagem = document.getElementById("msg");
    copiar(inputMensagem);
  });