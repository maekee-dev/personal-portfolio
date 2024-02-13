/* This file contains all the js code used by ALL the pages 
(e.g. the mobile header menu animation) */ 

console.log('-> loading general.js')
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)

const headerMobileTl = gsap.timeline({ paused: true })
headerMobileTl.from('.header-mobile .container .item a', {text: '&#xd7;&#xd7;&#xd7;&#xd7;'})

//onclick function, set the menu to visible and also animate the trigger
const openMobileMenu = () => {
    gsap.to('#mob-trig-1', {rotate: 45, y: 8, duration: .2})
    gsap.to('#mob-trig-2', {opacity: 0, duration: .0})
    gsap.to('#mob-trig-3', {rotate: -45, y: -8, duration: .2})
    gsap.to('.header-mobile', {display: 'flex', opacity: 1, duration: .2})
    headerMobileTl.play(0)
}

const closeMobileMenu = () => {
    gsap.to('#mob-trig-1', {rotate: 0, y: 0, duration: .2})
    gsap.to('#mob-trig-2', {opacity: 1, duration: .2})
    gsap.to('#mob-trig-3', {rotate: 0, y: 0, duration: .2})
    gsap.to('.header-mobile', {display: 'none', opacity: 0, duration: .2})
}

//if the user resizes the page with the mobile menu opened, it must be closed
window.addEventListener('resize', () => {
  if(window.innerWidth > 1024) closeMobileMenu()
})

window.addEventListener("load", () => {
    console.log('-> welcome to https://diegomantegazza.me :)')
})

gsap.set(".cursor", { xPercent: -50, yPercent: -50 })
let targets = gsap.utils.toArray(".cursor");
window.addEventListener("mousemove", (e) => {
    gsap.to(targets, {
    duration: 0.1,
    x: e.clientX,
    y: e.clientY,
    ease: "power1.out",
    overwrite: "auto"
    })
})

const cursorFadeIn = () => {
    gsap.to('.cursor', { width: 40, height: 40, duration: .2});
    //gsap.to('.cursor svg', { opacity: 1, duration: .2 })
}

const cursorFadeOut = () => {
    gsap.to('.cursor', { width: 12, height: 12, duration: .2 });
    //gsap.to('.cursor svg', { opacity: 0, duration: .2 })
}

document.querySelectorAll('a').forEach(link => {
    link.addEventListener("mouseenter", cursorFadeIn)
    link.addEventListener("mouseleave", cursorFadeOut)
})

document.querySelectorAll('.cursor__big').forEach(link => {
    link.addEventListener("mouseenter", cursorFadeIn)
    link.addEventListener("mouseleave", cursorFadeOut)
})

document.querySelectorAll('.cursor__dark').forEach(item => {
    item.addEventListener('mouseenter', () => gsap.to('.cursor', {backgroundColor: '#080808', duration: .2}))
    item.addEventListener('mouseleave', () => gsap.to('.cursor', {backgroundColor: '#00FF85', duration: .2}))
})

document.querySelectorAll('input, textarea').forEach(item => {
    item.addEventListener('mouseenter', () => gsap.to('.cursor', {backgroundColor: 'transparent', duration: .2}))
    item.addEventListener('mouseleave', () => gsap.to('.cursor', {backgroundColor: '#00FF85', duration: .2}))
})
