(function () {
'use strict';

// module.js

function weWant() {
  console.log('we want');
}

var version = "1.0.0";

// entry.js

var v = version;
console.log(v);
weWant();

}());
