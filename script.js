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

mensagem="🏆 Parabéns! Você é um especialista em segurança digital!";

}

else if(pontos === 2){

mensagem="👏 Muito bem! Você está aprendendo bastante.";

}

else{

mensagem="📚 Continue aprendendo. A internet fica mais segura quando usamos com cuidado.";

}



document.getElementById("resultado").innerHTML=

"Você acertou " + pontos + " de 3 perguntas!<br><br>" + mensagem;



}
