function conversor() {
  var moeda = document.querySelector('#moeda1').value
  var moedaConvertida = parseInt(moeda) * 5.50
  console.log(moedaConvertida)

  const audio = document.querySelector('audio')
  audio.play()

  resultado = document.querySelector('#resultado')
  resultado.innerHTML = 'R$' + moedaConvertida
}



function dark() {
  var textDark = document.querySelectorAll('h1, h2, h3, span')
  console.log(textDark)
  textDark[0].classList.toggle('textDark')
  textDark[1].classList.toggle('textDark')
  textDark[2].classList.toggle('textDark')
  textDark[3].classList.toggle('textDark')
  textDark[4].classList.toggle('textDark')

  var background = document.querySelector('div')
  background.classList.toggle('backDark')

  var bodyDark = document.querySelector('body')
  bodyDark.classList.toggle('backDark')

  var inputDark = document.querySelector('#moeda1')
  inputDark.classList.toggle('backDark')

  var conversorDark = document.querySelector('#converter')
  conversorDark.classList.toggle('backDark')

  var temaDark = document.querySelectorAll('#tema')
  temaDark[0].classList.toggle('backDark')
  temaDark[1].classList.toggle('backDark')
}