import './Contact.scss'

export default class Contact {
  constructor (selector) {
    this.node = document.querySelector(selector)
    this.setTemplate()
    this.inputs = this.node.querySelectorAll('input')
    this.validate()
  }

  setTemplate () {
    const template = `
      <h2 class='contact__title'> Contact </h2>
      <legend class='contact__legend'>Send us your comments</legend>
      <input type="text" name="name" title="Your name" placeholder="Write your name" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required><br>
      <input type="email" name="email" title="Your email" placeholder="Write your email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$" required><br>
      <input type="text" name="affair" title="Subject to deal with" placeholder="Subject to deal with" required><br>
      <textarea name="comments" title="Your comments" placeholder="Write your comments" cols="50" rows="5" required></textarea><br>
      <div class="preload  hidden"><i class="fa  fa-refresh  fa-spin  fa-5x"></i></div>
      <div class="message  hidden"></div>
      <input type="submit" value="submit">
    `

    this.node.innerHTML = template
  }

  validate () {
    this.node.addEventListener('submit', e => {
      e.preventDefault()
    })

    this.inputs.forEach(input => {
      let span = document.createElement('span')
      span.className = input.name
      span.classList.add('contact__span')
      input.insertAdjacentElement('afterend', span)

      input.addEventListener('keyup', e => {
        if (input.pattern) {
          let regex = new RegExp(input.pattern)
          return (!regex.exec(input.value))
            ? (document.querySelector(`.${input.name}`).textContent = `Invalid format, write ${input.title.toLowerCase()}`)
            : (document.querySelector(`.${input.name}`).textContent = null)
        } else {
          return (!input.value)
            ? (document.querySelector(`.${input.name}`).textContent = `${input.title.toLowerCase()} is required`)
            : (document.querySelector(`.${input.name}`).textContent = null)
        }
      })
    })
  }
}
