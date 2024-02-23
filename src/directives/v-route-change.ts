import type { DirectiveBinding } from 'vue'
export default {
	// Directive definition
	inserted(el: HTMLElement, binding: DirectiveBinding) {
		// When the element is inserted into the DOM
		el.style.transition = 'transform 0.5s ease'; // Define the transition effect
		el.style.transform = 'scale(0.5)'; // Start with a scale of 0.5

		// Set a delay to apply the transition effect after the element is rendered
		setTimeout(() => {
			el.style.transform = ''; // Reset the transform property to trigger the transition
			el.style.borderRadius = '50%'; // Apply circular shape
			el.style.boxShadow = '0px 0px 50px rgba(0, 0, 0, 0.5)'; // Apply shadow effect
		}, 100);
	},
};