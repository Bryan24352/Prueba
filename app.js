require('dotenv').config()
const express = require('express')
const app = express()

app.listen(process.env.PORT,function(){
    console.log("El puerto esta corriendo el puerto TCP" + process.env.PORT)
})

function multiplicar(j){

	document.write("Tabla de multiplicar del "+ j +"");

	for(i = 1;i<=10;i++){
		document.write(j + "x " + i + "= " + j * i);

	}

}

multiplicar(5);