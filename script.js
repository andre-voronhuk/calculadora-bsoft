function calcular(operador) {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var resultado = document.getElementById('resultado').value;
    switch (operador) {
        case "+":
            resultado = soma(num1, num2);
            break;

        case "-":
            resultado = subtracao(num1, num2);
            break;

        case "x":
            resultado = multiplicacao(num1, num2);
            break;

        case "/":
            resultado = soma(num1, num2);
            break;

        case "R":
            resultado = raiz(num1);
            break;

            // case "R2":
            //     resultado = soma(num1, num2);
            //     break;

            // case "R3":
            //     resultado = soma(num1, num2);
            //     break;

        case "P10":
            resultado = potencia10(num1);
            break;

        case "S":
            resultado = seno(num1);
            break;

        case "C":
            resultado = coseno(num1);
            break;

        case "T":
            resultado = tangente(num1);
            break;

        case "L":
            resultado = logaritimo(num1);
            break;

        case "E":
            if (num1 == null) {
                num1 = 2.7182818284590452353602874713527;
            } else {
                num2 = 2.7182818284590452353602874713527;
            }
            break;

        default:
            break;
    }
}

function soma(num1, num2) {
    return num1 + num2;
}

function subtracao(num1, num2) {
    return num1 - num2;
}

function multiplicacao(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    return num1 / num2;
}

function raiz(num1) {
    return Math.sqrt(parseFloat(num1));
}



// function raizQuadrada(num1) {
//     return Math.pow(parseFloat(num1), 2);
// }

// function raizCubica(num1) {
//     return Math.pow(parseFloat(num1), 3);
// }

function potencia10(num1) {
    return Math.pow(10, parseFloat(num1));
}

function seno(num1) {
    return Math.sin(parseFloat(num1), 2);
}

function coseno(num1) {
    return Math.cos(parseFloat(num1), 2);
}

function tangente(num1) {
    return Math.tan(parseFloat(num1), 2);
}

function logaritimo(num1) {
    return Math.log(parseFloat(num1));
}

function logaritimoNatural(num1) {
    return Math.log(parseFloat(num1)) / Math.log(2.7182818284590452353602874713527);
}

function digitar(num) {

    var resultado = document.getElementById("num1").textContent;

    resultado = resultado + num;
    document.getElementById("num1").innerHTML = resultado;
    // console.log(elemento);
    console.log(document.getElementById("num1"));

}