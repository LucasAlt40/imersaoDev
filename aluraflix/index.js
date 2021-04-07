/* const link = document.querySelectorAll('.gen')

link.forEach(item => {
  item.addEventListener('click', scroll)
})

function scroll(event) {
  event.preventDefault()
  const element = event.target 
  const id = element.getAttribute('href') 
  const section = document.querySelector(id).offsetTop
  console.log(section)

  window.scroll(0, section)
} */