document.addEventListener('DOMContentLoaded', () => {
	const cards = document.querySelectorAll('.card')

	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible')
					observer.unobserve(entry.target) // Stop observing after fade-in
				}
			})
		},
		{ threshold: 0.1 }
	)

	cards.forEach((card) => {
		observer.observe(card)
	})
})
