function buscaDemorada() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Dados encontrados"), 2000);
    });
}

function timeout() {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Tempo esgotado"), 1000);
    });
}

async function buscarComTimeout() {
    try {
        const resultado = await Promise.race([buscaDemorada(), timeout()]);
        console.log("Resultado:", resultado);
    } catch (erro) {
        console.log("Erro:", erro);
    }
}