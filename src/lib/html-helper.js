/**
 * Transform to id-name object.
 *
 * @param {string} x - Text for name.
 * @param {string|number} i - Identifier.
 * @param {*[]} [array] - Iterable array.
 * @returns {{id: string|number, name: string}}
 */
const mapper = function( x, i, array ) {
  return { id: i, name: x };
}

export { mapper };
