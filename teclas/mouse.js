document.addEventListener("mousedown", dibujarMouseDown);//accion con mouse DOWN
document.addEventListener("mouseup", dibujarMouseUp);//accion con mouse UP
document.addEventListener("mousemove", dibujarMouseMove);//accion con mouse MOVE
document.getElementById("limpiar").addEventListener("mouseup", limpiarCanva);//boton con evento enlazado
function limpiarCanva()
{
  papel.clearRect(0,0,cuadro.width, cuadro.height);

  dibujarLinea(colorBorde, 1, 1, 1, 299, papel);
  dibujarLinea(colorBorde, 1, 299, 299, 299, papel);
  dibujarLinea(colorBorde, 299, 299, 299, 1, papel);
  dibujarLinea(colorBorde, 299, 1, 1, 1, papel);
}

var cuadro = document.getElementById("area_de_dibujo");
//var botonClear = document.getElementById("limpiar");
var papel = cuadro.getContext("2d");
var x;
var y;
var colorBorde = "black";
//dibujarLinea("red", x-1, y-1, x+1, y+1, papel);
var colorTrazo = "red";
var ancho = cuadro.width+10;
var alto = cuadro.height+10;

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
  lienzo.beginPath();//empieza dibujo
  lienzo.strokeStyle = color;//propiedad para color de linea
  lienzo.lineWidth = 3;//grosor de la linea
  lienzo.moveTo(x_inicial, y_inicial);//mover posicion original
  lienzo.lineTo(x_final, y_final);//trazar linea
  lienzo.stroke();//accion de trazar linea
  lienzo.closePath();//termina dibujo
}
dibujarLinea(colorBorde, 1, 1, 1, 299, papel);
dibujarLinea(colorBorde, 1, 299, 299, 299, papel);
dibujarLinea(colorBorde, 299, 299, 299, 1, papel);
dibujarLinea(colorBorde, 299, 1, 1, 1, papel);

var estadoMouse


function dibujarMouseDown(evento)
{
  estadoMouse = 1;
  x = evento.layerX;
  y = evento.layerY;
  //if(clientX <= ancho && clientY <= alto)
  //{
  //}

  //console.log(evento);
  //console.log(clientX);
}

function dibujarMouseUp(evento)
{
  estadoMouse = 0;
  x = evento.layerX;
  y = evento.layerY;
  //console.log(evento);
}

function dibujarMouseMove(evento)
{
  if(estadoMouse == 1)
  {
    console.log("dibujando");
    dibujarLinea(colorTrazo, x, y, evento.layerX, evento.layerY, papel);
  }
    x = evento.layerX;
    y = evento.layerY;
  //if(e)//console.log(evento);
}
