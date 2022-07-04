// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors
 * Copyright 2011-2022 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

/* global boosted: false */

(() => {
  'use strict'

  // Tooltip and popover demos
  // Tooltip and popover demos
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(tooltip => {
      new boosted.Tooltip(tooltip)
    })

  document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
      new boosted.Popover(popover)
    })

  const toastPlacement = document.getElementById('toastPlacement')
  if (toastPlacement) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!toastPlacement.dataset.originalClass) {
        toastPlacement.dataset.originalClass = toastPlacement.className
      }

      toastPlacement.className = `${toastPlacement.dataset.originalClass} ${this.value}`
    })
  }

  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new boosted.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  const toastTrigger = document.getElementById('liveToastBtn')
  const toastLiveExample = document.getElementById('liveToast')
  if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
      const toast = new boosted.Toast(toastLiveExample)

      toast.show()
    })
  }

  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
  const alertTrigger = document.getElementById('liveAlertBtn')

  // Boosted mod: adapted innerHTML to have the icon and so added a parameter within alert()

  function alert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = `<div class="alert alert-${type} alert-dismissible" role="alert"><span class="alert-icon"><span class="visually-hidden">${typeVisuallyHidden}</span></span><p>${message}</p><button type="button" class="btn-close" data-bs-dismiss="alert"><span class="visually-hidden">Close</span></button></div>`

    alertPlaceholder.append(wrapper)
  }

  if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
      alert('Nice, you triggered this alert message!', 'success', 'Success')
    })
  }

  // Indeterminate checkbox example
  document.querySelectorAll('.bd-example-indeterminate')
    .forEach(example => {
      example.querySelector('[type="checkbox"]').indeterminate = true
    })

  // Disable empty links in docs examples
  document.querySelectorAll('.bd-content [href="#"]')
    .forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault()
      })
    })

  // Modal relatedTarget demo
  const exampleModal = document.getElementById('exampleModal')
  if (exampleModal) {
    exampleModal.addEventListener('show.bs.modal', event => {
      // Button that triggered the modal
      const button = event.relatedTarget
      // Extract info from data-bs-* attributes
      const recipient = button.getAttribute('data-bs-whatever')

      // Update the modal's content.
      const modalTitle = exampleModal.querySelector('.modal-title')
      const modalBodyInput = exampleModal.querySelector('.modal-body input')

      modalTitle.textContent = `New message to ${recipient}`
      modalBodyInput.value = recipient
    })
  }

  // Offcanvas demo
  const myOffcanvas = document.querySelector('.bd-example-offcanvas #offcanvas')
  if (myOffcanvas) {
    myOffcanvas.addEventListener('show.bs.offcanvas', event => {
      event.preventDefault()
    }, false)
  }
})()
