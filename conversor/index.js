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

  var background = document.querySelector('div')
  background.classList.toggle('backDark')

  var bodyDark = document.querySelector('body')
  bodyDark.classList.toggle('backDark')

  var inputDark = document.querySelector('#moeda1')
  inputDark.classList.toggle('backDark')

  var conversorDark = document.querySelector('#converter')
  conversorDark.classList.toggle('backDark')

}