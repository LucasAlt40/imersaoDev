function insert(num) {
  const display = document.querySelector("#display")
  var numero = display.innerHTML
  document.querySelector("#display").innerHTML = numero + num
}

function clean() {
  const display = document.querySelector("#display")
  display.innerHTML = ""
}

function calcula() {
  var display = document.querySelector("#display").innerHTML
  if (display) {
    document.querySelector('#display').innerHTML = eval(display)

  }
}