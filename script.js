

function decbin() {
  var get = parseInt(document.getElementById('dec').value, 10);
  document.getElementById('bin').value = get.toString(2);

}
function decoctal() {
  var get = parseInt(document.getElementById('dec').value, 10);
  document.getElementById('octal').value = get.toString(8);

}
function dechex() {
  var get = parseInt(document.getElementById('dec').value, 10);
  document.getElementById('hex').value = get.toString(16);

}

function bindec() {
  var get = document.getElementById('bin').value;
  document.getElementById('dec').value = parseInt(get, 2);
  decoctal();
  dechex();
}

function octaldec() {
  var get = document.getElementById('octal').value;
  document.getElementById('dec').value = parseInt(get, 8);
  decbin();
  dechex();
}

function hexdec() {
  var get = document.getElementById('hex').value;
  document.getElementById('dec').value = parseInt(get, 16);
  decctal();
  decbin();
}


function clearAll() {
  document.convert.bin.value = "";
  document.convert.dec.value = "";
  document.convert.octal.value = "";
  document.convert.hex.value = "";
}

