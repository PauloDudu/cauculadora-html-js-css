//Aqui fica todo o codigo JavaScript
function somar() {
        var nota1 = parseFloat(document.getElementById("nota1").value);
        var nota2 = parseFloat(document.getElementById("nota2").value);

        if (nota1 == "" && nota2 == "") {
                document.getElementById("res").innerHTML = ("Deve escolher valores pra somar!!");
        } else {
                var res = nota1 + nota2;

                document.getElementById("res").innerHTML = nota1 + " + " + nota2 + " = " + parseFloat(res).toFixed(2);
        }
}

function subtrair() {
        var nota1 = parseFloat(document.getElementById("nota1").value);
        var nota2 = parseFloat(document.getElementById("nota2").value);

        if (nota1 == "" && nota2 == "") {
                document.getElementById("res").innerHTML = ("Deve escolher valores pra somar!!");
        } else {
                var res = nota1 - nota2;
                document.getElementById("res").innerHTML = nota1 + " - " + nota2 + " = " + parseFloat(res).toFixed(2);
        }

}
function multiplicar() {
        var nota1 = parseFloat(document.getElementById("nota1").value);
        var nota2 = parseFloat(document.getElementById("nota2").value);

        if (nota1 == "" || nota2 == "") {
                document.getElementById("res").innerHTML = ("Deve escolher um valor pra multiplicar!!");
        } else {
                var res = nota1 * nota2;
                document.getElementById("res").innerHTML = nota1 + " * " + nota2 + " = " + parseFloat(res).toFixed(2);
        }
}
function dividir() {
        var nota1 = parseFloat(document.getElementById("nota1").value);
        var nota2 = parseFloat(document.getElementById("nota2").value);

        if (nota1 == "" || nota2 == "") {
                document.getElementById("res").innerHTML = ("Deve escolher um valor valido pra dividir!!");
        } else {
                var res = nota1 / nota2;
                document.getElementById("res").innerHTML = nota1 + " / " + nota2 + " = " + parseFloat(res).toFixed(2);
        }

        function calcular() {

        }
}