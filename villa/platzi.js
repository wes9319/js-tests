var z;
var vp = document.getElementById("villa");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverLobo);// evento de movimiento con teclas
//var x = 100;
//var y = 100;
//var mapa = "tile.png";//ruta de la imagen

//Manejo de Fondo
var fondo = {
  url: "tile.png",
  cargaOk: false
};
fondo.imagen = new Image();//instanciar un objeto imagen
fondo.imagen.src = fondo.url;//asignacion de la ruta
fondo.imagen.addEventListener("load", cargarFondo);
function cargarFondo()
{
  fondo.cargaOk = true;
  dibujar();
}

//Manejo de Vaca

var xVaca = new Array();
var yVaca = new Array();
var vaca = {
  url: "vaca.png",
  cargaOk: false
};
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);
function cargarVacas()
{
  vaca.cargaOk = true;
  mantenerPosicion();
}

//Manejo de pollo

var xPollo = new Array();
var yPollo = new Array();
var pollo = {
  url: "pollo.png",
  cargaOk: false
};
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);
function cargarPollos()
{
  pollo.cargaOk = true;
  mantenerPosicion();
}

//Manejo de cerdo

var xCerdo = new Array();
var yCerdo = new Array();
var cerdo = {
  url: "cerdo.png",
  cargaOk: false
};
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);
function cargarCerdos()
{
  cerdo.cargaOk = true;
  mantenerPosicion();
}

//Manejo de Lobo

var xLobo = 100;
var yLobo = 100;
var lobo = {
  url: "lobo.png",
  cargaOk: false
};
lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobo);
function cargarLobo()
{
  lobo.cargaOk = true;
  dibujar();
}

//calculos complementarios

var ancho = vp.width;
ancho = ancho/80;
var cantidadVacas = aleatorio(1, 5);
var cantidadPollos = aleatorio(1, 5);
var cantidadCerdos = aleatorio(1, 5);


//funcion dibujar

function dibujar()
{
  if (fondo.cargaOk)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOk)
  {
    console.log(cantidadVacas);
    for (var v = 0; v < cantidadVacas; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(vaca.imagen, xVaca[v], yVaca[v]);
    }
  }
  if (cerdo.cargaOk)
  {
    console.log(cantidadCerdos);
    for (var c = 0; c < cantidadCerdos; c++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(cerdo.imagen, xCerdo[c], yCerdo[c]);
    }
  }
  if (pollo.cargaOk)
  {
    console.log(cantidadPollos);
    for (var p = 0; p < cantidadPollos; p++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(pollo.imagen, xPollo[p], yPollo[p]);
    }
  }
  if (lobo.cargaOk)
  {
      papel.drawImage(lobo.imagen, xLobo, yLobo);
  }
}

//prueba preliminar de dibujo
/*
function dibujarVacas()
{
  papel.drawImage(vaca.imagen, 10, 10);
}

function dibujarCerdos()
{
  papel.drawImage(cerdo.imagen, 10, 300);
}

function dibujarPollos()
{
  papel.drawImage(pollo.imagen, 300, 150);
}*/

//document.write(z);

//funcion generar aleatorio con rango
function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}

/*for (var i = 0; i < 10; i++)
{
  z = aleatorio(10, 20);
  document.write(z+", ");

}*/


//funcion mover lobo con las flechas

function moverLobo(evento)
{

  var movimiento = 80;

  var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
  };//Notacion de objetos en javascript JSON*

  switch(evento.keyCode)
  {
    case teclas.UP:
      //dibujarLinea(colorDibujo, x, y, x, y - movimiento, papel);
      yLobo = yLobo - movimiento;
      dibujar();
      console.log("Arriba");
    break;
    case teclas.DOWN:
      yLobo = yLobo + movimiento;
      dibujar();
      console.log("Abajo");
    break;
    case teclas.LEFT:
      xLobo = xLobo - movimiento;
      dibujar();
      console.log("Izquierda");
    break;
    case teclas.RIGHT:
      xLobo = xLobo + movimiento;
      dibujar();
      console.log("Derecha");
    break;
    default:
      console.log("Otra tecla");
    break;
  }
}

// funcion mantener posicion de vaca, cerdo y pollo una vez generados

function mantenerPosicion()
{
  if (vaca.cargaOk)
  {
    for (var v = 0; v < cantidadVacas; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 70;
      var y = y * 70;
      xVaca[v] = x;
      yVaca[v] = y;
    }
  }

  if (cerdo.cargaOk)
  {
    for (var c = 0; c < cantidadCerdos; c++)
    {
      var x = aleatorio(0, 6);
      var y = aleatorio(0, 6);
      var x = x * 70;
      var y = y * 70;
      xCerdo[c] = x;
      yCerdo[c] = y;
    }
  }

  if (pollo.cargaOk)
  {
    for (var p = 0; p < cantidadPollos; p++)
    {
      var x = aleatorio(0, 6);
      var y = aleatorio(0, 6);
      var x = x * 70;
      var y = y * 70;
      xPollo[p] = x;
      yPollo[p] = y;
    }
  }

  dibujar();
}
