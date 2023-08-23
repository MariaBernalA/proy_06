require('colors');

const math = require('./proy_modules/math.js')

const main = async () => {

    console.log('hola SENA CBA/n'.bgRed);

    const numeros = [1, 2, 800, 912, 1000, 1283, 2811];
    for (const numero of numeros) {
        const invertidoComoNumero = math.invertirNumero(numero);
        const invertidoComoCadena = math.invertirNumeroComoCadena(numero);
        console.log("El número '%s' es '%s' invertido como número, y '&s' como cadena",
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