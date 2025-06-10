function validarIdade(idade) {
    return new Promise((resolve, reject) => {
        if (idade >= 18) {
            resolve("Acesso permitido");
        } else {
            reject("Acesso negado");
        }
    });
}

async function testarIdade(idade) {
    try {
        const resultado = await validarIdade(idade);
        console.log(`Idade ${idade}:`, resultado);
    } catch (erro) {
        console.log(`Idade ${idade}:`, erro);
    }
}