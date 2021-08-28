//EJERCICIO 1

//ejemplo 1.1
let n = 90
let m = 50
let r =n + m
console.log(r)

//ejemplo 1.2
let a = 3
let b = 4
let c = 5
let d = 6
let e = 7
let z = a*b*c*d*e
console.log(z)

//ejemplo 1.3
let f = 3
let g = 4
let h = 5
let i = ((f+h)*g*g)
console.log(i)
//console.log((f+h)*g*g)

//ejemplo 1.4
let nombre = "AncoteC"
let saludo = "Hola "
console.log(saludo + nombre)

//ejemplo 1.5
let j = "5"
let k = "3"
let l = "7"
console.log(j + "+" + k + "+" + l + "=" + j+k+l)

//ejemplo 1.6
let usuario1 = { nombre: "juan", apellido: "perez" }
let usuario2 = { nombre: "sara", apellido: "aparicio" }
let usuario3 = { nombre: "sebastián", apellido: "gonzales" }
let usuario4 = { nombre: "catalina", apellido: "rodriguez" }
let usuario5 = { nombre: "laura", apellido: "quintanilla" }
let usuario6 = { nombre: "camila", apellido: "lopez" }
let usuario7 = { nombre: "carlos", apellido: "gutierrez" }
let usuario8 = { nombre: "sergio", apellido: "chacon" }
let eleccion=1

if (eleccion=1) {
        console.log("Hola " + usuario1.nombre +" "+ usuario1.apellido);
    }else if (eleccion=2) {
        console.log("Hola " + usuario2.nombre +" "+ usuario2.apellido);
        }else if (eleccion=3) {
            console.log("Hola " + usuario3.nombre +" "+ usuario3.apellido);
            }else if (eleccion=4) {
                console.log("Hola " + usuario4.nombre +" "+ usuario4.apellido); 
                }else if (eleccion=5) {
                 console.log("Hola " + usuario5.nombre +" "+ usuario.apellido);
                    }else if (eleccion=6) {
                     console.log("Hola " + usuario6.nombre +" "+ usuario6.apellido);
                        }else if (eleccion=7) {
                            console.log("Hola " + usuario7.nombre +" "+ usuario7.apellido);
                                }else if (eleccion=8) {
                                    console.log("Hola " + usuario8.nombre +" "+ usuario8.apellido);
                                        }else{
                                            console.log("ANCOTEC");
    }



//console.log(usuario1)


//alert(saludo + nombre)

//EJEMPLO 2
//ejercicio 2.1. Dado un número b realizar la siguiente operación
if (b<10) {
    console.log("2");
}
else     {
    console.log("4");
}



//ejercicio 2.2 (utilizando variables ya declaradas en ejemplos anteriores)
if (a<h) {
    console.log(h);
}
else     {
    console.log(a);
}

//ejercicio 2.3 (utilizando variables ya declaradas en ejemplos anteriores)
if (a<h) {
    console.log("h es mayor : "+ h + "  /  a es menor " + a);
}
else{
    if(h<a)    {
    console.log("a es mayor : "+ a + "  /  h es menor " + h);
    }
    else{
        console.log("a y h son iguales : "+ a + "=" + h);
    }
}

//ejercicio 2.4 y 2.5 (utilizando variables ya declaradas en ejemplos anteriores)

if (n%2 == 0) {
    console.log("n es par : " + n);
}
else{
      
    console.log("n es impar : " + n);
    }
  
/*ejercicio 2.6 
let categoriaA = "Todo Publico"
let categoriaB = "Desde 9 años"
let categoriaC = "Desde 18 años"
let categoriaD = "Desde 25 años"
let edad=5 variar el valor numerico para edad y realizar pruebas
if (edad<9) {
    console.log(categoriaA + " : " + edad);
    }else if (edad >=9 && edad <18) {
        console.log(categoriaB + " : " + edad);
        }else if (edad >=18 && edad <25) {
            console.log(categoriaC + " : " + edad);
            }else  {
            console.log(categoriaD + " : " + edad); 
}*/

//ejercicio 2.6 segun categoria (utilizando variables ya declaradas en ejemplos anteriores)
let categoriaA = "Todo Publico"
let categoriaB = "Desde 9 años"
let categoriaC = "Desde 18 años"
let categoriaD = "Desde 25 años"
/*let edad=5 variar el valor numerico para edad y realizar pruebas*/
/*let categoria = "B" /*variar  el valor categoria a realizar pruebas*/

let edad = prompt("Ingrese su edad : ")
let categoria = prompt("Ingrese  categoria A, B, C, D :  ").toUpperCase()

if (edad<9 && categoria < "B") {
    console.log(categoriaA + " : " + edad  + " permitido");
    }else 
    if ((edad >=9 && edad <18) && (categoria < "C")) {
        console.log(categoriaB + " : " + edad + " permitido");
        }else if ((edad >=18 && edad <25) && (categoria < "D")){
            console.log(categoriaC + " : " + edad + " permitido");
            }else if (edad >=25)  {
                console.log(categoriaD + " : " + edad + " permitido"); }
                else {
                    console.log("Edad: "+ edad + "/ Categoria : " + categoria +" / No permitido")
}
