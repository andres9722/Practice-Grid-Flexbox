import './Banner.scss'

export default class Banner {
  constructor (selector) {
    this.node = document.querySelector(selector)
    this.setTemplate()
  }

  setTemplate () {
    const template = `
      <div class='banner__container'>
        <div class='banner__img'>
          <img src='https://images.pexels.com/photos/139324/pexels-photo-139324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' class='banner__image'>
        </div>
        <div class='banner__copy l-container'>
          <h2 class='banner__title'> be smart about your media buying on mobile </h2>
          <p class='banner__subtitle'> Reach mobile audiences effectively in Real Time </p>
        </div>
      </div>
    `

    this.node.innerHTML = template
  }
}
