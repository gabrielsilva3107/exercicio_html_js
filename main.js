function validarFormulario() {
    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);

    var mensagemDiv = document.getElementById('mensagem');

    if (!isNaN(campoA) && !isNaN(campoB)) {
    if (campoB > campoA) {
        mensagemDiv.style.color = 'green';
        mensagemDiv.innerHTML = 'Formulário válido! B é maior que A.';
    } else {
        mensagemDiv.style.color = 'red';
        mensagemDiv.innerHTML = 'Formulário inválido! B deve ser maior que A.';
    }
    } else {
    mensagemDiv.style.color = 'red';
    mensagemDiv.innerHTML = 'Por favor, preencha ambos os campos com números.';
    }
}