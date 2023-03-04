gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 2.05,
		effects: true
	})

  gsap.fromTo('.web-header', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.web-header',
			start: 'center',
			end: 'bottom',
			scrub: true
		}
	})

  let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -70 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-700',
				end: '-50',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 70 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-500',
				end: 'top',
				scrub: true
			}
		})
	})

}