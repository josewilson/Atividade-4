function executarExercicios() {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // limpa a cada execução

  // Pega os inputs
  let nomesInput = document.getElementById("nomes").value.split(",");
  let numerosInput = document.getElementById("numeros").value.split(",").map(Number);
  let filtroInput = document.getElementById("filtro").value.split(",").map(Number);

  // 1. Exibe o terceiro nome
  if (nomesInput.length >= 3) {
    resultado.innerHTML += `<p>Terceiro nome: ${nomesInput[2].trim()}</p>`;
    console.log("Terceiro nome:", nomesInput[2].trim());
  } else {
    resultado.innerHTML += `<p>⚠️ Digite pelo menos 3 nomes.</p>`;
  }

  // 2. Adiciona nomes ao início e final
  nomesInput.push("Fernanda");
  nomesInput.unshift("Gabriel");
  resultado.innerHTML += `<p>Array após adicionar nomes: [${nomesInput.join(", ")}]</p>`;
  console.log("Array após adicionar nomes:", nomesInput);

  // 3. Remove o último nome
  nomesInput.pop();
  resultado.innerHTML += `<p>Array após remover último nome: [${nomesInput.join(", ")}]</p>`;
  console.log("Array após remover último nome:", nomesInput);

  // 4. Dobrar valores com map()
  if (numerosInput.length > 0 && !isNaN(numerosInput[0])) {
    let dobrados = numerosInput.map(num => num * 2);
    resultado.innerHTML += `<p>Valores dobrados: [${dobrados.join(", ")}]</p>`;
    console.log("Valores dobrados:", dobrados);
  }

  // 5. Filtrar valores > 5 com filter()
  if (filtroInput.length > 0 && !isNaN(filtroInput[0])) {
    let maioresQue5 = filtroInput.filter(num => num > 5);
    resultado.innerHTML += `<p>Números maiores que 5: [${maioresQue5.join(", ")}]</p>`;
    console.log("Números maiores que 5:", maioresQue5);
  }
}

function limparResultados() {
  // limpa os inputs
  document.getElementById("nomes").value = "";
  document.getElementById("numeros").value = "";
  document.getElementById("filtro").value = "";

  // limpa a saída
  document.getElementById("resultado").innerHTML = "";

  console.clear(); // limpa o console também
}
