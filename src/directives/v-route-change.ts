import type { DirectiveBinding, ObjectDirective } from 'vue'

// Define an interface for the extended HTMLElement
interface RouteChangeElement extends HTMLElement {
  _routeChangeAnimationHandler?: (event: Event) => void
}

const routeChangeDirective: ObjectDirective<RouteChangeElement> = {
  mounted(el: RouteChangeElement, _binding: DirectiveBinding) {
    const handleRouteChange = () => {
      el.classList.add('route-change-animation')
      setTimeout(() => {
        el.classList.remove('route-change-animation')
      }, 1000)
    }

    el._routeChangeAnimationHandler = handleRouteChange
    window.addEventListener('routechange', handleRouteChange)
  },

  unmounted(el: RouteChangeElement) {
    if (el._routeChangeAnimationHandler) {
      window.removeEventListener(
        'routechange',
        el._routeChangeAnimationHandler
      )
      delete el._routeChangeAnimationHandler
    }
  }
}

export default routeChangeDirective
