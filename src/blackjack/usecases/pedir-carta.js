/**
 * Esta funcion retorna una carta del deck
 * @param {Array<String>} deck Ejemplo Deck: ['1C','1D','1H','1S'] 
 * @returns {String} Una carta del deck Ejemplo: '1C'
 */

export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}