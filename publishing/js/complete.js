//눈 내리기
window.onload = function(){

    var canvas = document.getElementById("snow_canvas");
    var ctx = canvas.getContext("2d");

    var W = 1000; //영역 넓이
    var H = 1000; //영역 높이
    canvas.width = W;
    canvas.height = H;

    var mp = 120; //밀도 수치
    var particles = [];
    for(var i = 0; i < mp; i++)
    {
      particles.push({
        x: Math.random()*W, 
        y: Math.random()*H, 
        r: Math.random()*4+3, //입자 크기 최대치 조절
        d: Math.random()*mp //밀도
      })
    }

    function draw()
    {
      ctx.clearRect(0, 0, W, H);

      ctx.fillStyle = "rgba(255, 255, 255, 0.8)"; //눈 입자 색깔
      ctx.beginPath();
      for(var i = 0; i < mp; i++)
      {
        var p = particles[i];
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
      }
      ctx.fill();
      update();
    }

    var angle = 0;
    function update()
    {
      angle = 0;
      for(var i = 0; i < mp; i++)
      {
        var p = particles[i];
        p.y += Math.cos(angle+p.d) + 1 + p.r/2;
        p.x += Math.sin(angle);

        if(p.x > W+5 || p.x < -5 || p.y > H)
        {
          if(i%3 > 0) 
          {
            particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
          }
          else
          {
            if(Math.sin(angle) > 0)
            {
              particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
            }
            else
            {
              particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
            }
          }
            
        }
        
      }
    }

    setInterval(draw, 33);
  }