/* This file contains all the js code used by ALL the pages 
(e.g. the mobile header menu animation) */ 

console.log('-> loading /general.min.js')

//rotate logo on hover
const hoverLogoIn = () => {
    setTimeout(() => {}, 60);
    gsap.to('.logo', {rotate: 30, duration: .5})
}

const hoverLogoOut = () => {
    setTimeout(() => {}, 10);
    gsap.to('.logo', {rotate: 0, duration: .5})
}

// ##### HEADER MENU MOBILE #####

//onclick function, set the menu to visible and also animate the trigger
const openMobileMenu = () => {
    gsap.to('#mob-trig-1', {rotate: 45, y: 10, duration: .2})
    gsap.to('#mob-trig-2', {opacity: 0, duration: .0})
    gsap.to('#mob-trig-3', {rotate: -45, y: -10, duration: .2})
    gsap.to('.header-mobile', {display: 'flex', opacity: 1, duration: .2})
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
});




const welcomeASCII = `
⠀⠀⠀⠀⠀⢸⠓⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⠀⠀⠑⢤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⡆⠀⠀⠀⠙⢤⡷⣤⣦⣀⠤⠖⠚⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣠⡿⠢⢄⡀⠀⡇⠀⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠸⠷⣶⠂⠀⠀⠀⣀⣀⠀⠀⠀
⢸⣃⠀⠀⠉⠳⣷⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠉⠉⠉⢉⡭⠋
⠀⠘⣆⠀⠀⠀⠁⠀⢀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀
⠀⠀⠘⣦⠆⠀⠀⢀⡎⢹⡀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⡀⣠⠔⠋⠀⠀⠀⠀
⠀⠀⠀⡏⠀⠀⣆⠘⣄⠸⢧⠀⠀⠀⠀⢀⣠⠖⢻⠀⠀⠀⣿⢥⣄⣀⣀⣀⠀⠀
⠀⠀⢸⠁⠀⠀⡏⢣⣌⠙⠚⠀⠀⠠⣖⡛⠀⣠⠏⠀⠀⠀⠇⠀⠀⠀⠀⢙⣣⠄
⠀⠀⢸⡀⠀⠀⠳⡞⠈⢻⠶⠤⣄⣀⣈⣉⣉⣡⡔⠀⠀⢀⠀⠀⣀⡤⠖⠚⠀⠀
⠀⠀⡼⣇⠀⠀⠀⠙⠦⣞⡀⠀⢀⡏⠀⢸⣣⠞⠀⠀⠀⡼⠚⠋⠁⠀⠀⠀⠀⠀
⠀⢰⡇⠙⠀⠀⠀⠀⠀⠀⠉⠙⠚⠒⠚⠉⠀⠀⠀⠀⡼⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢧⡀⠀⢠⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠙⣶⣶⣿⠢⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀  ⠀⠀⠀⠙⢿⣳⠞⠳⡄⠀⠀⠀⢀⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠀⠀⠹⣄⣀⡤⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`

window.addEventListener("load", () => {
    console.log('-> welcome to https://diegomantegazza.me :)')
    console.log(welcomeASCII);
});




/*let cursor = document.querySelector('.cursor')
let cursorScale = document.querySelectorAll('.cursor-scale')
let mouseX = 0
let mouseY = 0
gsap.to({}, 0.016, {repeat:-1, onRepeat:function(){gsap.set(cursor, {css:{left:mouseX, top:mouseY}})}})
window.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; })
cursorScale.forEach(link => {
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow')
        if (link.classList.contains('small')){
            cursor.classList.remove('grow')
            cursor.classList.add('grow-small')
        }
    })
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow')
        cursor.classList.remove('grow-small')
    })
})*/