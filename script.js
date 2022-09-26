const textoIngresado = document.querySelector(".input-texto");
const mensajeEncriptado = document.querySelector(".caja-texto");


function copiar(){
    let texto = document.getElementById ( 'texto-copiar' ) ;
    texto.select();
    texto.setSelectionRange(0,99999);
    document.execCommand('copy');
    textoIngresado.value =""

}


function btnEncriptar(){
    const textoEncriptado = encriptar(textoIngresado.value)
    mensajeEncriptado.value = textoEncriptado;
    mensajeEncriptado.style.backgroundImage="none"
    textoIngresado.value = ""
    document.getElementById('copiar').style.display = "block" ;
    document.getElementById('p').style.display = "none" ;
    document.getElementById('textoen2').style.height = "310px" ;
    document.getElementById('texto-copiar').style.display = "block" ;
}

function encriptar(stringEncriptar){
    let matrizCode = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    stringEncriptada = stringEncriptar.toLowerCase ( ) ;

    for ( let i = 0 ; i < matrizCode.length ; i ++ ) {
        if ( stringEncriptar.includes ( matrizCode [ i ] [ 0 ] ) ) {
            stringEncriptar = stringEncriptar.replaceAll
            ( matrizCode [ i ] [ 0 ]  , matrizCode [ i ] [ 1 ])
        }
    }
    return stringEncriptar;
}


function btnDesencriptar ( ) {
    const textoEncriptado = desencriptar ( textoIngresado.value )
    mensajeEncriptado.value = textoEncriptado
    textoIngresado.value =""
}


function desencriptar(stringDesencriptar){
    let matrizCode = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    stringDesencriptar = stringDesencriptar.toLowerCase ( ) ;

    for ( let i = 0 ; i < matrizCode.length ; i ++ ) {
        if ( stringDesencriptar.includes ( matrizCode [ i ] [ 1 ] ) ) {
            stringDesencriptar = stringDesencriptar.replaceAll
            ( matrizCode [ i ] [ 1 ]  , matrizCode [ i ] [ 0 ])
        }
    }
    return stringDesencriptar;
}