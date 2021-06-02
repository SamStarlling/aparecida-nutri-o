let tituloPrincipal = document.querySelector(".titulos"); //Seleciona a 1th elemento com a class titulo
tituloPrincipal.textContent = "Aparecida Nutricionista";

let primeiroPaciente = document.querySelector("#primeiro-paciente");

let tdPeso = primeiroPaciente.querySelector(".info-peso");
let peso = tdPeso.textContent;

let tdAltura = primeiroPaciente.querySelector(".info-altura");
let altura = tdAltura.textContent;

let tdImc = primeiroPaciente.querySelector(".info-imc");

let pesoEhValido = true;
let alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
  pesoEhValido = false;
  tdImc.textContent = "Peso é inválido!";
} else if (altura <= 0 || altura >= 3.0) {
  alturaEhValida = false;
  tdImc.textContent = "Altura é inválida!";
} else {
  let imc = peso / Math.pow(altura, 2);
  tdImc.textContent = imc;
}
