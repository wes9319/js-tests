var j = require("johnny-five");
var circuito = new j.Board();
var led, motor, celda;
var turno  = 0;


circuito.on("ready", prender);

function prender()
{
  var configuracion = {pin: "A0", freq:50};//var objeto configuracion para el set de la fotoresistencia como sensor
  celda = new j.Sensor(configuracion);//configuracion sensor(fotoresistencia)

  led = new j.Led(13);
  led.on();

  motor = new j.Servo(9);//asignacion de servo al pin analogo 9
  motor.to(90);//funcion para el movimiento de el servo
  ondear();
  //console.log(celda.value);
}

function ondear()//funcion recursiva para dar tiempo al arduino de recopilar datos del sensor
{
    var luz = celda.value;
    if (luz > 20)
    {
      if (turno)
      {
        turno = 0;
        motor.to(70);
      }
      else
      {
        turno = 1;
        motor.to(110);
      }
    }
    else
    {
      motor.to(30);
    }
    console.log("Luz: "+celda.value);
    setTimeout(ondear, 1000);//funcion invocar otra funcion, en este caso para generar la recursividad
}
