function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function contarAte(numero) {
    for (let i = 1; i <= numero; i++) {
        console.log(i);
        await delay(1000);
    }
}