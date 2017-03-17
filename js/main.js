var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;

var lastTime;
var deltaTime;

var bgPic = new Image();

var mx;
var my;

var ane;
var fruit;
var mom;
var baby;

document.body.onload = game;
function game(){
	init();//入口
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}

function init(){
	//获得canvas(相当于画布) context(相当于画笔)
	can1 = document.getElementById("canvas1");//fishes,dust,ui,circle
	ctx1 = can1.getContext('2d');
	can2 = document.getElementById("canvas2");//background,ane,fruits
	ctx2 = can2.getContext('2d');

	can1.addEventListener('mousemove',onMouseMove,false);

	bgPic.src = "./src/background.jpg";

	canWidth = can1.width;
	canHeight = can1.height;

	ane = new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();

	mom = new momObj();
	mom.init();

	mx = canWidth * 0.5;
	my = canHeight * 0.5;

	baby = new babyObj();
	baby.init();
}

function gameloop(){
	window.requestAnimFrame(gameloop);
	var now = Date.now();
	deltaTime = now -lastTime;
	lastTime = now;
	if(deltaTime > 40) deltaTime = 40;

	drawBackground();
	fruitMonitor();
	
	ane.draw();
	fruit.draw();

	ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	momFruitConllision();

	baby.draw();
}
function onMouseMove(e){
	if(e.offSetX||e.layerX){
		mx = e.offSetX == undefined ? e.layerX : e.offSetX;
		my = e.offSetY == undefined ? e.layerY : e.offSetY;
	}
}