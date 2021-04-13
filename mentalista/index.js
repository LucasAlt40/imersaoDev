const frases = [
"Às vezes, a vida bate com um tijolo na sua cabeça. Não perca a fé.",
"Seja criterioso com a qualidade. Algumas pessoas não estão acostumadas com um ambiente onde a excelência é esperada.",
"Tenho tanto orgulho do que nós não fazemos quanto tenho do que fazemos.",
"É raro ver um artista nos seus 30 ou 40 anos capaz de contribuir com algo incrível.",
"Eu trocaria toda a minha tecnologia por uma tarde com Sócrates.",
"As coisas não precisam mudar o mundo para serem importantes.",
'Se hoje fosse o último dia da minha vida, eu desejaria fazer o que estou prestes a fazer hoje?" E se a resposta for "Não" por muitos dias seguidos, eu sei que preciso mudar alguma coisa.',
"Melhor ser pirata, do que marinheiro...",
"A inovação distingue um líder de um seguidor.",
"Você não consegue ligar os pontos olhando pra frente; você só consegue ligá-los olhando pra trás. Então você tem que confiar que os pontos se ligarão algum dia no futuro. Você tem que confiar em algo – seu instinto, destino, vida, carma, o que for. Esta abordagem nunca me desapontou, e fez toda diferença na minha vida.",
"Foco é dizer não.",
"Ser o mais rico do cemitério não é o que mais importa para mim… Ir para a cama à noite e pensar que foi feito alguma coisa grande. Isso é o que mais importa para mim.",
"Você pode encarar um erro como uma besteira a ser esquecida ou como um resultado que aponta uma nova direção.",
"As pessoas não sabem o que querem, até mostrarmos a elas.",
"Parece que você está apenas à procura de alguém para ficar zangado em vez de si próprio.",
"Tenha coragem de seguir o que seu coração e sua intuiçâo dizem. Eles já sabem o que você realmente deseja. Todo resto é secundário.",
"Estamos aqui para fazer alguma diferença no universo, se não, porque estar aqui?",
"Não penso muito em legado para as próximas gerações. Penso apenas em acordar de manhã e trabalhar com pessoas brilhantes para criar coisas que, espero, sejam tão apreciadas por outras pessoas como são apreciadas por nós.",
"Se você faz algo de bom e tudo dá certo, acho que é hora de pensar em outra coisa e tentar adivinhar o que vem pela frente.",
"Não faz sentido olhar para trás e pensar: devia ter feito isso ou aquilo, devia ter estado lá. Isso não importa. Vamos inventar o amanhã e parar de nos preocupar com o passado.",
"Nascemos, vivemos por um momento breve e morremos. Tem sido assim há muito tempo. A tecnologia não está mudando muito este cenário.",
"Para se ter sucesso, é necessário amar de verdade o que se faz. Caso contrário, levando em conta apenas o lado racional, você simplesmente desiste. É o que acontece com a maioria das pessoas.",
"As pessoas ligam a televisão quando querem desligar o cérebro.",
"Concentre-se naquilo que você é bom, delegue todo o resto.",
]

const frase = document.getElementById('frase')

function novaFrase() {
  var random = frases[Math.floor((Math.random() * frases.length))]
  console.log(random)

  frase.innerHTML = `${random}`
}

const btn = document.getElementById('clica')

btn.addEventListener('click', novaFrase)