function corrigirQuiz(){

let pontos = 0;


let respostas=[

document.querySelector('input[name="q1"]:checked'),

document.querySelector('input[name="q2"]:checked')

];


respostas.forEach(function(resposta){

if(resposta && resposta.value=="1"){

pontos++;

}

});


document.getElementById("resultado").innerHTML=

"🎉 Você acertou "+pontos+" de 2 perguntas!";

}
