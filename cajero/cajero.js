class billete
{
  constructor(valor, cantidad)
  {
    this.valor = valor;
    this.cantidad = cantidad;
  }
}

function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);

  for (var bi of caja)
  {
    if (dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);
      if (div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
        papeles = div;
      }
      entregado.push(new billete(bi.valor, papeles));
      dinero = dinero - (bi.valor * papeles);
    }
  }
  if (dinero)
  {
    //document.write("dinero insuficiente");
    resultado.innerHTML = "dinero insuficiente";//reemplazo de document.write mas eficiente
  }
  else
  {
    for (var e of entregado)
    {
      if (e.cantidad > 0)
      {
        resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br/>";
      }
      //document.write(e.cantidad + " billetes de $" + e.valor + "<br/>");
    }
  }

}

var caja = [];
caja.push(new billete(100,5));
caja.push(new billete(50,10));
caja.push(new billete(20,5));
caja.push(new billete(10,10));
caja.push(new billete(5,5));

var dinero = 0;
var entregado = [];
var div = 0;
var papeles = 0;
var resultado = document.getElementById("resultado");//id del parrafo a modificar en html

var b = document.getElementById("extraer");//id del boton extraer
b.addEventListener("click", entregarDinero);//asignacion de evento "click" con funcion
