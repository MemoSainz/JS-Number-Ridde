// Aca el juego selecciona un número al azar para que adivines. 
let numeroAzar = Math.floor(Math.random()*100) + 1     /* se requiere que salga entre el 1 y el 100; Math.random no provee el 1 y el 100, 
                                                          siempre da de 0 a 99; 
                                                          la función "Floor" ocasiona que los decimales se borren y se redonde hacia atrás/abajo,
                                                          y el "+1" suma un número.           >> [siempre va a faltar para el 100] */
                                                // I.e. si sale "0.5", se redondea a "0" y se le suma +1, dando '1'
let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0


// Esta acción se va a ejecutar cuando se toque el botón chequear
function chequearResultado() {
    intentos ++
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Please introduce a valid number between 1 & 100'
        mensaje.style.color = 'black'
        return
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = 'Congratulations! You got the number!'
        mensaje.style.color = 'green'
        /* El atributo de[l valor declarado] 'mensaje', es 'style'. un atributo de 'style' es 'color' */
        numeroEntrada.disabled = true;
    } else if (numeroIngresado < numeroAzar){
        mensaje.textContent = 'Higher! The number is greater than this one'
        mensaje.style.color = 'red'
    } else {
        mensaje.textContent = 'Lower! The number is smaller than this one'
        mensaje.style.color = 'red'
    }
}