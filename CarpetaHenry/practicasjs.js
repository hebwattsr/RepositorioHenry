padre = "hebert"
console.log(padre)
var suma = 50;
function sumar(a, b) {
    var suma = a + b
    console.log(`la suma de ${a} + ${b} = ${suma}`)

}
console.log(sumar(10, 5));
console.log(suma);

var datos = {   //Creacion de objeto datos
    nombre : "hebert",
    apellido : "watts",
    edad : 55
}

datos.vistas = "direccion"
datos.vistas = "celular"
datos.celular = "3012427512"
datos.direccion = "ternera"
datos.apellido = "rivera"
    

delete datos.vistas
console.log(datos)
console.log(datos.nombre)
console.log(datos.apellido)
console.log(datos.edad)
console.log(datos["nombre"])

console.log(datos.hasOwnProperty("edad"))

function verificarPropiedad(obj, prop) {
    if (obj.hasOwnProperty(prop)) {
        return (`"${prop} " ${obj[prop]}`)
    } else{
        return("No existe la propiedad")
  }
}
console.log(verificarPropiedad(datos, "direccion"))

miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9],[10,11,12]]   
for (var i = 0; i < miArreglo.length; i++){
    let arregloIten = miArreglo[i]
    console.log(arregloIten)
    for (j = 0; j < arregloIten.length; j++)
        console.log(arregloIten[j])

}

console.log("##################")
console.log("Hay " + i, "Subarreglo")

// let n1 = parseInt(prompt('digite el primer numero', 0));
// let n2 = parseInt(prompt('digite el segundo  numero', 0));
// let resul = n1 + n2
// alert("El resultado es: " + resul)
// 
let unirArreglof = function (arr1, arr2) {
    return arr1.concat(arr2)
}
console.log(unirArreglof([1, 2, 3,10], [4, 5, 6,11]))

let unirArreglo = (arr1, arr2) => arr1.concat(arr2) //arr1 + arr2;
console.log(unirArreglo([200,1, 2, 3], [0,4, 5, 6]))

//console.log(unirArreglo(arr1.concat(arr2)))
// let fecha = () => new.Date()
// console.log(fecha)

let sumar1 = (...args) => {
    return args.reduce((a, b) => a - b );
}
console.log("resultado es: ", sumar1(20, 10, 3, 2, 1))

const lista1 = [10, 200, 40]

function add(x, y, z) {
   return x + y + z
}
console.log(add(...lista1))
mifecha = new Date()
console.log(mifecha)

// misnumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function quitar3primerosnumeros(arr) {
    // let [, , , ...menos3primerosnumeros] = arr
    // return menos3primerosnumeros
// }
// let nuevoarreglo = quitar3primerosnumeros(misnumeros)
//
// console.log(`arreglo inicial ${misnumeros}`)
// console.log(`arreglo final ${nuevoarreglo}`)

arregloletras = ["a", "b", "c", "d", "e", "f", "g"]

function quitar1letras(arr) { 
    let [, ...letraborrada] = arr;
    return letraborrada
}

let nuevoarray = quitar1letras(arregloletras)

console.log(`arreclo inicial ${arregloletras}`)
console.log(`nuevo arreglo ${nuevoarray}`)


// alert("Buenas camarada")
a = [1,"a",true,[3,2,5]]
console.log(a)

let nuevoPerfil = {
    nombre: "HEBERT",
    apellido: "WATTS",
    edad: 30,
    fechaN: 1966,
    fechaA:2023
}
// ************Funcion Normal****************
// function actualizarPerfil({ nombre, apellido, edad }) {
    // console.log("Nombre: ",nombre)
    // console.log("Apellido: ",apellido)
    // console.log("Edad: ",edad)
    // console.log("Perfil Actualizado")
// }

//************Funcion flecha*******************
let actualizarPerfil = ({ nombre, apellido, edad })=> {
    console.log("Nombre: ",nombre)
    console.log("Apellido: ",apellido)
    console.log("Edad: ",edad)
    console.log("Perfil Actualizado")
}
actualizarPerfil(nuevoPerfil)

console.log("Dessestructuracion con variables")

let Des = ({ fechaN, fechaA }) => (fechaN + fechaA) / 2;
console.log(`Fecha de Nacimiento es ${nuevoPerfil.fechaN}`)
console.log(`Fecha de Actual es ${nuevoPerfil.fechaA}`)
console.log("La suma de los años es: ", Des(nuevoPerfil))

let datos1 = {
    "nombre": "hebert",
    "apellido": "watts",
    "edad": 35,
    "otrosDatos": {
        correo:"@yahoo",
        cel: 3012427512,
        dir: "ternera"
    }
}
console.log("###############")
let actu = ({ nombre, apellido }) => {
    console.log(nombre,` ${JSON.stringify(nombre)}`)
    console.log(nombre)
    console.log(apellido)    
}   
actu(datos1)
console.log("###############")
let { nombre, apellido, edad,otrosDatos:{correo,cel,dir} } = datos1;

console.log(nombre)
console.log(apellido)
console.log(edad)
console.log(correo)
console.log(cel)
console.log(dir)

console.log(datos1.nombre)
console.log(datos1.apellido)
console.log(datos1.edad)
console.log(datos1["nombre"])
console.log(datos1["apellido"])
console.log(datos1["edad"])
console.log(datos1.otrosDatos.correo)
console.log(datos1.otrosDatos.cel)
console.log(datos1.otrosDatos.dir)

class libro{
    constructor(autor, editorial) {
        this._autor = autor;
        this._editorial = editorial;
    }    
    get autor(){
        return this._autor;
    }    
    set autor(nuevo_autor) {
        this._autor = nuevo_autor;
    }
    get editorial(){
        return this._autor;       
    }
    set editorial(nuevo_editorial) {
        this._editorial = nuevo_editorial        
    }
}
nuevolibro = new libro("nelson", "casa brava");
console.log(nuevolibro);
nuevolibro._autor = "pacho";
nuevolibro.editorial = "delfin editorial"
console.log(nuevolibro);
console.log(nuevolibro.autor)
console.log(nuevolibro);
//console.log(nuevolibro.autor("Luis cabrera"))
console.log(nuevolibro.autor)
console.log(nuevolibro);