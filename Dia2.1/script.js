function somar() {
  const n1 = parseInt(document.getElementById("num1_o").value);
  const n2 = parseInt(document.getElementById("num2_o").value);
  var res = n1 + n2;
  document.getElementById("res_soma").value = res;
}

function subtrair() {
  const n1 = parseInt(document.getElementById("num1_u").value);
  const n2 = parseInt(document.getElementById("num2_u").value);
  var res = n1 - n2;
  document.getElementById("res_sub").value = res;
}

function multiplicar() {
  const n1 = parseInt(document.getElementById("num1_m").value);
  const n2 = parseInt(document.getElementById("num2_m").value);
  var res = n1 * n2;
  document.getElementById("res_mult").value = res;
}

function dividir() {
  const n1 = parseInt(document.getElementById("num1_d").value);
  const n2 = parseInt(document.getElementById("num2_d").value);
  var res = n1 / n2;
  document.getElementById("res_div").value = res;
}
