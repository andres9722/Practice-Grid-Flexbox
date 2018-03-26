import './Header.scss'

export default class Header {
  constructor (selector) {
    this.node = document.querySelector(selector)
    this.setTemplate()
    this.menuIcon = this.node.querySelector('.menu__icon')
    this.nav = this.node.querySelector('.nav')
    this.showMenu()
    this.animated()
  }

  setTemplate () {
    const template = `
      <div class='header__container l-container'>
        <a href='#' class='header__logo'>
          <img src='http://mediasmart.io/assets/images/logo.png' class='header__img' >
        </a>
        <nav class='nav'>
          <ul class='menu'>
            <li class="menu__item"><a href="" class="menu__link">product</a></li>
            <li class="menu__item"><a href="" class="menu__link">partners</a></li>
            <li class="menu__item"><a href="" class="menu__link">about us</a></li>
            <li class="menu__item"><a href="" class="menu__link">blog</a></li>
            <li class="menu__item"><a href="" class="menu__link">sign in</a></li>
          </ul>
        </nav>
        <div class="menu__icon">
          <span class='menu__icon--next'> </span>
        </div>
      </div>
    `

    this.node.innerHTML = template
  }

  showMenu () {
    this.menuIcon.addEventListener('click', e => {
      this.nav.classList.toggle('nav--show')
      this.menuIcon.classList.toggle('menu__icon--active')
    })
  }

  animated () {
    window.addEventListener('scroll', e => {
      let top = window.pageYOffset;
      (top > this.node.offsetHeight) ? this.node.classList.add('header--sticky') : this.node.classList.remove('header--sticky')
    })
  }
}
