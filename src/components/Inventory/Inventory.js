import './Inventory.scss'

export default class Inventory {
  constructor (selector) {
    this.node = document.querySelector(selector)
    this.setTemplate()
  }

  setTemplate () {
    const template = `
      <article class='inventory__container'>
        <h3 class='inventory__title'> High quality global inventory and unparalleled reach through our proprietary platform </h3>
        <div class='inventory__targets l-container'>
          <div class='inventory__item'>
            <div class='inventory__copy'>
              <p class='inventory__description'> Daily peaks of more than </p>
              <h2 class='inventory__price'> 800.000 </h2>
              <h4 class='inventory__time'> bid requests per second </h4>
            </div>
          </div>
          <div class='inventory__item'>
            <div class='inventory__copy'>
              <p class='inventory__description'> Access to more than </p>
              <h2 class='inventory__price'> 25 billion </h2>
              <h4 class='inventory__time'> Impressions available per day </h4>
            </div>
          </div>
          <div class='inventory__item'>
            <div class='inventory__copy'>
              <p class='inventory__description'> Campaigns running in more than </p>
              <h2 class='inventory__price'> 60 </h2>
              <h4 class='inventory__time'> countries </h4>
            </div>
          </div>
        </div>
      </article>
    `

    this.node.innerHTML = template
  }
}
