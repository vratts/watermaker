# watermaker
Insira marca-d'água via linha de comando em todas as imagens de um diretorio

## Como usar

Para utilizar, instale globalmente atraves do NPM

```bash
npm install -g watermaker
```

Em seguida, indique o diretorio onde estão as imagens que deseja inserir a marca d'água e a imagem que deseja inserir como marca d'água.

```bash
watermaker ./diretorio/das/imagens ./marca-dagua.jpg
```

## Redimensionando marca d'água

Para redimensionar a marca d'água, vc pode passar a largura e altura como parametros.

```bash
watermaker ./diretorio/das/imagens ./marca-dagua.jpg 720 250
```
