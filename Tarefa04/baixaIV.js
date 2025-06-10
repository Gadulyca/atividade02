function baixarImagem() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Imagem baixada");
        }, 2000);
    });
}

function baixarVideo() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Vídeo baixado");
        }, 3000);
    });
}

async function baixarMidias() {
    const [imagem, video] = await Promise.all([baixarImagem(), baixarVideo()]);
    console.log(imagem);
    console.log(video);
}