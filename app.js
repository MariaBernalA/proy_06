require('colors');
//Se importa el paquete de colores que con este agregamos estilos y colores//

const math = require('./proy_modules/math.js')
//Se importa el archivo math.js que se encuentra en la carpeta proy_modules//

const main = async () => {
    //Se expone la funcion asincronica para utilizar y ejecutar el codigo principal//

    console.log('hola SENA CBA/n'.bgRed);
    //Se da a la consola un mensaje //

    const numeros = [1, 2, 800, 912, 1000, 1283, 2811];
    //Se define un arreglo con (constnumeros) que contiene una serie de numeros//
    for (const numero of numeros) {
        //Se itera sobre cada elemnto de el arreglo (constnumeros)numeros//
        const invertidoComoNumero = math.invertirNumero(numero);
        //Se llama a la funcion invertirNumero para invertir cada numero//
        const invertidoComoCadena = math.invertirNumeroComoCadena(numero);
        //Se llama a la funcion para obtener la parte invertida del numero como una cadena de texto//
        console.log("El número '%s' es '%s' invertido como número, y '&s' como cadena",
        //Se da a la consola para que de el numero original, el invertido y el de cadena de texto// 
                    numero, invertidoComoNumero,invertidoComoCadena);
    }

    const textos = ['Hola Sena', 'Ficha 2798618', 'Analisis y Desarrollo de software']
    for(const texto of textos){
        const textoInvertido = math.invertirTexto(texto);
        console.log("El texto '%s' se invierte como '%s'", texto, textoInvertido);
    }

    const datos = [1234567, 'ADSO 2798618', [2798618,'ADSO'] ]
    for(let dato of datos ){
        const datoConvertido =math.conversionDatos(dato);
        console.log('El resultado de conversion es : ${datoConvertido}');
    }
}

main();
//Se llama a la funcion para ejecutar el codigo//