const math = {};

// Esta funcion tiene como objetivo invertir el orden de los digitos//
const invertirNumero = numero => {
    let invertido = 0;
    //Se utiliza una variable para almacenar el numero invertido que se inicia con el valor 0//
    while (numero != 0) {
//Se comienza un bucle while hasta que el numero sea igual a 0,se repite o se itera atraves de cada digito del numero original//
        invertido = 10 * invertido + numero % 10
        //El valor que calcula el ultimo digito del numero original se calcula y este valor se agrega a la variable invertido //
        numero = (Math.floor(numero / 10))
        //Se elimina el ultimo digito del numero original ya que se actualiza el valor del numero con esta funcion Math.floor(numero / 10)//
    }
 //Se termina o se cierra el bucle while asi se devuelve el valor de la variable con el numero invertido//
    return invertido
};

// Esta funcion tiene como objetivo tomar un numero como argumento y devolverlo como un texto del numero invertido//
const invertirNumeroComoTexto = numero => {
    const numeroInvertidoComoTexto = numero.toString().split("").reverse().join("");
    //Utiliza cadenas como toString(para manipularlo como una cadena de texto)//
    //split(separa cada digito individual del numero en un elemnto array )//
    // reverse(el array se invierte osea cambia el orden de los elementos)//
    //join(este metodo crea la figura invertida del numero como una cadena de texto)//
    return numeroInvertidoComoTexto;
//Se devuelve la cadena hecha//
};

// Esta funcion tiene como objetivo tomar una cadnea de texto y devolverla como una cadena invertida//
const invertirTexto = texto => {
    const splitText = texto.split('');
    //Se utiliza un arreglo utilizando un metodo(split) para separar cada caracter individual de la cadena del arreglo//
    const reversedText = splitText.reverse();
    //El resultado del arreglo anterior se invierte utilizando un metodo(reverse) para cambiar el orden de los elementos en el arreglo//
    const joinedText = reversedText.join('');
    //Se unen los arreglos anteriores en una cadena utilizando el metodo(join) asi se crea una cadena invertida//
    return joinedText;
//Se devuelve la cadena invertida como un resultado//
};

// Esta funcion tiene como objetivo tomar un arreglo como un argumento y devolver este mismo arreglo pero con sus elementos invertido //
const invertirArreglo = arreglo => {
    const reverseObject = arreglo.reverse();
    //Este arreglo se invierte ya que utiliza el metodo(reverse)//
    //El arreglo anterior se asigna a la variable (reverseObject)//
    return reverseObject;
//Se devuelve reverseObject// 

};

//Esta funcion tiene como objetivo tomar un dato de cualquier tipo y realizar un tipo de operacion de acuerdo altipo de dato que se dio//
const conversionDatos = data => {
    let dataType = typeof data;
    //Se realiza una variable (dataType) y este utiliza un operado(typeof) asi se obtiene el tipo de dato que se dio//
    let datavar;
    //Se declara una variable//

    if (data === '' || data === null || data === undefined || data.lenght === 0) {
        //Se verifica si el dato que se dio es una cadena(vacia,nula,indefinida o si su longitud es igual a 0) si se cumple se asigna a dataVar// 
        dataVar = 'El valor ingresado está vacío o incorrecto';
    }else {
        //Se utiliza ${expresion} por si ninguna de las condiciones anteriores se cumple asi se imprime un mensaje en la consola// 
        console.log(`El valor ingresado es de tipo: ${dataType}, con un valor de: ${data}`);
    //Se abre una estructura switch para las diferentes operaciones segun el dato que se dio//
        switch (dataType) {
            case 'number':
                dataVar =invertirNumero(data);
                //Si el dato es un numero se llama a la funcion invertirNumero y se asigna el resultado a dataVar
                break;
            case 'string' :
                dataVar = invertirTexto(data);
                //Si el dato es un string se llama a la funcion invertirTexto y se asigna el resultado a dataVar 
                break;
            case 'object' :
                dataVar = invertirArreglo(data);
                //Si el dato es un objeto se llama a la funcion inverirArreglo y se asigna el resultado a dataVar
                break;
            default:
                dataVar = 'El valor ingresado no se puede invertir';
                //Si el dato no coincide con ninguno de los anteriores datos este se asigna a dataVar en la cadena "El valor ingresado no..."        }
    }
    return dataVar;
    //Se devuelve el valor de dataVar//
}

math.invertirNumero = invertirNumero;
math.invetirNumeroComoCadena = invertirNumeroComoTexto;
math.invertirTexto = invertirTexto;
math.invertirArreglo = invertirArreglo;
math.conversionDatos = conversionDatos;
//Se hace referencia o se llaman las funciones hechas anteriormente para acceder a estas y utilizarlas de manera organizada en el codigo.//

module.exports = math;
}