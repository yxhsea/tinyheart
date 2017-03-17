/**
 * 绘制海葵
 */
var aneObj = function(){
	this.x = [];
	this.len = [];
}

aneObj.prototype.num = 50;
aneObj.prototype.init = function(){
	for(var i=0;i<this.num;i++){
		this.x[i] = i * 16 + Math.random()*20;
		this.len[i] = 200 + Math.random()*50;
	}
}
aneObj.prototype.draw = function(){
	ctx2.save();
	ctx2.globalAlpha = 0.6;
	for(var i=0;i<this.num;i++){
		/**
		 * beginPaht 开始一个路径
		 * moveTo 起始点
		 * lineTo 起始点到
		 * stroke 
		 * strokeStyle
		 * lineWidth
		 * lineCap
		 * globalAlpha 全局透明度
		 */
		ctx2.beginPath();
		ctx2.moveTo(this.x[i],canHeight);
		ctx2.lineTo(this.x[i],canHeight - this.len[i]);
		ctx2.lineWidth = 20;
		ctx2.lineCap = "round";
		ctx2.strokeStyle = "#3b154e";
		ctx2.stroke();
	}
	ctx2.restore();
}