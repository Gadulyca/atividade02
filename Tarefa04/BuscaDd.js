function buscarDadosDoServidor() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ status: 200, dados: "OK" });
        }, 2000);
    });
}

async function usarBuscarDados() {
    const resposta = await buscarDadosDoServidor();
    console.log("Resposta do servidor:", resposta);
}