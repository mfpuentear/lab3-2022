var a = 34;
var b = 5;

console.log(`a=${a}, b=${b} a+b=${a + b}`);

var cantidad = 1;

var texto = "";
if (cantidad == 1) {
  texto = "elemento";
} else {
  texto = "elementos";
}

// Operador condicional
texto = cantidad == 1 ? "elemento" : "elementos";

console.log(`hay ${cantidad} elemento${cantidad == 1 ? "" : "s"}`);
