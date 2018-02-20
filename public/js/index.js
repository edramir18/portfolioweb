'use strict'
/* global fetch:false */
function loadTemplate (templateSelector, targetSelector, data) {
  const target = document.querySelector(targetSelector)
  const template = document.querySelector(templateSelector)

  if (!target || !template) throw new Error('No available element to process.')
  const node = template.content.cloneNode(true)
  node.querySelector('h4').textContent = data.title
  node.querySelector('a').setAttribute('href', data.url)
  node.querySelector('img').setAttribute('src', data.img)
  target.appendChild(node)
}
function fecthJSON (url) {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok.')
    }
    return response.json()
  })
}

document.addEventListener('DOMContentLoaded', (e) => {
  console.log('DOM Loaded')
  const url = '/projects.json'
  fecthJSON(url).then((json) => {
    json.plainhtml.forEach(p => {
      loadTemplate('#project', '#pr_html', p)
    })
  }).catch(error => {
    console.log(`Error: ${error}`)
  })
  /* const btn = document.getElementById('btn_portfolio')
  btn.addEventListener('click', portfolioHandler) */
})
