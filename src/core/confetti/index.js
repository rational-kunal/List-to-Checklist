import Lottie from 'lottie-web'
import confettiJson from '../../assets/confetti.json'

let confettiAnimation = undefined

function initialize() {
  // Initialize the confetti container
  const divEl = document.createElement('div')
  divEl.style.position = 'fixed'
  divEl.style.top = '50%'
  divEl.style.left = '50%'
  divEl.style.transform = 'translate(-50%, -50%)'
  divEl.style.width = '500px' // TODO: Relative to the screen size - Should look good on all screen sizes
  divEl.style.height = '500px' // TODO: Relative to the screen size - Should look good on all screen sizes
  divEl.style.zIndex = '9999'
  document.body.appendChild(divEl)

  // Initialize the confetti animation
  confettiAnimation = Lottie.loadAnimation({
    container: divEl,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    animationData: confettiJson,
  })
  confettiAnimation.setSpeed(2)
}

function trigger() {
  confettiAnimation.goToAndPlay(0)
}

export default {
  initialize,
  trigger,
}
