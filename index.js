(function() {
    const canvas = document.getElementById('snow');
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
  
    const snowflakes = [];
    const numberOfSnowflakes = 250;
  
    function random(min, max) {
      return Math.random() * (max - min) + min;
    }
  
    function Snowflake() {
      this.x = random(0, width);
      this.y = random(-height, 0);
      this.radius = random(1, 4);
      this.speed = random(1, 3);
      this.wind = random(-0.5, 0.5);
  
      this.update = function() {
        this.y += this.speed;
        this.x += this.wind;
  
        if (this.y > height) {
          this.y = random(-height, 0);
          this.x = random(0, width);
        }
      }
  
      this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
      }
    }
  
    function createSnowflakes() {
      for (let i = 0; i < numberOfSnowflakes; i++) {
        snowflakes.push(new Snowflake());
      }
    }
  
    function animateSnowflakes() {
      ctx.clearRect(0, 0, width, height);
  
      for (let i = 0; i < numberOfSnowflakes; i++) {
        snowflakes[i].update();
        snowflakes[i].draw();
      }
  
      requestAnimationFrame(animateSnowflakes);
    }
  
    createSnowflakes();
    animateSnowflakes();
  })();
  document.getElementById('showImages').addEventListener('click', function() {
  
    const greetingsDialog = document.getElementById('greetingsDialog');
    greetingsDialog.classList.remove('hidden'); 
  
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play(); 
  });
  
  document.getElementById('closeDialog').addEventListener('click', function() {
    const greetingsDialog = document.getElementById('greetingsDialog');
    greetingsDialog.classList.add('hidden');
  
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.pause(); 
  });