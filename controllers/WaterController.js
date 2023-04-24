const {fs, path, sharp} = require('../utils/ModuleUtils.js');

async function adicionar_marca_dagua(imagem, marca_dagua, size = {
    width: 420,
    height: 200
}) {
    marca_dagua = await sharp(marca_dagua).resize(size.width, size.height, { fit: 'inside' }).toBuffer();

    // Carrega a imagem
    const buffer = await sharp(imagem).toBuffer();

    // Carrega a imagem da marca-d'água
    const marca_dagua_buffer = await sharp(marca_dagua).toBuffer();

    // Define a posição da marca-d'água
    const { width, height } = await sharp(buffer).metadata();
    const marca_dagua_posicao = {
        left: width - await sharp(marca_dagua_buffer).metadata().then(m => m.width),
        top: height - await sharp(marca_dagua_buffer).metadata().then(m => m.height)
    };

    // Aplica a marca-d'água na imagem
    const imagem_com_marca = await sharp(buffer)
        .composite([{ input: marca_dagua_buffer, left: marca_dagua_posicao.left, top: marca_dagua_posicao.top }])
        .toBuffer();

    // Salva a imagem com a marca-d'água
    fs.writeFileSync(imagem, imagem_com_marca);
}

module.exports = { adicionar_marca_dagua }