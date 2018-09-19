var express = require('express');//extraer libreria express local
var app = express();//asignar a una variable para ejecutar

 //creacion de url's
app.get('/', inicio); //url con la respuesta como funcion
app.get('/cursos', cursos);

function inicio (req, res)
{//req = peticion, res = resultado
  res.send('inicio');
}

function cursos (req, res)
{//req = peticion, res = resultado
  res.send('cursos');
  //res.sendfile("cursos.html");//reemplazo a la linea superior
}

app.listen(8989);//correr sobre un puerto especifico

/* en el terminal para instalar express en un carpeta se usa el
  comando npm express install

  para iniciar el servidor se usa $ node archivoServidor.js
  para terminar el servidor se usa ctrl+c
  para entrar al servidor local se usa 127.0.0.1:numPuerto/
  desde la misma red local lo mismo pero con la ip de la maquina server

  para probar node.js se usa $ node
  para salir de node se usa ctrl+c 2 veces

  verificar version de node con $ node -v

*/
