
function soma() {;
    var num1 = document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;
    
    var result = num1 + num2;
    document.getElementById("resultadosoma").textContent = result;

    
}

function sub() {;
    var num1 = document.getElementById("num3").valueAsNumber;
    var num2 = document.getElementById("num4").valueAsNumber;
    
    var result = num1 - num2;
    document.getElementById("resultadosub").textContent = result;

    
}

function div() {;
    var num1 = document.getElementById("num5").valueAsNumber;
    var num2 = document.getElementById("num6").valueAsNumber;
    
    var result = num1 / num2;
    document.getElementById("resultadodiv").textContent = result;

    
}

function mult() {;
    var num1 = document.getElementById("num7").valueAsNumber;
    var num2 = document.getElementById("num8").valueAsNumber;
    
    var result = num1 * num2;
    document.getElementById("resultadomult").textContent = result;

    
}
function media() {;
    var num1 = document.getElementById("num9").valueAsNumber;
    var num2 = document.getElementById("num10").valueAsNumber;
    var num3 = document.getElementById("num11").valueAsNumber;
    
    var result = (num1+num2+num3)/3;
    document.getElementById("resultadomedia").textContent = result;

    
}