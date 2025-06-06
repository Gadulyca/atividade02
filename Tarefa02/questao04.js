const verificarAcesso = (idade, temIngresso) => {
    idade = 20;
  if (idade >= 18 && temIngresso) {
    console.log("Acesso permitido");
  } else {
    console.log("Acesso negado");
  }
}
verificarAcesso();