console.log('-> loading index.js')

const verticalNavMenu1 = gsap.timeline({ paused: 1 })
verticalNavMenu1.to('.vertical__nav__1', {text: '', duration: 0})
.to('.vertical__nav__1', {text: 'Projects', duration: .4})
const verticalNavMenu2 = gsap.timeline({ paused: 1 })
verticalNavMenu2.to('.vertical__nav__2', {text: '', duration: 0})
.to('.vertical__nav__2', {text: 'About Me', duration: .4})
const verticalNavMenu3 = gsap.timeline({ paused: 1 })
verticalNavMenu3.to('.vertical__nav__3', {text: '', duration: 0})
.to('.vertical__nav__3', {text: 'Contacts', duration: .4})

const verticalNavText = () => {
  verticalNavMenu1.play(0)
  verticalNavMenu2.play(0)
  verticalNavMenu3.play(0)
}

gsap.from('.vertical__nav', {
  x: -100,
  scrollTrigger: {
    trigger: ".hero__container",
    scrub: 1,
    start: 'center top',
    end: 'bottom top',
  }
})

/* HERO */

/* ABOUT ME */

const aboutMeMM = gsap.matchMedia()

const paragraphAboutMe = document.querySelector('.about__me .title  p').innerHTML
let paragraphAboutMeStart = ''
for(let i = 0; i < paragraphAboutMe.length; i++){
  if(paragraphAboutMe[i] == ' ') paragraphAboutMeStart += '&nbsp;'
  else paragraphAboutMeStart += '&#8729;'
}

aboutMeMM.add("(min-width: 1025px)", () => {
  const aboutMeTl = gsap.timeline({scrollTrigger: {
    trigger: ".about__me__container",
    scrub: 1,
    start: 'top bottom',
    end: 'top center'
  }})
  aboutMeTl.from('.about__me__container .item__container', {x: -20, duration: .2, stagger: .1})

  gsap.from('.about__me .title h2', {
    opacity: 0,
    text: '<span>A bit</span> &#xd7;&#xd7;&#xd7;&#xd7;&#xd7; &#xd7;&#xd7;',
    scrollTrigger: {
      trigger: ".about__me",
      scrub: 1,
      end: 'center center'
    }
  })
  gsap.from('.about__me .title p', {
    opacity: 0,
    scrollTrigger: {
      trigger: ".about__me",
      scrub: 1,
      end: 'center center'
    }
  })
})

aboutMeMM.add("(max-width: 1024px)", () => {
  gsap.from('.about__me__container .mobile__style', {
    height: '0%',
    scrollTrigger: {
      trigger: ".about__me",
      start: 'top center',
      end: 'bottom center',
      scrub: 1
    }
  })
  gsap.from('.about__me .title p', {
    opacity: 0,
    scrollTrigger: {
      trigger: ".about__me .title",
      end: 'center center'
    }
  })
  gsap.from('.about__me .title h2', {
    opacity: 0,
    text: '<span>A bti</span> Auotb eM',
    scrollTrigger: {
      trigger: ".about__me .title",
      end: 'center center'
    }
  })
  gsap.from('.about__me__container .item__container__1', {
    y: 25,
    rotate: 5,
    opacity: 0,
    scrollTrigger: {
      trigger: ".about__me__container .item__container__1",
      end: 'center center'
    }
  })
  gsap.from('.about__me__container .item__container__2', {
    y: 25,
    rotate: 5,
    opacity: 0,
    scrollTrigger: {
      trigger: ".about__me__container .item__container__2",
      end: 'center center'
    }
  })
  gsap.from('.about__me__container .item__container__3', {
    y: 25,
    rotate: 5,
    opacity: 0,
    scrollTrigger: {
      trigger: ".about__me__container .item__container__3",
      end: 'center center'
    }
  })
})


/* PROJECTS */

const projectsMM = gsap.matchMedia()

projectsMM.add("(max-width: 1024px)", () => {
  gsap.from('.projects .title .text h2 .text-1', {
    text: '&#xd7;&#xd7;',
    scrollTrigger: {
      trigger: ".projects .title .text h2 .text-2",
      end: 'center center'
    }
  })
  gsap.from('.projects .title .text h2 .text-2 a', {
    text: '&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;',
    scrollTrigger: {
      trigger: ".projects .title .text h2 .text-2",
      end: 'center center'
    }
  })
  gsap.from('.projects .title .text h2 .text-3', {
    text: '&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;',
    scrollTrigger: {
      trigger: ".projects .title .text h2 .text-2",
      end: 'center center'
    }
  })
  gsap.from('.projects-container .item-container-1', {
    x: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".projects-container .item-container-1",
      end: 'center center'
    }
  })
  gsap.from('.projects-container .item-container-2', {
    x: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".projects-container .item-container-2",
      end: 'center center'
    }
  })
  gsap.from('.projects-container .item-container-3', {
    x: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".projects-container .item-container-3",
      end: 'center center'
    }
  })
  gsap.from('.projects .link', {
    opacity: 0,
    rotate: 3,
    scrollTrigger: {
      trigger: ".projects .link",
      end: "center center",
    }
  })
  gsap.from('.projects .link a', {
    text: '&#xd7;&#xd7;&#xd7;&#xd7;&nbsp;&#xd7;&#xd7;&#xd7;&#xd7;&nbsp;&#xd7;&#xd7;&#xd7;',
    scrollTrigger: {
      trigger: ".projects .link",
      end: "center center",
    }
  })
})

projectsMM.add("(min-width: 1025px) and (max-width: 1920px)", () => {
  gsap.from('.projects .title .text h2 .text-1', {
    text: '&#xd7;&#xd7;',
    scrollTrigger: {
      trigger: ".projects .title",
      scrub: 1,
      start: 'top bottom',
      end: 'center center'
    }
  })
  gsap.from('.projects .title .text h2 .text-2 a', {
    opacity: 0,
    text: '&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;',
    scrollTrigger: {
      trigger: ".projects .title",
      scrub: 1,
      start: 'top bottom',
      end: 'center center'
    }
  })
  gsap.from('.projects .title .text h2 .text-3', {
    text: '&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;',
    scrollTrigger: {
      trigger: ".projects .title",
      scrub: 1,
      start: 'top bottom',
      end: 'center center'
    }
  })
  const projectScroll = gsap.timeline({
    ease: 'none',
    scrollTrigger: {
      trigger: ".projects-container",
      start: "center center",
      end: "+=1500",
      pinSpacing: 1,
      scrub: 1,
      pin: true,
    }
  })
  projectScroll.from('.projects-container .item-container-2', {left: '100vw'})
  projectScroll.from('.projects-container .item-container-3', {left: '100vw'})
  gsap.from('.projects .link', {
    opacity: 0,
    scrollTrigger: {
      trigger: ".projects .link",
      start: 'top bottom',
      end: "center center",
      scrub: 1
    }
  })
  gsap.from('.projects .link a', {
    text: '&#xd7;&#xd7;&#xd7;&#xd7;&nbsp;&#xd7;&#xd7;&#xd7;&#xd7;&nbsp;&#xd7;&#xd7;&#xd7;',
    scrollTrigger: {
      trigger: ".projects .link",
      start: 'top bottom',
      end: "center center",
      scrub: 1
    }
  })
})

/* SERVICES */

const servicesTl = gsap.timeline({scrollTrigger: {
  trigger: ".services",
  start: 'top bottom',
  end: "bottom center",
  scrub: 1
}})
servicesTl.to('.services .image img', {scale: 1.5})

/* INFO */

const infoMM = gsap.matchMedia()

infoMM.add("(min-width: 1025px)", () => {
  gsap.from('.info-section .container .item-1 span', {
    text: '<span>0.1 &#10022;</span> &#xd7;&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;',
    scrollTrigger: {
      trigger: ".info-section",
      scrub: 1,
      end: 'center center'
    }
  })
  gsap.from('.info-section .container .item-2 span', {
    text: '<span>0.2 &#10022;</span> &#xd7;&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;',
    scrollTrigger: {
      trigger: ".info-section",
      scrub: 1,
      end: 'center center'
    }
  })
  gsap.from('.info-section .container .item-3 span', {
    text: '<span>0.3 &#10022;</span> &#xd7;&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;&#xd7;',
    scrollTrigger: {
      trigger: ".info-section",
      scrub: 1,
      end: 'center center'
    }
  })
})

/*
infoMM.add("(max-width: 1024px)", () => {
  gsap.from('.info-section .container .item-1 .img', {
    clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    scrollTrigger: {
      trigger: ".info-section .container .item-1",
      end: 'center center'
    }
  })
  gsap.from('.info-section .container .item-2 .img', {
    clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    scrollTrigger: {
      trigger: ".info-section .container .item-2",
      end: 'center center'
    }
  })
  gsap.from('.info-section .container .item-3 .img', {
    clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    scrollTrigger: {
      trigger: ".info-section .container .item-3",
      end: 'center center'
    }
  })
  gsap.from('.info-section .container .item-1 span', {
    text: '♠♠♠♠♠♠',
    opacity: 0,
    rotate: 5,
    scrollTrigger: {
      trigger: ".info-section .container .item-1",
      end: 'center center'
    }
  })
  gsap.from('.info-section .container .item-1 p', {
    opacity: 0,
    rotate: 5,
    scrollTrigger: {
      trigger: ".info-section .container .item-1",
      end: 'center center'
    }
  })
  gsap.from('.info-section .container .item-2 span', {
    text: '♦♦♦♦♦♦♦♦♦♦♦',
    opacity: 0,
    rotate: 5,
    scrollTrigger: {
      trigger: ".info-section .container .item-2",
      end: 'center center'
    }
  })
  gsap.from('.info-section .container .item-2 p', {
    opacity: 0,
    rotate: 5,
    scrollTrigger: {
      trigger: ".info-section .container .item-2",
      end: 'center center'
    }
  })
  gsap.from('.info-section .container .item-3 span', {
    text: '♣♣♣♣♣♣♣♣♣♣',
    opacity: 0,
    rotate: 5,
    scrollTrigger: {
      trigger: ".info-section .container .item-3",
      end: 'center center'
    }
  })
  gsap.from('.info-section .container .item-3 p', {
    opacity: 0,
    rotate: 5,
    scrollTrigger: {
      trigger: ".info-section .container .item-3",
      end: 'center center'
    }
  })
})*/

/* MOTTO */

const mottoTl = gsap.timeline({scrollTrigger: {
  trigger: ".motto-section .container",
  start: 'top bottom',
  end: "center center",
  scrub: 1
}})
mottoTl.from('.motto-section .container .image', {opacity: 0, x: 20, duration: .2})


/* CONSOLE */

const consoleTl = gsap.timeline({scrollTrigger: {
  trigger: ".motto-section",
  start: 'bottom center',
  end: '+=200',
  scrub: 1
}})
consoleTl.from('.console-section', {opacity: 0, y: 80})

let consoleTrigger = false
const showText = () => {
  if(consoleTrigger) return
  gsap.from('.console-section .container .console-body .text p', {text: ' ', duration: 2})
  consoleTrigger = true
}

const consoleMM = gsap.matchMedia()

consoleMM.add("(min-width: 1025px)", () => {
  const consoleScroll = gsap.timeline({
    scrollTrigger: {
      trigger: '#spaceInvaders',
      start: 'top center',
      onEnter: showText
    }
  })
})

const showUrl = page => {
  document.getElementById('consoleUrl').innerHTML = 'Goto: ' + page
  gsap.to('.console-section .container .nav-link', {opacity: 1, display: 'inline'})
}

const hideUrl = () => {
  gsap.to('.console-section .container .nav-link', {opacity: 0, display: 'none'})
}

let consoleMenuVal = true;

const consoleMenuOpenTl = gsap.timeline({paused: 1})
consoleMenuOpenTl.to('.console-section .page-menu', {opacity: 1, display: 'flex'})
.from('.console-section .page-menu span', {opacity: 0, x: -20}, '-=.4')
.from('.console-section .page-menu a, .console-section .page-menu button', {opacity: 0, x: -20, stagger: .1}, '-=.2')

const consoleMenuCloseTl = gsap.timeline({paused: 1})
consoleMenuCloseTl.to('.console-section .page-menu', {opacity: 0, display: 'none'})
.from('.console-section .page-menu span', {opacity: 0, x: -20}, '-=.4')
.from('.console-section .page-menu a', {opacity: 0, x: -20, stagger: .1}, '-=.2')

const consoleMenu = () => {
  if(consoleMenuVal){
    consoleMenuOpenTl.restart()
    gsap.to('#consoleMenuTrigger1', {rotate: 45, y: 5, duration: .2})
    gsap.to('#consoleMenuTrigger2', {opacity: 0, duration: .2})
    gsap.to('#consoleMenuTrigger3', {rotate: -45, y: -5, duration: .2})
    consoleMenuVal = false
  }else{
    consoleMenuCloseTl.restart()
    gsap.to('#consoleMenuTrigger1', {rotate: 0, y: 0, duration: .2})
    gsap.to('#consoleMenuTrigger2', {opacity: 1, duration: .2})
    gsap.to('#consoleMenuTrigger3', {rotate: -0, y: 0, duration: .2})
    consoleMenuVal = true
  }
}


/* MAIL */

gsap.utils.toArray('.stb_line_single').forEach((line, i) => {
  const links = line.querySelectorAll("a"),
        tl = horizontalLoop(links, {
          repeat: -1, 
          speed: 1 + i * 0.5,
          reversed: i ? true : false,
          paddingRight: parseFloat(gsap.getProperty(links[0], "marginRight", "px")) // otherwise first element would be right up against the last when it loops. In this layout, the spacing is done with marginRight.
        });
});

/* CONTACTS */

const contactsMM = gsap.matchMedia()

contactsMM.add("(min-width: 1025px)", () => {
  const contactsScroll = gsap.timeline({
    scrollTrigger: {
      trigger: ".contacts",
      start: "top center",
      end: "center center",
      scrub: 1
    }
  })
  contactsScroll.add('startContacts')
  contactsScroll.to('.contacts .container .orb', {width: '45vw', height: '45vw', opacity: 0}, 'startContacts')
  contactsScroll.from('.contacts .container .text', {opacity: 0}, 'startContacts')
})

contactsMM.add("(max-width: 1024px)", () => {
  const contactsScroll = gsap.timeline({
    scrollTrigger: {
      trigger: ".contacts",
      start: "top center",
      end: "center center",
      scrub: 1
    }
  })
  contactsScroll.add('startContacts')
  contactsScroll.to('.contacts .container .orb', {width: '45vw', height: '45vw', opacity: 0}, 'startContacts')
  contactsScroll.from('.contacts .container .text', {opacity: 0}, 'startContacts')
})