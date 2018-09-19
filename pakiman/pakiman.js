//clase aislada de pakiman
class Pakiman
{
  constructor(nombre, vida, ataque)//funcion constructor de la clase
  {
    this.imagen = new Image();
    this.nombre = nombre;//variables de la clase
    this.vida = vida;//this.nombreVariable especifica que es local
    this.ataque = ataque;

    this.imagen.src = imagenes[this.nombre];
  }

  hablar()//funcion hablar, no se necesita escribir function
  {
    alert(this.nombre);
  }

  mostrar()
  {
    document.body.appendChild(this.imagen);//agregar una imagen dentro de body
    document.write("<p>");
    document.write("<strong>" + this.nombre + "</strong><br/>");
    document.write("Vida: " + this.vida + "<br/>");
    document.write("Ataque: " + this.ataque);
    document.write("</p> <hr/>");

  }
}
