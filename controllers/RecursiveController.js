const {fs, path, sharp} = require('../utils/ModuleUtils.js');
const { adicionar_marca_dagua } = require("./WaterController.js");

async function percorrer_pastas(diretorio, marca_dagua, width = 300, height = 150) {
    const arquivos = await fs.promises.readdir(diretorio);

    for (const arquivo of arquivos) {
        const caminho_arquivo = path.join(diretorio, arquivo);
        const stat = await fs.promises.stat(caminho_arquivo);

        if (stat.isDirectory()) {
            await percorrer_pastas(caminho_arquivo, marca_dagua, width, height);
        } else if (stat.isFile() && /\.(jpg|jpeg|png)$/i.test(arquivo)) {
            await adicionar_marca_dagua(caminho_arquivo, marca_dagua, {width: width, height: height});
        }
    }
}

module.exports = { percorrer_pastas }