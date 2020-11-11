function multiply()
{
        var a = document.getElementById("first").value;
        var b = document.getElementById("second").value;
        document.getElementById("disp").innerHTML = a * b;
}

function divide() 
{ 
        var a = document.getElementById("first").value;
        var b = document.getElementById("second").value;
document.getElementById("disp").innerHTML = a / b;
}

function c_to_f(){
        var a = document.getElementById("first").value;
        document.getElementById("disp").innerHTML = Math.round(10*(a * 1.8 + 32) )/10 + "°F";
}
function f_to_c(){
        var a = document.getElementById("first").value;
        document.getElementById("disp").innerHTML = Math.round(10*((a - 32 )/ 1.8))/10 + "°C";
}
function getVolume(){
        var a = document.getElementById("first").value;
        document.getElementById("disp").innerHTML = (4 / 3) * Math.PI * Math.pow(a, 3);
}
function reverse(){
        var x = "";
        var b = document.getElementById("first").value;
        var a = b.toString();
        for(i = a.length - 1; i >= 0; i--){
            x = x + a.charAt(i);
        }
        document.getElementById("disp").innerHTML = x;
}
function draw(){
        var a = document.getElementById('Rect');
        var ctx = a.getContext('2d');
        
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 300, 300);
        ctx.fill();
        
        
        ctx.fillStyle = "white";
        ctx.fillRect(60, 60, 170, 170);
        ctx.fill();
        
        ctx.strokeRect(70, 70, 150, 150);
        ctx.fill();
}
function draw_circle(){
        var a = document.getElementById('Rect');
        var ctx = a.getContext('2d');
        
        ctx.arc(150, 150, 145, 0, 2 * Math.PI, false);
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#FF0000';
        ctx.stroke();
}
function draw_circles(){
        var a = document.getElementById('Rect');
        var ctx = a.getContext('2d');
    
        var op = 0.0;
        var xc = 0;
        var yc = 0;
    
        for(i=6; i>0; i--){
            ctx.beginPath();
            ctx.fillStyle = "rgba(" + 0 + ", " + 0 + ", " + 0 + ", " + op + " )";
            ctx.arc(xc + 50, yc + 50, 30, 0, 2 * Math.PI, true);
            ctx.fill();
            
            ctx.strokeStyle = "black";
            ctx.stroke();
            xc = xc + 50;
            yc = yc + 65;
            op = op + 0.2;
            
        }
    
}

