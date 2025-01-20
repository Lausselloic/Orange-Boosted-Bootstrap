// js-docs-start live-loading-buttons
(() => {
  'use strict'
  // Indeterminate loading time
  const loadingButton1 = document.querySelector('#loading-btn-1')
  const statusMessage1 = document.querySelector('#loading-btn-msg-1')
  const loadingAnimation1 = document.querySelector('#loading-btn-1 svg')
  let updateStatusMessageCall1
  loadingButton1.addEventListener('click', () => {
    // Change button's look by adding a loading icon and disable it
    loadingButton1.classList.add('loading-indeterminate')
    loadingAnimation1.classList.remove('d-none')
    loadingButton1.setAttribute('disabled', '')
    // Update indeterminate loading status every second
    statusMessage1.classList.remove('d-none')
    statusMessage1.innerHTML = 'Downloading file 1'
    updateStatusMessageCall1 = setInterval(() => {
      statusMessage1.innerHTML = `${statusMessage1.innerHTML}.`
    }, 1000)
    // stop loading after 10 secondes for this demo
    setTimeout(() => {
      clearInterval(updateStatusMessageCall1)
      statusMessage1.innerHTML = 'Downloading file 1 is complete'
      loadingButton1.classList.remove('loading-indeterminate')
      loadingAnimation1.classList.add('d-none')
      loadingButton1.removeAttribute('disabled')
      loadingButton1.focus()
    }, 5000)
  })

  // Determinate loading time
  const loadingButton2 = document.querySelector('#loading-btn-2')
  const statusMessage2 = document.querySelector('#loading-btn-msg-2')
  const loadingAnimation2 = document.querySelector('#loading-btn-2 svg')
  const loadingTime = getComputedStyle(loadingButton2).getPropertyValue('--bs-btn-loading-time')
  let updateStatusMessageCall2
  const interval = 1000
  loadingButton2.addEventListener('click', () => {
    let counter = 0
    // Change button's look by adding a loading icon and disable it
    loadingButton2.classList.add('loading-determinate')
    loadingAnimation2.classList.remove('d-none')
    loadingButton2.setAttribute('disabled', '')
    // Update indeterminate loading status every 'interval' seconds
    statusMessage2.classList.remove('d-none')
    statusMessage2.innerHTML = 'Downloading file 2: 0%'
    updateStatusMessageCall2 = setInterval(() => {
      counter++
      const percentTime = counter * interval / (loadingTime.slice(0, -1) * 10)
      statusMessage2.innerHTML = `Downloading file 2: ${percentTime}%`
    }, interval)
    // stop loading after 10 secondes for this demo
    setTimeout(() => {
      clearInterval(updateStatusMessageCall2)
      statusMessage2.innerHTML = 'Downloading file 2 is complete'
      loadingButton2.classList.remove('loading-determinate')
      loadingAnimation2.classList.add('d-none')
      loadingButton2.removeAttribute('disabled')
      loadingButton2.focus()
    }, (loadingTime.slice(0, -1) * 1000))
  })
})()
// js-docs-end live-loading-buttons
