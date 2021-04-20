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

  var darkTheme = document.querySelectorAll('.darkF')
  for(const item of darkTheme) {
    item.classList.toggle('backDark')
  }

}