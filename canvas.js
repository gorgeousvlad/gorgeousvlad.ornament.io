window.onload = 
	function(){
		
		var dims = {
		"sim":20,
		"x2":30,
		"x4":40
		}
		
		for (var j = 0; j < 2;j++){
			var line = document.createElement("div");
			document.body.appendChild(line)
			for(var i = 0;i < 3 ;i++){
				var outer = document.createElement("div");
				outer.style.display = "inline-block";
				line.appendChild(outer);
				var canvas = document.createElement("canvas");
				outer.appendChild(canvas);
				canvas.width = 500;
				canvas.height = 500;
				drawPic(canvas,"white","midnightblue",dims)
			}
		}
	};

	

function drawPic(canvas,color,backColor,dims){

 		
		var context = canvas.getContext("2d");
 		context.fillStyle = backColor;
 		context.strokeStyle = color;
		context.fillRect(0, 0, 500, 500);
		
		for (var i =0; i< 5; i++){ 
		context.lineWidth = 5
		context.beginPath();
		context.arc(canvas.width/2,canvas.height/2,50*(i+1),0,Math.PI*2);
		context.stroke();
		context.closePath();
		}

		context.lineWidth = 2
		for (var i =0; i< 50; i++){
			context.strokeRect(i*dims.sim/2,i*dims.sim/2,dims.sim/2,dims.sim/2)
			context.strokeRect(canvas.width - i*dims.sim/2 - dims.sim/2,i*dims.sim/2,dims.sim/2,dims.sim/2)
	
			context.beginPath();
			context.arc(canvas.width/2,i*dims.sim,dims.sim/2,0,Math.PI*2);
			context.stroke();
			context.closePath();

			drawTriangle(context,i*dims.x4 - i*dims.x4/2,dims.x4*2 + 10,dims.x4)
			drawTriangle(context,i*dims.x4 - i*dims.x4/2,canvas.height - dims.x4*2,dims.x4)
			drawTriangle(context, i*dims.sim/2,i*dims.sim/2-70,dims.sim)
			drawTriangle(context, i*dims.sim/2,i*dims.sim/2+100,dims.sim)
			drawTriangle(context, canvas.width - i*dims.sim/2 - dims.sim,i*dims.sim/2-70,dims.sim)
			drawTriangle(context, canvas.width - i*dims.sim/2 - dims.sim,i*dims.sim/2+100,dims.sim)

			

			if (i%2){
				context.beginPath();
				context.arc(canvas.width/2,i*dims.sim,dims.x2,0,Math.PI*2);
				context.stroke();
				context.closePath();
				context.beginPath();
				context.arc(i*dims.sim,canvas.height/2,dims.x2,0,Math.PI*2);
				context.stroke();
				context.closePath();

				context.strokeRect(i*10,i*10,dims.x2,dims.x2)
				context.strokeRect(canvas.width - i*10 - dims.x2,i*10,dims.x2,dims.x2)
			}

			if (i%4){
				context.beginPath();
				context.arc(canvas.width/2,i*dims.sim,dims.x4,0,Math.PI*2);
				context.stroke();
				context.closePath();
				context.beginPath();
				context.arc(i*dims.sim,canvas.height/2,dims.x4,0,Math.PI*2);
				context.stroke();
				context.closePath();

				context.strokeRect(i*10,i*10,dims.x4,dims.x4)
				context.strokeRect(canvas.width - i*10 - dims.x4,i*10,dims.x4,dims.x4)
			}

			context.beginPath();
			context.arc(i*dims.sim,canvas.height/2,10,0,Math.PI*2);
			context.stroke();
			context.closePath();
		}

			
			
}
function drawTriangle(context,x,y,side){
			context.beginPath();
			context.moveTo(x,y)
			context.lineTo(x + side/2,y - side/2)
			context.lineTo(x + side,y)
			context.closePath();
			context.stroke()

}