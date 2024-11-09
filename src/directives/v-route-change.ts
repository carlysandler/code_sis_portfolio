import type { Directive, DirectiveBinding } from 'vue'

// Define the extended element type
interface RouteChangeElement extends HTMLElement {
  _routeChangeAnimationHandler?: (event: Event) => void
}

let overlay: HTMLDivElement | null = null
let isTransitioning = false

const createOverlay = () => {
  if (overlay) return overlay

  overlay = document.createElement('div')
  overlay.className = 'route-transition-overlay'
  document.body.appendChild(overlay)
  return overlay
}

const handleTransition = async (el: HTMLElement) => {
  if (isTransitioning) return
  isTransitioning = true

  // Ensure overlay exists
  const overlay = createOverlay()

  // Wrap content if needed
  if (!el.classList.contains('route-content-container')) {
    const wrapper = document.createElement('div')
    wrapper.className = 'route-content-container'
    el.parentNode?.insertBefore(wrapper, el)
    wrapper.appendChild(el)
  }

  try {
    // Start transition
    el.classList.add('exiting')
    overlay.classList.add('active')

    // Wait for exit animation
    await new Promise((resolve) => setTimeout(resolve, 300))

    // Reset for enter animation
    el.classList.remove('exiting')
    el.classList.add('entering')

    // Wait a frame to ensure new content is ready
    await new Promise((resolve) => requestAnimationFrame(resolve))

    // Remove overlay
    overlay.classList.remove('active')

    // Clean up
    await new Promise((resolve) => setTimeout(resolve, 300))
    el.classList.remove('entering')
  } finally {
    isTransitioning = false
  }
}

const animateRevealRouteChange: Directive = {
  mounted(el: RouteChangeElement, _binding: DirectiveBinding) {
    // Create and store the event handler
    el._routeChangeAnimationHandler = (_event: Event) => {
      void handleTransition(el)
    }

    // Add the event listener
    window.addEventListener(
      'routechange',
      el._routeChangeAnimationHandler
    )
  },

  unmounted(el: RouteChangeElement) {
    // Clean up event listener
    if (el._routeChangeAnimationHandler) {
      window.removeEventListener(
        'routechange',
        el._routeChangeAnimationHandler
      )
      delete el._routeChangeAnimationHandler
    }

    // Clean up overlay
    if (overlay && overlay.parentNode) {
      overlay.parentNode.removeChild(overlay)
      overlay = null
    }
  }
}

export default animateRevealRouteChange
