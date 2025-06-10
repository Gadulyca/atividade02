function promessa1() {
    return new Promise(resolve => setTimeout(() => resolve("Resolvida em 1s"), 1000));
}

function promessa2() {
    return new Promise((_, reject) => setTimeout(() => reject("Rejeitada em 2s"), 2000));
}

function promessa3() {
    return new Promise(resolve => setTimeout(() => resolve("Resolvida em 0.5s"), 500));
}

async function verificarResultados() {
    const resultados = await Promise.allSettled([
        promessa1(),
        promessa2(),
        promessa3()
    ]);

    resultados.forEach((resultado, index) => {
        console.log(`Promessa ${index + 1}:`, resultado.status, "-", resultado.reason || resultado.value);
    });
}