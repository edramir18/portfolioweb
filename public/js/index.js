'use strict'

function portfolioHandler (event) {
  const profile = document.getElementById('profile')
  profile.classList.add('-vanished')
  profile.addEventListener('animationend', (event) => {
    const main = document.querySelector('main')
    const template = document.getElementById('portfolio').content.cloneNode(true)
    template.querySelector('.portfolio').classList.add('-is-showed')
    main.replaceChild(template, event.target)
  })
}

document.addEventListener('DOMContentLoaded', (e) => {
  console.log('DOM Loaded')
  const btn = document.getElementById('btn_portfolio')
  btn.addEventListener('click', portfolioHandler)
})
