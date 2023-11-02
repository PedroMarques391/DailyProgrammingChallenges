const animals: string[] = [
"Leão", "Tigre", "Elefante", "Urso", "Gorila", "Hipopótamo", "Crocodilo", "Rinoceronte", "Lobo", "Cavalo", "Leopardo", "Zebra", "Rinoceronte", "Macaco", "Urso Panda", 
];
const colors: string[] = [  "Vermelho",
"Azul", "Verde", "Amarelo", "Roxo", "Laranja", "Preto", "Branco", "Cinza", "Rosa", "Marrom", "Dourado", "Prateado", "Turquesa", "Violeta"
];
const actions: string[] = [
"Correu", "Pulou", "Parou", "Sentou", "Deitou", "Saltou", "Nadou", "Cantou", "Dançou", "Caminhou", "Gritou", "Comeu", "Bebeu", "Riu", "Chorou"
];
const local: string[] = [  "Na praia", "Na montanha", "No parque", "Na floresta", "Na cidade", "No jardim", "No campo", "No deserto", "Na ilha", "Na caverna", "No escritório", "Na escola", "No restaurante", "No cinema", "No hospital"
];

function index(): number {
    const indice = Math.floor(Math.random() * animals.length)
    return indice;
}
function formSetence(): string {
    const randomPhrase = `O ${animals[index()]} ${colors[index()]} ${actions[index()]} ${local[index()]}`
    return randomPhrase;
}

console.log(formSetence())