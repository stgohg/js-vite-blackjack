/**
 * Esta funcion retorna el valor de una carta
 * @param {string} carta Ejemplo carta: '1C'
 * @returns valor numero de la carta Ejemplo: 1 para '1C'
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}