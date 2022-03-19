var isPaused = false;
var inter=null;
// fuction to turn left
function left()
{ 
if(direction==1)
{
    newDirection = -2;
}
if(direction==-1)
{
    newDirection = 2;
}
if(direction==2)
{
    newDirection = 1;
}
if(direction==-2)
{
    newDirection = -1;
}
}
//funtion to turn right 
function right()
{
if(direction==1)
{
    newDirection = 2;
}
if(direction==-1)
{
    newDirection = -2;
}
if(direction==2)
{
    newDirection = -1;
}
if(direction==-2)
{
    newDirection = 1;
}
}
// fuction to change buttons 
function change () {  
   
   if( document.getElementById("Stop").value=="Stop")
   {
    clearInterval(inter);
    document.getElementById("Stop").value="Start";
    return;
   }
    
   else{
    document.getElementById("Stop").value="Stop";

    inter=  setInterval(tick, 100); 
     
   }
    
}
    var SIZE = 700; 
    var GRID_SIZE = SIZE / 50;
    var c = document.getElementById('c');
    c.height = c.width = SIZE * 2; 
    c.style.width = c.style.height = SIZE + 'px';
    var context = c.getContext('2d');
    context.scale(2, 2); 
  
    var direction = newDirection = 1; 
    var snakeLength = 5;
    var snake = [{x: 0, y: SIZE / 2}]; 
    
    var end = false;
  

  
    function stringifyCoord(obj) {
      return [obj.x, obj.y].join(',');
    }
  
    function tick() {
      var newHead = {x: snake[0].x, y: snake[0].y};
  
      
   
    direction = newDirection;
    console.log(direction);
      
      var axis = Math.abs(direction) === 1 ? 'x' : 'y'; 
      if (direction < 0) {
        newHead[axis] -= GRID_SIZE;
      } else {
        newHead[axis] += GRID_SIZE; 
      }
  
      
       
        snakeLength += 20;
     
  
      context.fillStyle = '#FF0000';
      context.fillRect(0, 0, SIZE, SIZE); 
      if (end) {
        
        
        clearInterval(inter);
        document.getElementById("Stop").value="Start";
        context.fillStyle = '#000000';
      context.font = '30px serif';
      context.textAlign = 'center';
      context.fillText('Game has ended, Refresh to play again!', SIZE / 2, SIZE / 2);

      

         
        
      } else {
        snake.unshift(newHead);
        snake = snake.slice(0, snakeLength); 
      }
  
      
      if (newHead.x < 0 || newHead.x >= SIZE || newHead.y < 0 || newHead.y >= SIZE) {
        end = true;
      }
  
      context.fillStyle = '#FFFFFF';
      var snakeObj = {};
      for (var i = 0; i < snake.length; i++) {
        var a = snake[i];
        context.fillRect(a.x, a.y, GRID_SIZE, GRID_SIZE);
        
        if (i > 0) snakeObj[stringifyCoord(a)] = true;
      }
  
      if (snakeObj[stringifyCoord(newHead)]) end = true; 
  
      
     
     
    }
    
  
    
    
   
    

  
  