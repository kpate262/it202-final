function draw(){
  var background = new Image();
  background.src = "./red.jpg";
  var canvas = document.getElementById('canvas');
  ctx.drawImage(background, 0, 0);
  if (canvas.getContext) {
     var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle

    ctx.fill();
  }
}

window.requestAnimationFrame(draw);
