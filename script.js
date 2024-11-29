function verificarResposta() {
    const numeroX = parseInt(document.getElementById('numeroX').value);
    const numeroY = parseInt(document.getElementById('numeroY').value);
    const respostaUsuario = parseInt(document.getElementById('resposta').value);
    const resultadoDiv = document.getElementById('resultado');

    // Verificar se os valores inseridos são válidos
    if (isNaN(numeroX) || isNaN(numeroY) || isNaN(respostaUsuario)) {
        resultadoDiv.innerHTML = '<p style="color: red;">Por favor, insira números válidos em todos os campos.</p>';
        return;
    }

    const resultadoCorreto = numeroX * numeroY;

    // Verificar se a resposta está correta
    if (respostaUsuario === resultadoCorreto) {
        resultadoDiv.innerHTML = `<p style="color: green;">Correto! 🎉 ${numeroX} * ${numeroY} = ${resultadoCorreto}</p>`;
    } else {
        resultadoDiv.innerHTML = `<p style="color: red;">Resposta errada. Tente novamente! O resultado correto é ${resultadoCorreto}.</p>`;

    }
}
