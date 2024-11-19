

function mostrarTabla() {
  //Función if para seleccionar la tabla
  var seleccion = document.getElementById("opciones").value;
  if (seleccion === "multiplicar7") {

    //Tabla de multiplicar del 7 con bucle for
    let tabla = document.getElementById("tabla");
    let tablaMultiplicar = "<h2>Tabla de multiplicar del 7</h2>";
    tablaMultiplicar += "<ul>";
    for (let i = 0; i <= 10; i++) {
      tablaMultiplicar += `<li>7 x ${i} = ${7 * i}</li>`;
    }
    tablaMultiplicar += "</ul>";
    tablaMultiplicar += "</br>";
    tabla.innerHTML = tablaMultiplicar;
  } else if (seleccion === "suma5") {

    //Tabla de sumar del 5 con blucle while
    let tabla = document.getElementById("tabla");
    let tablaSumar = "<h2>Tabla de sumar del 5</h2>";
    tablaSumar += "<ul>";
    i = 0;
    while (i <= 10) {
      tablaSumar += `<li>5 + ${i} = ${5 + i}</li>`;
      i++;
    }
    tablaSumar += "</ul>";
    tablaSumar += "</br>";
    tabla.innerHTML = tablaSumar;
  } else if (seleccion === "potencia2") {

    //Tabla potencia del 2 con bucle  do-while
    let tabla = document.getElementById("tabla");
    let tablaPotencia = "<h2>Tabla de potencias del 2</h2>";
    tablaPotencia += "<ul>";
    i = 0   
    while (i <= 10) {
      tablaPotencia += `<li>2 ** ${i} = ${2 ** i}</li>`;
      i++;
    }
    tablaPotencia += "</ul>";
    tablaPotencia += "</br>"
    tabla.innerHTML = tablaPotencia;
  } else if (seleccion === "operaciones") {

    //Operaciones empleando desplazamiento de bits
    let tabla = document.getElementById("tabla");
    let tablaResultado = "<h2>Desplazamiento de bits</h2>";
    tablaResultado += "<ul>";
    //9x0
    var numero = 9;
    var resultado = numero << 0;
    resultado= 0;
    tablaResultado += `<li>9 x 0 = ${resultado}</li>`;
    //140/1
    numero = 140;
    resultado = numero >> 0;
    tablaResultado += `<li>140 / 1 = ${resultado}</li>`;
    //125/8
    numero = 125;
    resultado = numero >> 3;
    tablaResultado += `<li>125 / 8 = ${resultado}</li>`;
    //40x4
    numero = 40;
    resultado = numero << 2;
    tablaResultado += `<li>40 x 4 = ${resultado}</li>`;
    //25/2
    numero = 25;
    resultado = numero >> 1;
    tablaResultado += `<li>25 / 2 = ${resultado}</li>`;
    //10x16
    numero = 10;
    resultado = numero << 4;
    tablaResultado += `<li>10 x 16 = ${resultado}</li>`;

    tablaResultado += "</ul>";
    tablaResultado += "</br>"
    tabla.innerHTML = tablaResultado;
  }
}
