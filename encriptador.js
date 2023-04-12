function encriptar(){
    var texto=document.getElementById("texto_encriptar").value;
    var uno = ''
    var dos = ''
    var tres = ''
    var cuatro = ''
    var cinco = ''
    for (var x=1;x <= 5;x++){
    
        if (x==1){
            uno = texto.replaceAll('e','enter')
                        
        }
        else if (x==2){
            dos = uno.replaceAll('i','imes')
                        
        }
            
        else if (x==3){
            tres = dos.replaceAll('a','ai')
            
        }
            
        else if (x==4){
            cuatro = tres.replaceAll('o','ober')
            
        }
                    
        else if (x==5){
            cinco = cuatro.replaceAll('u','ufat')
            
        }
        
    }
    document.getElementById("resultado").value = cinco;
    
}
function desencriptar(){
    var texto=document.getElementById("texto_encriptar").value;
    var uno = ''
    var dos = ''
    var tres = ''
    var cuatro = ''
    var cinco = ''
    for (var x=1;x <= 5;x++){
    
        if (x==1){
            uno = texto.replaceAll('ufat','u')            
                        
        }
        else if (x==2){
            dos = uno.replaceAll('ober','o')
            
                        
        }
            
        else if (x==3){
            tres = dos.replaceAll('ai','a')
            
        }
            
        else if (x==4){
            cuatro = tres.replaceAll('imes','i')
            
        }
                    
        else if (x==5){
            cinco = cuatro.replaceAll('enter','e')
            
        }
        
    }
    document.getElementById("resultado").value = cinco;
    
}

function copiar(){
    var resultado = document.getElementById("resultado");
    resultado.select();
    document.execCommand("copy")

}

const textarea = document.getElementById("texto_encriptar");
const imagen = document.getElementById("imagen_ups");
const boton = document.getElementById("boton_copy");
const text_resultado = document.getElementById("resultado");

textarea.addEventListener("input", function() {
  if (textarea.value.trim() === "") {
    imagen.style.display = "block";
    boton.style.display = "none";
    text_resultado.style.display = "none";
  } else {
    imagen.style.display = "none";
    boton.style.display = "block";
    text_resultado.style.display = "block";
  }
});



