-----------------------------LEVEL 1----------------------------------
*/
function sonIguales(elemento1, elemento2) {
  // Devuelve “true” si “elemento1" y “elemento2” son estrictamente iguales
  // De lo contrario, devuelve “false”
  //↓↓↓ Tu código: ↓↓↓ */
  if(elemento1 === elemento2) {
    return true;
  }
  else {
    return false;
  }
}
function tienenMismaLongitud(str1, str2) {
  // Devuelve “true” si las dos strings tienen la misma longitud
  // De lo contrario, devuelve “false”
  // Tu código:
if(str1.length === str2.length){
  return true;
}else{
  return false
}
}
function esPar(num) {
  // Devuelve “true” si “num” es par
  // De lo contrario, devuelve “false”
  // Tu código:
  if (num % 2 == 0) {
    return true;
  } else
    return false;
}
function esImpar(num) {
  // Devuelve “true” si “num” es impar
  // De lo contrario, devuelve “false”
  // Tu código:
  if (num % 2 == 1) {
    return true;
  } else
    return false;
}
function elevarAlCuadrado(num) {
  // Devuelve el valor de “num” elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  let cuadrado = Math.pow(num,2);
  return cuadrado;
}
function elevarAlCubo(num) {
  // Devuelve el valor de “num” elevado al cubo
  // Tu código:
  return num ** 3;
}
function elevar(num, exponent) {
  // Devuelve el valor de “num” elevado al exponente dado en “exponent”
  // Tu código:
  return num ** exponent;
}
function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
  //Si el número es positivo, devolver ---> “Este numero es positivo”
  //Si el número es negativo, devolver ---> “Este numero es negativo”
  //Si el número es 0, devuelve false
  if( numero > 0){
    return “Este numero es positivo”;
  }else if(numero== 0){
    return false;
  }else{
    return “Este numero es negativo”
  }
}
/*
---------------------------LEVEL 2-------------------------------------
                                  .,
                        .      _,‘f----.._
                        |\ ,-‘“/  |     ,'
                        |,_  ,--.      /
                        /,-. ,‘`.     (_
                        f  o|  o|__     “`-.
                        ,-._.,--‘_ `.   _.,-`
                        `“’ ___.,‘` j,-’
                          `-.__.,--'
---------------------------LEVEL 2-------------------------------------
*/
function combinarNombres(nombre, apellido) {
  // Devuelve “nombre” y “apellido” combinados en una string y separados por un espacio.
  // Ejemplo: “Lionel”, “Messi” -> “Lionel Messi”
  // Tu código:
  let nombre = ‘Vere’;
  let apellido = ‘López’;
  return nombre + ” ” + apellido; //asi funciona
}