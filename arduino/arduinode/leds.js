var jf = require("johnny-five");//traemos la libreria johnny-five
var circuito = new jf.Board();//conecta la placa con js

circuito.on("ready", prender);//asignar accion al circuito

function prender()
{
  var led13 = new jf.Led(13);//asignar el led al pin 13
  var led7 = new jf.Led(7);
  led13.blink(200);//titilar led con funcion
  led7.blink(700);
  console.log("prueba de conexion");
}
/*
para que el arduino funcione se debe cargar standartfirmata desde los ejemplos de arduino ide
para ejecutar el archivo usamos la consola, en la ubicacion de la carpeta donde se instalo
johnny-five ejecutar node nombreArchivo.js y se carga al arduino.
Para salir o acabar el programa se usa ctrl+c 2 veces

para instalar johnny-five usamos rpm install johnny-five
*/
