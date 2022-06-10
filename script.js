var campoSelecionado = "num1"; //ou "num2"
var operadorGlobal = "";

function calcular(elemento) {



    operador = elemento.textContent;

    if (operador == undefined) {

        operador = elemento;
    }


    console.log(operador);
    var num1 = document.getElementById('num1').textContent;
    var num2 = document.getElementById('num2').textContent;
    var resultadoElemento = document.getElementById('resultado');
    var resultado = 0;
    if (num2 == 0 || num2 == undefined) {
        campoSelecionado = "num2";
        document.getElementById('op').innerHTML = operador;
        operadorGlobal = operador;

    }

    switch (operador) {
        case "+":
            resultado = soma(num1, num2);
            break;

        case "-":
            resultado = subtracao(num1, num2);
            break;

        case "X":
            resultado = multiplicacao(num1, num2);
            break;

        case "÷":

            resultado = divisao(num1, num2);
            break;

        case "²√x": //RAIZ QUADRADA

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

        case "log":
            resultado = logaritimo(num1);
            break;

        case "e":
            if (num1 == null) {
                num1 = 2.7182818284590452353602874713527;
            } else {
                num2 = 2.7182818284590452353602874713527;
            }
            break;
        case "CE":
            operador = "";
            limparTela();
            return;
            break;
        default:
            break;
    }
    if (num1 == "") {
        document.getElementById('num1').innerHTML = 0;
    }
    console.log(resultado);
    if (resultado != undefined || resultado != Number(NaN) || resultado != Infinity) {

        resultadoElemento.innerHTML = resultado;
    } else {
        resultadoElemento.innerHTML = 0;
    }
}

function soma(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);

}

function subtracao(num1, num2) {
    return num1 - num2;
}

function multiplicacao(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    if (num2 != 0) {
        return parseFloat(num1) / parseFloat(num2);
    } else {
        return "Impossivel dividir por 0"
    }

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
    return Math.log10(num1);
}

function logaritimoNatural(num1) {
    return Math.log(parseFloat(num1)) / Math.log(2.7182818284590452353602874713527);
}

function digitar(e) {
    num = e.textContent;

    var resultado = document.getElementById(campoSelecionado).textContent;
    if (resultado == 0) {
        resultado = num;
    } else {

        resultado = resultado + num;
    }
    document.getElementById(campoSelecionado).innerHTML = resultado;

}

function limparTela() {

    document.getElementById("num1").innerHTML = "";
    document.getElementById("num2").innerHTML = "";
    document.getElementById("op").innerHTML = "";

    document.getElementById("resultado").innerHTML = "0";
    campoSelecionado = "num1";
    operadorGlobal = "";


}

function apagar() {
    var valor = document.getElementById(campoSelecionado).textContent;
    if (valor == 0) {
        return;
    }
    valor = valor.replace(valor[valor.length - 1], "");
    document.getElementById(campoSelecionado).innerHTML = valor;
    if (valor.length == 0) {
        document.getElementById(campoSelecionado).innerHTML = 0;
    }

}

function realizarCalculo() {
    calcular(operadorGlobal);
}