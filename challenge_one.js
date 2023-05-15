var input= document.querySelector("textarea");

function codificar(){

    var resultado= document.getElementById("resultado");
    var texto_codificado = input.value.toLowerCase().replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");

    resultado.innerHTML=(texto_codificado);
    input.focus();
    input.value="";

}

function decodificar(){

    var resultado= document.getElementById("resultado");

    var texto_decodificado= input.value.toLowerCase().replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
    resultado.innerHTML=(texto_decodificado);
    input.focus();
    input.value="";

}

function copiar_mensaje(){

    var temp= document.createElement("input");
    document.getElementsByTagName("body")[0].appendChild(temp);
    temp.value=resultado.innerHTML;
    temp.select();
    document.execCommand("copy");
    document.getElementsByTagName("body")[0].removeChild(temp);
    input.focus();

}

var code= document.getElementById("encriptar");
var decode= document.getElementById("desencriptar");
var copyp= document.getElementById("copiar");

code.onclick= codificar;
decode.onclick= decodificar;
copyp.onclick= copiar_mensaje;