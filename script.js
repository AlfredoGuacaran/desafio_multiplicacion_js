/*
function fibo(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;

  return fibo(n - 2) + fibo(n - 1);
}
*/

function factorial(n) {
  if (n == 1) return 1;

  return n * factorial(n - 1);
}

function resultado() {
  let numero = +prompt("Ingrese numero entero de 1 al 20");

  //validacion de numero
  if (numero % 1 != 0 || numero < 1 || numero > 20) {
    alert("Ingrese numero entero entre 1 y 20");
    resultado();
  }

  //Imprime tabla de multiplicar
  for (let i = 1; i <= numero; i++) {
    console.log(`${i} x ${numero} = ${i * numero}`);
  }

  //Imprime factoriales
  for (let i = 1; i <= numero; i++) {
    console.log(`Factorial de ${i} es ${factorial(i)}`);
  }
}
resultado();
