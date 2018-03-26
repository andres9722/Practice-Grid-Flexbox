import './Information.scss'

export default class Information {
  constructor (selector) {
    this.node = document.querySelector(selector)
    this.setTemplate()
  }

  setTemplate () {
    const template = `
      <article class='information__section'>
        <div class='information__copy'>
          <h3 class='information__title'> Do you want to effectively advertise on mobile devices? </h3>
          <p class='information__content'> Mediasmart can help you optimize your media investment and effectively reach mobile
            audiences in real time. How do we do it? Using extensive data to drive the decisions made by our programmatic algorithms,
            born for mobile. Our secret is our proprietary platform, which strikes the perfect balance between artificial intelligence and
            human interaction, and you can have all its power in your own hands through the most intuitive and transparent web app, or through
            our APIs. </p>
        </div>
        <div class='information__img'>
          <img src='http://mediasmart.io/assets/images/feature-browser-analytics.png' class='information__image'>
        </div>
      </article>
      <article class='information__section'>
        <div class='information__copy'>
          <h3 class='information__title'> Do you want to use the most advanced mobile programmatic tools? </h3>
          <p class='information__content'> mediasmart platform ensures your campaigns are flawlessly delivered in mobile environments,
          allows you to take advantage of the much wider breadth of data available on mobile and, overall, gives your team superpowers:
          you can focus on what brings the most value and let our algorithms do the rest.
          Easy to use, fully transparent, with a lot of levers available for targeting and optimization, sophisticated analysis tools,
          and convenient notifications to call your attention when action is required. You can also learn from every single campaign you
          run thanks to our powerful audience management tools, which can be easily integrated with your own data management platform. </p>
        </div>
        <div class='information__img'>
          <img src='http://mediasmart.io/assets/images/feature-mobile-campaign.png' class='information__image'>
        </div>
      </article>
    `

    this.node.innerHTML = template
  }
}
