/* SHOWCASE */ 

const showcaseMM = gsap.matchMedia()


//@media (hover: hover) target devices which can hover -- mouse
showcaseMM.add("(min-width: 1024px) and (hover: hover)", () => {
  for(let i = 1; i < 4; i++){
    gsap.from(".showcase .container .item__" + i + " .bg", {
      yPercent: -40,
      ease: "none",
      scrollTrigger: {
        trigger: ".showcase .container .item__" + i,
        scrub: true
      }, 
    })
  }
})

/* DESIGN */

const paragraphDesign = document.querySelector('.design-container .text p').innerHTML
let paragraphDesignStart = ''
for(let i = 0; i < paragraphDesign.length; i++){
  if(paragraphDesign[i] == ' ') paragraphDesignStart += '&nbsp;'
  else paragraphDesignStart += '&#8729;'
}

const designMM = gsap.matchMedia()

designMM.add("(min-width: 1197px)", () => {
  const designScroll = gsap.timeline({
    scrollTrigger: {
      trigger: ".design-container",
      start: "center center",
      end: "+=500",
      scrub: 1,
      pin: true,
    }
  })
  designScroll.add('startDesign')
  designScroll.from('.design-container .item-2', {left: '5vw', marginTop: 0, rotate: 2}, 'startDesign')
  designScroll.from('.design-container .item-3', {left: '20vw', marginTop: 0, rotate: -5}, 'startDesign')
  designScroll.from('.design-container .item-4', {left: '35vw', marginTop: 0, rotate: 10}, 'startDesign')
  designScroll.from('.design-container .text h2', {text: "chCek tou my sdsngie", opacity: 0}, '-=.2')
  designScroll.from('.design-container .text p', {text: paragraphDesignStart, opacity: 0}, '-=.4')
  designScroll.from('.design-container .text a', {text: '&#xd7;&#xd7;&#xd7;&#xd7;&nbsp;&#xd7;&nbsp;&#xd7;&#xd7;&#xd7;&#xd7;', opacity: 0}, '-=.4')
})

designMM.add("(max-width: 1196px)", () => {
  gsap.from('.design-container .container .item', {
    marginLeft: 0,
    rotate: 0,
    scrollTrigger: {
      trigger: ".design-container .container",
      start: 'center bottom',
      end: '+=100',
      scrub: 1
    }
  })
  gsap.from('.design-container .text h2', {
    opacity: 0,
    scrollTrigger: {
      trigger: ".design-container .text",
      end: 'center center'
    }
  })
  gsap.from('.design-container .text p', {
    opacity: 0,
    scrollTrigger: {
      trigger: ".design-container .text",
      end: 'center center'
    }
  })
  gsap.from('.design-container .text a', {
    text: '&#xd7;&#xd7;&#xd7;&#xd7;&nbsp;&#xd7;&nbsp;&#xd7;&#xd7;&#xd7;&#xd7;',
    scrollTrigger: {
      trigger: ".design-container .text",
      end: 'center center'
    }
  })
})


