const counterUp4 = window.counterUp.default

const callback4 = entries => {
	entries.forEach( entry => {
		const el4 = entry.target
		if ( entry.isIntersecting && ! el4.classList.contains( 'is-visible' ) ) {
			counterUp( el4, {
				duration: 4000,
				delay: 10,
			} )
			el4.classList.add( 'is-visible' )
		}
	} )
}

const IO4 = new IntersectionObserver( callback4, { threshold: 1 } )

const el4 = document.querySelector( '.counter4')
IO3.observe( el4 )