var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton1");
boton.addEventListener("click", dibujoPorClick); //añadir evento a boton ("tipoEvento",funcion)

var d = document.getElementById("dibujito");//traer elemento desde html con id
var ancho = d.width;
var lienzo = d.getContext("2d");
//console.log(lienzo);

/*
lienzo.beginPath();//empieza dibujo
lienzo.strokeStyle = "red";//propiedad para color de linea
lienzo.moveTo(100, 100);//mover posicion original
lienzo.lineTo(200, 200);//trazar linea
lienzo.stroke();//accion de trazar linea
lienzo.closePath();//termina dibujo
*/

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();//empieza dibujo
  lienzo.strokeStyle = color;//propiedad para color de linea
  lienzo.moveTo(x_inicial, y_inicial);//mover posicion original
  lienzo.lineTo(x_final, y_final);//trazar linea
  lienzo.stroke();//accion de trazar linea
  lienzo.closePath();//termina dibujo
}

//dibujarLinea("pink", 10, 300, 220, 10);
//dibujarLinea("yellow", 300, 10, 10, 220);

/*var lineas = 30;
var l = 0;
var yi, xf;
var colorcito = "#FAA";

//while(l<lineas)
for (l = 0; l < lineas; l++)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea(colorcito, yi, 0, 300, xf);//xi, yi, xf, yf
  console.log("Linea "+l)

}

dibujarLinea(colorcito, 1, 1, 1, 300);
dibujarLinea(colorcito, 1, 299, 299, 299);
dibujarLinea(colorcito, 299, 299, 299, 1);
dibujarLinea(colorcito, 299, 1, 1, 1);
*/ //funcion antigua sin evento

function dibujoPorClick()
{
  var x = texto.value;//extraer valor de un textbox
  var xxx = parseInt(x);//convertir a int
  //var xxx=parseInt(texto.value)
  //alert("alerta "+texto.value);

  var lineas = xxx;
  var l = 0;
  var yi, xf;
  var colorcito = "#FAA";
  var espacio = ancho/lineas

  //while(l<lineas)
  for (l = 0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, yi, 0, 300, xf);//xi, yi, xf, yf
    console.log("Linea "+l)

  }

  dibujarLinea(colorcito, 1, 1, 1, 299);
  dibujarLinea(colorcito, 1, 299, 299, 299);
  dibujarLinea(colorcito, 299, 299, 299, 1);
  dibujarLinea(colorcito, 299, 1, 1, 1);

}
