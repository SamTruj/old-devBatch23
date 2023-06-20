/*
EJERCICIO 1. Hacer superclase Maestro y subclases Maestro de Física y
   Maestro de Música y a cada uno asignarle su materia y
   calcular su promedio de grupo a partir de calificaciones	
   (puedes usar arreglos). (Tarea)
El maestro de física tiene un
   atributo "antigüedad" que guarda un valor numérico,
   mientras que el maestro de música tiene un atributo "edad"
   también guardando un valor numérico.
Extra: (NO ES OBLIGATORIO)
Crear una clase de materias y que un profesor pueda tener varias materias
Hacer una clase grupo con un método para sacar el promedio del grupo
8:38
EJERCICIO 2.- Crear la clase construcción que hereda a otras dos
    clases "casa" y "edificio".
    a. Sus atributos son: numPuertas, numVentanas, numPisos,
       direccion, altura, largo y ancho del terreno.
    b. Cada uno tiene un método que regresa los metros
       cuadrados
    c. Un método debe regresar la dirección (Calle X, # 123, Col…) (edited) 
8:39
EJERCICIO 3. Crear una clase Bebida que herede a dos clases Cerveza
    y Refresco. Ambas clases deben tener la propiedad
    cantidad (ml). La clase Refresco debe tener el atributo
    azucar(g) y la clase Cerveza debe tener el atributo
    porcentajeAlcohol(%) (Tarea) (edited) 
8:41
EJERCICIO 4.- Queremos saber que Electrodomestico consume más energía. Crea una superclase llamada Electrodoméstico con las
    siguientes características: (Grupo)
    a. Sus atributos son precio, color, consumoEnergetico
    b. El constructor solo debe pedir precio, color
       y capacidad.
    c. consumoEnergetico por default debe ser 100
4.1.- Crea una subclase de Electrodomestico llamada Lavadora
    con las siguientes características: (Clase)
    a. Su atributo es carga(kg de ropa), además de los
       atributos heredados.
    b. Crea el método consumoFinal(). Este se calcula
       multiplicando el consumoEnergetico, (que se pasa por parametro) por la carga.
*/

class Electrodomestico{
    static consumoEnergetico;
    constructor(precio, color){
        this.precio = precio;
        this.color = color;
        consumoEnergetico = 100;
    }
}

class Lavadora extends Electrodomestico {
    //static consumoEnergetico;
    constructor(precio, color, capacidad, carga){
        super(precio, color, consumoEnergetico);
        this.capacidad = capacidad;
        this.carga = carga;
    }
    consumoFinal(consumoEnergetico){
        return carga * consumoEnergetico;
    }
}

const tumama = new Lavadora(123000 , "rojo", 25, 10);