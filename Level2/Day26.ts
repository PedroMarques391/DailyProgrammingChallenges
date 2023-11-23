let musics: string[] = []
let music: string[] = []

function addSongs (song: string): string {
  musics.push(song)
  return 'Música adicionada com sucesso.'
}

addSongs('Car crash')
addSongs('Human')
addSongs('snuff')

console.log(musics)
function removeSongs (song: string) {
  music = musics.filter((music) => music !== song)
  musics = music
}

removeSongs('Human')

function listSongs () {
  for (let i = 0; i < musics.length; i++) {
    console.log(`${i + 1} - ${musics[i]}`)
  }
}

listSongs()
