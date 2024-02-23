import type { DirectiveBinding } from 'vue'

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    // reset element opacity to 0 before its intersected
    el.style.opacity = '0'
    el.style.transform = 'none'
    el.style.transition = 'none'
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elementHeight = el.clientHeight
          el.style.transform = `translateY(${elementHeight}px)`
          el.style.transition = 'opacity 2s ease, transform 2s ease'
          // Trigger the animation by applying new styles
          setTimeout(() => {
            requestAnimationFrame(() => {
              el.style.transform = 'translateY(0)'
              el.style.opacity = '1'
            })
          }, 500)
          // disconnect the observer once the animation is applied
          observer.disconnect()
        }
      })
    })
    // start observing when the element enters the viewport
    observer.observe(el)
  }
}
