const { percorrer_pastas } = require("./controllers/RecursiveController.js");

const args = process.argv.slice(2);
const diretorio = args[0];
const marca_dagua = args[1];
const width = parseInt(args[2]);
const height = parseInt(args[3]);

percorrer_pastas(diretorio, marca_dagua, width, height)
    .then(() => console.log('Marca d\'água adicionada com sucesso!'))
    .catch((e) => console.log(e));