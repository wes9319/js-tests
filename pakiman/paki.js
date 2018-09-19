var imagenes = [];//array asociativo se ejecuta igual que aun objeto literal json
imagenes["cauchin"] = "vaca.png";
imagenes["pokacho"] = "pollo.png";
imagenes["tocinauro"] = "cerdo.png";
//console.log(imagenes);

/*
var cauchin = new Pakiman("cauchin", 100, 30);//intanciacion de la clase
var pokacho = new Pakiman("pokacho", 80, 50);//o declaracion de objetos pakiman
var tocinauro = new Pakiman("tocinauro", 120, 40);
*/ //instancias de clase pakiman

/*
pokacho.mostrar();
cauchin.mostrar();
tocinauro.mostrar();
*///llamado de metodo mostrar

/*
var coleccion = [];
coleccion.push(cauchin);
coleccion.push(pokacho);
coleccion.push(tocinauro);
*///creacion de coleccion usando las instancias creadas de clase

var coleccion = [];
coleccion.push(new Pakiman("cauchin", 100, 30));
coleccion.push(new Pakiman("pokacho", 80, 50));
coleccion.push(new Pakiman("tocinauro", 120, 40));
//creacion de coleccion usando la creacion de los objetos directamente

//for (var paki in coleccion) //con in se aloja el indice en la var paki
for (var paki of coleccion) //con of se aloja la instancia en la var paki
//el ciclo funciona para la cantidad de elementos el coleccion
{
    //console.log(coleccion[paki]);//para in
    //console.log(paki);//para of
    paki.mostrar();

}

/*for (var x in coleccion[0]) {
  console.log(x);
}*/
//console.log(coleccion);

//console.log(cauchin, pokacho, tocinauro );

//pokacho.hablar();//llamada de la funcion en la clase usando una instancia
