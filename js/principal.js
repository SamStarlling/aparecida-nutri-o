let tituloPrincipal = document.querySelector(".titulos"); //Seleciona a 1th elemento com a class titulo
tituloPrincipal.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll(".paciente");

//Loop para calcular o imc de todos os itens da tabela
for (let i = 0; i < pacientes.length; i++) {
  let paciente = pacientes[i];
  let tdPeso = paciente.querySelector(".info-peso");
  let peso = tdPeso.textContent;

  let tdAltura = paciente.querySelector(".info-altura");
  let altura = tdAltura.textContent;

  let tdImc = paciente.querySelector(".info-imc");

  let pesoEhValido = true;
  let alturaEhValida = true;

  if (peso <= 0 || peso >= 1000) {
    pesoEhValido = false;
    tdImc.textContent = "Peso é inválido!";
    paciente.style.backgroundColor = "lightcoral";
  } else if (altura <= 0 || altura >= 3.0) {
    alturaEhValida = false;
    tdImc.textContent = "Altura é inválida!";
    paciente.style.backgroundColor = "lightcoral";
  } else {
    let imc = peso / Math.pow(altura, 2);
    tdImc.textContent = imc.toFixed(2);
  }
}
