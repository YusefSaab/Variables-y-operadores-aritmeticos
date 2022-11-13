alert("Haga click en cada ejercicio para ejecutar. Si se muestra la pantalla en blanco, haga doble click sobre ella primero .")
/* Realizar el diagrama de flujo para las siguientes operaciones matemáticas: Suma,
Resta, División, Multiplicación y el módulo de un número, partiendo de dos números
ingresados por el usuario. */

function ejercicio1() {
    document.getElementById("imagen").classList.remove("dnone");
}

/* Realizar operaciones con dos números.
Pedir al usuario que ingrese dos números diferentes y mayores a cero. Para ambos
números, calcular lo siguiente:
● Suma
● Resta
● División
● Multiplicación
● Módulo */

function ejercicio2 () {
    var numero1 = parseInt(prompt("Ingrese un número mayor a 0"));
    var numero2 = parseInt(prompt("Ingrese un número mayor a 0, distinto del anterior"));
    var sum = numero1 + numero2;
    var resta = numero1 - numero2;
    var multi = numero1 * numero2;
    var divi= numero1 / numero2;
    var modul = numero1 % numero2;

document.getElementById("resultados").innerHTML = `La suma de los números ingresados es ${sum} <br> 
                                                La resta de los números ingresados es ${resta} <br> 
                                                La multiplicación de los números ingresados es ${multi} <br> 
                                                La división de los números ingresados es ${divi} <br> 
                                                La diferencia de la división de los números ingresados es ${modul}`;
}


/*Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y
que la transforme a grados Kelvin y Fahrenheit.
Se debe considerar la siguiente información respecto a la equivalencia de las
escalas de temperatura:
● 0 Grados Celsius corresponden a 273,15 Kelvin. La fórmula para convertirlos
es 0 °C + 273.15 = 273.15 K
● 0 Grados Celsius corresponden a 32 Fahrenheit. La fórmula para convertirlos
es (0 °C × 9/5) + 32 = 32 °F */

function ejercicio3 (){
    var celcius = parseFloat(prompt("Ingrese la temperatura en grados Celcius"));
    var kelvin = celcius + 273.15;
    var fahrenheit = (celcius * 1.8) + 32;

document.getElementById("termometro").innerHTML = `${celcius} grados Celcius equivale a ${kelvin} grados Kelvin y ${fahrenheit} grados Fahrenheit`
}


/* Crear un programa que pida al usuario una cantidad de días y que muestre su
equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el
resultado debe ser 1 año, 1 semana y 1 día.
Se debe considerar lo siguiente:
● 1 año tiene 365 días
● 1 semana tiene 7 días
Se recomienda usar la función Math.floor para obtener la parte entera de un número
decimal. */

function ejercicio4 () {
    var dias = parseInt(prompt("Ingrese un número de días para saber a cuántos años semanas y días corresponde"));
    var anos = Math.floor(dias/365);
    var semanas = Math.floor((dias-(anos*365))/7);
    var dias2 = Math.floor(dias-(anos*365)-(semanas*7))

document.getElementById("calendario").innerHTML = `${dias} días equivale a ${anos} años, ${semanas} semanas y ${dias2} días`
}

/* Crear un programa que solicite al usuario 5 números y realice los cálculos que se
piden a continuación.
● La suma de todos los números.
● El promedio de los 5 números ingresados*/

function ejercicio5() {
    var numero_1 = parseInt(prompt("Ingrese el primer número"));
    var numero_2 = parseInt(prompt("Ingrese el segundo número"));
    var numero_3 = parseInt(prompt("Ingrese el tercer número"));
    var numero_4 = parseInt(prompt("Ingrese el cuarto número"));
    var numero_5 = parseInt(prompt("Ingrese el quinto número"));
    var sumaDeNumeros = numero_1 + numero_2 + numero_3 + numero_4 + numero_5
    var promedioDeNumeros = sumaDeNumeros/5

document.getElementById("ultimo_calculo").innerHTML = `La suma de los 5 numeros es ${sumaDeNumeros} y su promedio es ${promedioDeNumeros}`

}








