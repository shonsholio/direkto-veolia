var urlActual = window.location.href;

var indexCarpeta = urlActual.slice(-3)

console.log(indexCarpeta)
var slider = [
                `${indexCarpeta}/1.jpg`,
                `${indexCarpeta}/2.jpg`,
                `${indexCarpeta}/3.jpg`,     
                `${indexCarpeta}/4.jpg`,
                `${indexCarpeta}/5.jpg`,
                `${indexCarpeta}/6.jpg`               
              ];

document.Imagen.src = slider[0];

var sliderDerecha = document.querySelector("#slider-derecho");
var sliderIzquierda = document.querySelector("#slider-izquierdo");

var contador = 0;
              
function moverDerecha(){
  contador ++ ;
  if (contador > slider.length - 1) {
    contador = 0
  }
  document.Imagen.src = slider[contador];
}

sliderDerecha.addEventListener("click", moverDerecha);

function moverIzquierda(){
  contador -- ;
  if (contador < 0) {
    contador = slider.length - 1
  }
  document.Imagen.src = slider[contador];
}

sliderIzquierda.addEventListener("click", moverIzquierda);