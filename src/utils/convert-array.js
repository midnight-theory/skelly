// Polyfill to support proper Array in IE11
// Mainly used to convert nodeArray into proper Array

const convertArray = array => Array.prototype.slice.call(array);
export default convertArray;