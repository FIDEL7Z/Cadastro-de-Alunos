 function cadastrarAluno() {
        const matricula = document.getElementById("matricula").value;
        const nome = document.getElementById("nome").value;
        const nota1 = parseFloat(document.getElementById("nota1").value);
        const nota2 = parseFloat(document.getElementById("nota2").value);

        if (matricula.trim() === '' || nome.trim() === '' || isNaN(nota1) || isNaN(nota2)) {
            alert("Por favor, preencha todos os campos corretamente.");
            return;
        }

        const mediaTotal = (nota1 + nota2) / 2;

        document.getElementById("cadastrarButton").disabled = true;

        setTimeout(function () {
            const tabela = document.getElementById("tabela");
            const novaLinha = tabela.insertRow(-1);

            const celulaMatricula = novaLinha.insertCell(0);
            celulaMatricula.innerHTML = matricula;

            const celulaNome = novaLinha.insertCell(1);
            celulaNome.innerHTML = nome;

            const celulaPrimeiraNota = novaLinha.insertCell(2);
            celulaPrimeiraNota.innerHTML = nota1;

            const celulaSegundaNota = novaLinha.insertCell(3);
            celulaSegundaNota.innerHTML = nota2;

            const celulaMediaTotal = novaLinha.insertCell(4);
            celulaMediaTotal.innerHTML = mediaTotal.toFixed(2);

           
            if (mediaTotal < 7) {
                celulaMediaTotal.classList.add("vermelho");
            } else if (mediaTotal === 7) {
                celulaMediaTotal.classList.add("amarelo");
            } else {
                celulaMediaTotal.classList.add("verde");
            }

            document.getElementById("matricula").value = "";
            document.getElementById("nome").value = "";
            document.getElementById("nota1").value = "";
            document.getElementById("nota2").value = "";
            document.getElementById("cadastrarButton").disabled = false;
        }, 2000); 
    }