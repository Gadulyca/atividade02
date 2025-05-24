const exibirAviso = (estaChovendo, semGuardaChuva) => {
  if (estaChovendo || semGuardaChuva) {
    console.log("Leve um guarda-chuva!");
  } else {
    console.log("Tudo certo, pode sair tranquilo");
  }
};
