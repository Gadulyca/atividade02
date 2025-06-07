class Playlist {
  constructor(musicas = []) {
    this.musicas = musicas;
  }

  adicionarMusica(nome) {
    this.musicas.push(nome);
    console.log(`"${nome}" cadastrada com sucesso!`);
  }

  [Symbol.iterator]() {
    let index = 0;
    const musicas = this.musicas;

    return {
      next() {
        if (index < musicas.length) {
          return { value: musicas[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
}
const minhaPlaylist = new Playlist(['Envolvimento', 'Meu Ritmo']);
minhaPlaylist.adicionarMusica('Malévola');
minhaPlaylist.adicionarMusica('Paralisa');

console.log('\nMúsicas na playlist:');
for (const musica of minhaPlaylist) {
  console.log(musica);
}