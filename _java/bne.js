var imagens =["_imagens/bne1.jpg","_imagens/bne2.jpg","_imagens/bne0.jpg","_imagens/bne3.jpg","_imagens/bne4.jpg"];
var imagemAtual = 0;

function trocarImagem() {
	imagemAtual = (imagemAtual + 1) % 4;
	document.querySelector('.gif img').src = imagens[imagemAtual];
}

setInterval(trocarImagem, 2000);




