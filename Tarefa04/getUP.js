function getUsuario() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 5, nome: 'João' });
        }, 1000);
    });
}

function getPedidos(idUsuario) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, item: "Livro" },
                { id: 2, item: "Notebook" }
            ]);
        }, 1500);
    });
}

async function mostrarPedidos() {
    const usuario = await getUsuario();
    const pedidos = await getPedidos(usuario.id);
    console.log(`Usuário: ${usuario.nome}`);
    console.log("Pedidos:", pedidos);
}