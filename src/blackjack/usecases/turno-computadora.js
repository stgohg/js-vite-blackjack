import { pedirCarta, valorCarta, crearCartaHtml } from "./";

/**
 * Funcion que se ejecuta luego de presionar Detener o cuando sacas mas de 21 puntos
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HtmlElement} puntosHTML elemento Html para mostrar los puntos
 * @param {divCartasComputadora} divCartasComputadora div donde se muentran los puntos de la computadora
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck ) => {

    let puntosComputadora = 0;

    if(!puntosMinimos) throw new Error('Puntos minimos son necesarios');
    if(!puntosHTML) throw new Error('Argumento es necesarios');
    
    
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">

        const imgCarta = crearCartaHtml(carta);

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}