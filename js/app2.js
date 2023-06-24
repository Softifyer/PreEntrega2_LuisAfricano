const counterUp2 = window.counterUp.default

const callback2 = entries => {
	entries.forEach( entry => {
		const el2 = entry.target
		if ( entry.isIntersecting && ! el2.classList.contains( 'is-visible' ) ) {
			counterUp( el2, {
				duration: 4000,
				delay: 10,
			} )
			el2.classList.add( 'is-visible' )
		}
	} )
}

const IO2 = new IntersectionObserver( callback2, { threshold: 1 } )

const el2 = document.querySelector( '.counter2')
IO2.observe( el2 )