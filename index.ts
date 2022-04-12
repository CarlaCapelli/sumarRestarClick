let contador: number = 0;
let nodoNum = document.getElementById("numero");
let ingNumero = document.getElementById("cajita");
function sumar() {
  contador++;

  nodoNum.innerHTML = contador;
}
let btnContar = document.getElementById("sumar");
btnContar.addEventListener("click", sumar);
function restar() {
  contador--;

  nodoNum.innerHTML = contador;
}
btnContar = document.getElementById("restar");
btnContar.addEventListener("click", restar);

function cajita(): void {
  let numero = parseInt(ingNumero.value);

  nodoNum.innerHTML = contador + numero;
}

ingNumero.addEventListener("input", cajita);
