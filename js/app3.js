const counterUp3 = window.counterUp.default

const callback3 = entries => {
	entries.forEach( entry => {
		const el3 = entry.target
		if ( entry.isIntersecting && ! el3.classList.contains( 'is-visible' ) ) {
			counterUp( el3, {
				duration: 4000,
				delay: 10,
			} )
			el3.classList.add( 'is-visible' )
		}
	} )
}

const IO3 = new IntersectionObserver( callback3, { threshold: 1 } )

const el3 = document.querySelector( '.counter3')
IO3.observe( el3 )