//Ejemplo 3 (FOR)

//Ejemplo 3.1 
/*let n = prompt("Ingrese n : ")
let i=0
let acum = " "
for (i; i<=n;i++){
    acum = acum + "-" + i
}
console.log(acum)*/

//Ejemplo 3.2 utilizando variables ya creadas
/*n = prompt("Ingrese n : ")
i=0
acum = " "
for (i;i>=(n*-1);i--){
    acum = acum + ";" + i
}
console.log(acum)*/

//Ejemplo 3.3 utilizando variables ya creadas
/*let n = prompt("Ingrese n : ")
let i=0
let suma = 0
for (i;i<=n;i++){
    suma = suma +  i
}
console.log("suma total ; " + suma)*/

//Ejemplo 3.4 utilizando variables ya creadas
/*let n = prompt("Ingrese n : ")
let i=0
let pares = " "
for (i;i<=n;i=i+2){
    pares = pares + " - " + i
    }
console.log("Los numaros pares hasta " + n + " son : " + pares)*/

//Ejemplo 3.5 utilizando variables ya creadas
/*let n = prompt("Ingrese n : ")
let i=1
let impares = " "
for (i;i<=n;i=i+2){
    impares = impares + " - " + i
    }
console.log("Los numeros impares hasta " + n + " son : " + impares)*/

//Ejemplo 3.6 utilizando variables ya creadas
let n = prompt("Ingrese n : ")
let i=1
let factorial = 1
for (i;i<=n;i++){
    factorial = factorial * i
    }
console.log("El factorial de " + n + " es : " + factorial)