var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};//Notacion de objetos en javascript JSON*

//console.log(teclas);

document.addEventListener("keyDown", dibujarTeclado);
var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");
var x = 100;
var y =100;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

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

function dibujarTeclado(evento)
{
  console.log(evento);
  //console.log(evento.keyCode);
  /*if(evento.keyCode == teclas.UP){
    console.log("Arriba");
  }
  if(evento.keyCode == teclas.UP){
    console.log("Abajo");
  }
  if(evento.keyCode == teclas.UP){
    console.log("Izquierda");
  }
  if(evento.keyCode == teclas.UP){
    console.log("Derecha");
  }*/
  var colorDibujo = "green";
  var movimiento = 1;

  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(colorDibujo, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      console.log("Arriba");
    break;
    case teclas.DOWN:
    dibujarLinea(colorDibujo, x, y, x, y + movimiento, papel);
    y = y + movimiento;
      console.log("Abajo");
    break;
    case teclas.LEFT:
    dibujarLinea(colorDibujo, x, y, x - movimiento, y, papel);
    x = x - movimiento;
      console.log("Izquierda");
    break;
    case teclas.RIGHT:
    dibujarLinea(colorDibujo, x, y, x + movimiento, y, papel);
    x = x + movimiento;
      console.log("Derecha");
    break;
    default:

      console.log("Otra tecla");
    break;
  }
}
