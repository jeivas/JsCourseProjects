function setup() {
  trilha.loop()
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaCarro();
  verificaColisao();
  mostraPontos();
  marcaPontos();
}