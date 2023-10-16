const randomColors = document.querySelectorAll('h5')
randomColors.forEach(el => {
  el.addEventListener('click', () => {
    el.animate([
      {color: "green"},
      {color: "blue"},
      {color: "red"},
      {color: "green"},
    ],{
      duration: 1700,
      iterations: Infinity
    })
  })
})