function corrigirQuiz(){

    let pontos = 0;


    let respostas = [

        document.querySelector('input[name="q1"]:checked'),

        document.querySelector('input[name="q2"]:checked'),

        document.querySelector('input[name="q3"]:checked')

    ];



    respostas.forEach(function(resposta){

        if(resposta && resposta.value === "1"){

            pontos++;

        }

    });



    let mensagem;



    if(pontos === 3){

        mensagem = 
        "Excelente! Você sabe como se proteger na internet.";

    }

    else if(pontos === 2){

        mensagem =
        "Muito bem! Continue aprendendo sobre segurança digital.";

    }

    else{

        mensagem =
        "Continue estudando. A segurança na internet é muito importante.";

    }



    document.getElementById("resultado").innerHTML =

    "Você acertou " + pontos + " de 3 perguntas.<br>" + mensagem;


}
