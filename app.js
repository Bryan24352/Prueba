require('dotenv').config()
const host = 'localhost';
const port = 8000;
/*onst express = require('express')
const app = express()*/


const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("Esto deberia estar funcionando");
}
/*
app.listen(process.env.PORT,function(){
    console.log("El puerto esta corriendo el puerto TCP" + process.env.PORT)
})*/

function multiplicar(j){

	console.log("Tabla de multiplicar del "+ j +"");

	for(i = 1;i<=10;i++){
		console.log(j + "x " + i + "= " + j * i);

	}

}

multiplicar(5);