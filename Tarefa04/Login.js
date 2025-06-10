function fazerLogin(usuario, senha) {
    return new Promise((resolve, reject) => {
        if (usuario === 'admin' && senha === '1234') {
            resolve("Login bem-sucedido");
        } else {
            reject("Credenciais inválidas");
        }
    });
}

async function testarLogin(usuario, senha) {
    try {
        const resultado = await fazerLogin(usuario, senha);
        console.log("Login:", resultado);
    } catch (erro) {
        console.log("Login:", erro);
    }
}