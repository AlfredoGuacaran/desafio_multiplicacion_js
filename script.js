function fibo(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;

  return fibo(n - 2) + fibo(n - 1);
}

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

/// TRANSFORMACION DE NUMEROS A ARABICOS

function arabic(num) {
  const primeros15 = [
    "cero",
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve",
    "diez",
    "once",
    "doce",
    "trece",
    "catorce",
    "quince",
  ];

  const decenasArabic = [
    "",
    "",
    "veinti",
    "treinta",
    "cuarenta",
    "cincuenta",
    "sesenta",
    "setenta",
    "ochenta",
    "noventa",
  ];

  const centenasArabic = [
    "",
    "ciento",
    "doscientos",
    "trescientos",
    "cuatrocientos",
    "quinientos",
    "seiscientos",
    "setecientos",
    "ochocientos",
    "novecientos",
  ];

  if (num <= 15) {
    return primeros15[num];
    //
  } else if (num <= 19) {
    const unidades = num - 10;
    return "dieci" + arabic(unidades);
    //
  } else if (num == 20) {
    return "veinte";
    //
  } else if (num <= 29) {
    return `veinti ${arabic(num - 20)}`;
  } else if (num <= 99) {
    const decenas = Math.floor(num / 10);
    const unidades = num - decenas * 10;
    return `${decenasArabic[decenas]} ${
      unidades ? "y " + arabic(unidades) : ""
    }`;
    //
  } else if (num == 100) {
    return "cien";
  } else if (num <= 999) {
    const centenas = Math.floor(num / 100);
    const resto = num - centenas * 100;
    return `${centenasArabic[centenas]} ${resto ? arabic(resto) : ""}`;
  } else if (num <= 99999) {
    const miles = Math.floor(num / 1000);
    const resto = num - miles * 1000;
    return `${miles > 1 ? arabic(miles) : ""}mil ${resto ? arabic(resto) : ""}`;
  } else if (num <= 999999) {
    const cienmiles = Math.floor(num / 1000);
    const resto = num - cienmiles * 1000;
    return `${arabic(cienmiles)} mil ${resto ? arabic(resto) : ""}`;
  } else if (9999999) {
    const millones = Math.floor(num / 1000000);
    const resto = num - millones * 1000000;
    return `${millones == 1 ? "Un millon" : arabic(millones) + " millones"} ${
      resto ? arabic(resto) : ""
    }`;
  }
}
console.log(arabic(123456100));
