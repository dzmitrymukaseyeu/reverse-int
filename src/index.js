module.exports = function reverse (n) {
  let arr = [];
  arr = String(n).split('');
  (arr[0] == '-') ? arr = arr.slice(1, arr.length).reverse() : arr = arr.reverse(); 
    return arr.join('');
}