'use strict';

module.exports = function (array, item) {
  if (!~array.indexOf(item)) {
    array.push(item)
  }
}
