// 1- Crie uma referência para o canvas no arquivo main.js..

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //definindo uma variável com uma nova imagem
	img_imgTag.onload = uploadimg; // ajustando uma função, ao carregar esse variável
	img_imgTag.src = img_image;   // carregar imagem
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

// 2- Escreva um código para obter o evento keyPressed.

function my_keydown(e)
{
	// 3 - Variável para guardar os valores das teclas pressionadas
	console.log(keyPressed);
	
		if() // 3- Valores para as teclas alfabéticas
		{
			aplhabetkey();
			document.getElementById("d1").innerHTML="Você pressionou uma tecla alfabeto";
			console.log("alphabet key");
		}
		else if() // 3- Valores para as teclas numéricas
		{
			numberkey();
			document.getElementById("d1").innerHTML="Você prssionou uma tecla número";
			console.log("Number key");
		}
		else if() // 3- Valores para as teclas direcionais
		{
			arrowkey();
			document.getElementById("d1").innerHTML="Você pressionou uma tecla direcional";
			console.log("Arrow Key");
		}
		else if() // 3- Valores para as teclas especiais
		{
			specialkey();
			document.getElementById("d1").innerHTML="Você pressionou ctrl/esc/alt";
			console.log("special key");
		}
	else{
		otherkey();
		document.getElementById("d1").innerHTML="Você pressionou um símbolo ou outra tecla";
	}
}

function aplhabetkey()
{
		img_image="alfabeto.png";
	add();
}
function numberkey()
{
	img_image="número.png";
	add();
}
function arrowkey()
{
	img_image="direcional.png";
	add();
}
function specialkey()
{
	img_image="especial.png";
	add();
}
function otherkey()
{
	img_image="outras.png";
	add();
}
	
