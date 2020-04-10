
function notas_bi()
        {
            var aluno = document.getElementById('nome');

            var n1 = parseInt(document.getElementById('input-1').value);
            var n2 = parseInt(document.getElementById('input-2').value);
            var n3 = parseInt(document.getElementById('input-3').value);
            var n4 = parseInt(document.getElementById('input-4').value);
                           
            var media = (n1 + n2 + n3 + n4) / 4;

            document.write("Média: "+media);

            if(media < 6)
            {
                var recu = (6 - media);
                alert("Aluno em recuperação, precisando de "+recu);
            }
            else{
                alert("Parabens!!! Aluno aprovado, boas férias ^-^");
            }

        }
        var botao2 = document.getElementById("salvar");
        botao2.onclick = function notas_bi();
    


