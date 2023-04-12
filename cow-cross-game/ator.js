//código do ator
let xAtor = 100;
let yAtor = 366;
let comprimentoAtor = 30;
let alturaAtor = 30;
let colisao = false;

//pontos
let pontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, comprimentoAtor, alturaAtor);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
      if (podeDescer()){
        yAtor += 3;
    }
  }
}

function podeDescer(){
  return yAtor < 366;
}

function verificaColisao(){
  for(i = 0; i < imagemCarros.length; i++){
     colisao = collideRectCircle(xCarros[i] , yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if(colisao){
      voltaAtorInicio();
      pontos = 0;
      colidiu.play();
    }
  } 
}

function voltaAtorInicio(){
  yAtor = 400;
}

function mostraPontos(){
  fill(color(255,244,60));
  textAlign(CENTER);
  textSize(25);
  text(pontos, width / 2, 27);
}

function marcaPontos(){
  if(yAtor < 0){
    pontos += 1;
    voltaAtorInicio();
    pontosSom.play()
  }
}