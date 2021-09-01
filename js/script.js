
// Variables de los elementos de la calculadora que Multiplica 
const numM1 = document.getElementById('Num1M');
const numM2 = document.getElementById('Num2M');
const resM = document.getElementById('RM');
const multiplicar = document.getElementById('Multiplicar');
const clear1 = document.getElementById('Borrar1');

// Variables de los elementos de la calculadora que suma 
const numS1 = document.getElementById('Num1S');
const numS2 = document.getElementById('Num2S');
const resS = document.getElementById('RS');
const sumar = document.getElementById('Sumar');
const clear2 = document.getElementById('Borrar2');

// Variables de los elementos de la calculadora que resta 
const numR1 = document.getElementById('Num1R');
const numR2 = document.getElementById('Num2R');
const resR = document.getElementById('RR');
const restar = document.getElementById('Restar');
const clear3 = document.getElementById('Borrar3');

// Multiplicar
multiplicar.onclick = () => {
    resM.value = parseInt(numM1.value) * parseInt(numM2.value);
}

clear1.onclick = () => {
    resM.value = '';
    numM1.value = '';
    numM2.value = '';
}

// Sumar 
sumar.onclick = () => {
    resS.value = parseInt(numS1.value) + parseInt(numS2.value);
}

clear2.onclick = () => {
    resS.value = '';
    numS1.value = '';
    numS2.value = '';
}

//Restar
restar.onclick = () => {
    resR.value = parseInt(numR1.value) - parseInt(numR2.value);
}

clear3.onclick = () => {
    resR.value = '';
    numR1.value = '';
    numR2.value = '';
}