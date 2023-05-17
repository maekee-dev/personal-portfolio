/* This file contains all the code for the frontends element 
 in the index.php page. */ 

console.log('-> loading /index.min.js')

//main colors, same as main.scss
let colorStyle1 = "#FFE13B"
let colorStyle2 = "#202020"
let colorStyle3 = "#434343"

// ##### HERO #####

const recLight = document.getElementById('rec-light')
let recCicle = true
setInterval(() => {
    if(recCicle){
        recLight.style.backgroundColor = 'transparent'
        recCicle = false
    } 
    else{
        recLight.style.backgroundColor = '#202020'
        recCicle = true
    } 
}, 1000);

/* declare the 2 timeline used in the hero section of mobile (< 1024px) 
version of the site; each timeline is an infinite loop (repeat: -1) */
const heroImageTimeline = gsap.timeline({ repeat: -1, ease: "power2.out" })
const heroScannerTimeline = gsap.timeline({ repeat: -1, ease: "power2.out" })

//three version of the face fade in and fade out
heroImageTimeline.to('#hero-face-1', {opacity: 0, display: 'none', duration: 2, delay: 2})
                 .to('#hero-face-2', {opacity: 1, display: 'inline', duration: 2})
                 .to('#hero-face-2', {opacity: 0, display: 'none', duration: 2, delay: 2})
                 .to('#hero-face-3', {opacity: 1, display: 'inline', duration: 2})
                 .to('#hero-face-3', {opacity: 0, display: 'none', duration: 2, delay: 2})
                 .to('#hero-face-1', {opacity: 1, display: 'inline', duration: 2})

//the scanner element goes from top to bottom
heroScannerTimeline.to('.scanner', { top: '90%', duration: 2})
                .to('.scanner', { top: '0%', duration: 2})

/*
const textHeroTimeline = gsap.timeline()

const heroTextSwap = () => {
    textHeroTimeline.to('#hero-text-1', {text: '!\'W D!3@0 &#126;', duration: .2})
                    .to('#hero-text-2', {text: 'W{*+ D3#!{*99'}, '-=.1')
                    .to('#hero-text-1', {text: 'I\'M DIEGO', duration: .2, delay: 1})
                    .to('#hero-text-2', {text: 'WEB DESIGNER'}, '-=.1')
}*/



// ##### ABOUT ME ###### 

//declaration of the screen width checker
let isMobileInfo
if(window.innerWidth > 1024) isMobileInfo = false
else isMobileInfo = true
//when the page is loaded the second item is selected by default
let aboutMeItem = document.querySelector('.about-me-item')
if(window.innerWidth > 1024){
    gsap.to('#about-me-item-2', {borderColor: colorStyle1, duration: .0})
    gsap.to('#about-me-selector-2', {backgroundColor: colorStyle1, duration: .0})
    aboutMeItem.style.cursor = 'pointer'   
}

let preNumInfo = null

const setInfo = num => {
    if(preNumInfo == null) preNumInfo = 2
    if(preNumInfo == num) return
    if(window.innerWidth <= 1024) return
    gsap.to('#about-me-item-' + num, {borderColor: colorStyle1, duration: .2})
    gsap.to('#about-me-selector-' + num, {backgroundColor: colorStyle1, duration: .2})
    gsap.to('#about-me-item-' + preNumInfo, {borderColor: colorStyle2, duration: .2})
    gsap.to('#about-me-selector-' + preNumInfo, {backgroundColor: colorStyle2, duration: .2})
    preNumInfo = num
}

//following code make possibile the passage between the two different system viewers (desktop and mobile)
window.addEventListener("resize", () => {
    if(window.innerWidth > 1024){ //check if the user comes from a mobile viewport
        if(isMobileInfo){
            gsap.to('#about-me-item-1', {borderColor: colorStyle2, duration: .0})
            gsap.to('#about-me-selector-1', {backgroundColor: colorStyle2, duration: .0})
            gsap.to('#about-me-item-3', {borderColor: colorStyle2, duration: .0})
            gsap.to('#about-me-selector-3', {backgroundColor: colorStyle2, duration: .0})
            gsap.to('#about-me-item-2', {borderColor: colorStyle1, duration: .0})
            gsap.to('#about-me-selector-2', {backgroundColor: colorStyle1, duration: .0})
            aboutMeItem.style.cursor = 'pointer' 
            preNumInfo = null
        } 
        isMobileInfo = false //user is now on desktop viewport
    } else{
        if(!isMobileInfo){ //check if the user comes from a desktop viewport
            //de-select the selected item by setting the unactive scheme and the image's opacity to 0
            for(let i = 1; i < 4; i++){
                gsap.to('#about-me-item-' + i, {borderColor: 'rgba(32, 32, 32, 0.37)', duration: .0})
            }
            aboutMeItem.style.cursor = 'auto' 
        }
        isMobileInfo = true //user is now on mobile viewport
    }
})

// ##### DESIGN SECTION #####

//variable declaration for non-mobile viewer logic
let designSelectionName = document.getElementById("design-selection-name")
let designSelectionUrl = document.getElementById("design-selection-url")
let preNumDesign = null
let designTransition = gsap.timeline()

//variable declaration for mobile viewer logic
const designSelected = []
for(let i = 0; i < 7; i++) designSelected.push(false)

//declaration of the screen width checker
let isMobileDesign
if(window.innerWidth > 1024) isMobileDesign = false
else isMobileDesign = true
//when the page is loaded the first item is selected by default
if(window.innerWidth > 1024){
    gsap.to('#design-selector-1', {borderColor: colorStyle1, duration: .0})
    gsap.to('#selector-active-1', {backgroundColor: colorStyle1, duration: .0})
    gsap.to('#design-image-1', {opacity: 1, duration: .0})   
}

//code for fetching the designs' data from the design.json file
let designNum = 7
let designData = Array(designNum)
fetch('./assets/json/design.json')
.then(response => response.json())
.then(data => {
    designData = data //store the json data 
    for(let i = 0; i < data.length; i++){
        document.getElementById("design-item-" + (i+1)).innerHTML = data[i].nome
    }
    designSelectionName.innerHTML = designData[0].nome
    designSelectionUrl.href = designData[0].url
})
.catch(error => console.error('Si è verificato un errore:', error))

//onclick function called by #design-selector-i
const setDesign = num => {
    if(window.innerWidth > 1024){ //if the device is desktop or laptop, use following logic
        if(preNumDesign == null) preNumDesign = 1 //first call mean first item is selected
        if(preNumDesign == num) return //press on the selected item, nothing change
        //clear a possible previous timeline and start a new one
        designTransition.clear()
        designTransition.to('#noise-effect', {opacity: 1, duration: .0})
        designTransition.to('#design-image-' + preNumDesign, {opacity: 0, duration: .0})
        designTransition.to('#noise-effect', {opacity: 0, duration: 1})
        designTransition.to('#design-image-' + num, {opacity: 1, duration: 1}, '-=.8')
        //set the active scheme on the pressed item and set the unactive scheme on the last pressed item
        gsap.to('#design-selector-' + num, {borderColor: colorStyle1, duration: .1})
        gsap.to('#selector-active-' + num, {backgroundColor: colorStyle1, duration: .2})
        gsap.to('#design-selector-' + preNumDesign, {borderColor: colorStyle2, duration: .1})
        gsap.to('#selector-active-' + preNumDesign, {backgroundColor: colorStyle2, duration: .1})
        //change the viewer info based on the item pressed, based on the .fetch() above
        gsap.to('#design-selection-name', {text: designData[num-1].nome})
        designSelectionUrl.href = designData[num-1].url
        //prepare for the next call with a new pressed item
        preNumDesign = num
    }else{ //if the device is mobile
        /* two option: 
        1) if the item has already been pressed, it has to collapse
        2) if it's the item is collapsed, it has to be opened */
        if(designSelected[num-1]){
            gsap.to('#design-selector-' + num + ' .mobile-design-viewer', {opacity: 0, display: 'none', duration: .2})
            gsap.to('#design-selector-' + num + ' .selector-active', {rotate: 0, duration: .2})
            designSelected[num-1] = false
        }else{
            gsap.to('#design-selector-' + num + ' .mobile-design-viewer', {opacity: 1, display: 'inline'})
            gsap.to('#design-selector-' + num + ' .selector-active', {rotate: 45, duration: .2})
            designSelected[num-1] = true
        }
    }
}

//following code make possibile the passage between the two different system viewers (desktop and mobile)
window.addEventListener("resize", () => {
    if(window.innerWidth > 1024){ //check if the user comes from a mobile viewport
        if(isMobileDesign){
            //collapse all the selected items
            gsap.to('.mobile-design-viewer', {opacity: 0, display: 'none', duration: .0})
            gsap.to('.selector-active', {rotate: 0, duration: .0})
            gsap.to('.design-selector', {borderColor: colorStyle2, duration: .0})
            //set the first item as the selected items
            gsap.to('#design-selector-1', {borderColor: colorStyle1, duration: .0})
            gsap.to('#selector-active-1', {backgroundColor: colorStyle1, duration: .0})
            gsap.to('#design-image-1', {opacity: 1, duration: .0}) 
            preNumDesign = null
        } 
        isMobileDesign = false //user is now on desktop viewport
    } else{
        if(!isMobileDesign){ //check if the user comes from a desktop viewport
            //de-select the selected item by setting the unactive scheme and the image's opacity to 0
            gsap.to('.design-selector', {borderColor: colorStyle2, duration: .0})
            gsap.to('.selector-active-inner', {backgroundColor: colorStyle2, duration: .0})
            gsap.to('.design-image', {opacity: 0, duration: .0})
        }
        isMobileDesign = true //user is now on mobile viewport
    }
})



// ##### METHODOLOGIES #####

//onmouseenter function called by #methodologies-item-i
const setMethod = num => {
    if(window.innerWidth < 1440) return //the animation is design to work only on < 1440px screen
    /* based on the hovered item, the graphic element is displayed;
    the hover item is highlited by changing its border */
    switch(num){
        case 1:
            gsap.to('#methodologies-item-1', { borderColor: colorStyle1 })
            gsap.to('.methodologies-style-1', { opacity: 1 })
            gsap.to('.methodologies-style-2', { opacity: 0 })
            gsap.to('.methodologies-style-3', { opacity: 0 })
            break;
        case 2:
            gsap.to('#methodologies-item-2', { borderColor: colorStyle1 })
            gsap.to('.methodologies-style-1', { opacity: 0 })
            gsap.to('.methodologies-style-2', { opacity: 1 })
            gsap.to('.methodologies-style-3', { opacity: 0 })
            break;
        case 3:
            gsap.to('#methodologies-item-3', { borderColor: colorStyle1 })
            gsap.to('.methodologies-style-1', { opacity: 0 })
            gsap.to('.methodologies-style-2', { opacity: 0 })
            gsap.to('.methodologies-style-3', { opacity: 1 })
            break;
    }
}

//onmouseleave function called by #methodologies-item-i
const unsetMethod = () => {
    if(window.innerWidth < 1440) return
    //when the user leaves the item everything return to the default condition
    gsap.to('#methodologies-item-1', { borderColor: colorStyle3 })
    gsap.to('#methodologies-item-2', { borderColor: colorStyle3 })
    gsap.to('#methodologies-item-3', { borderColor: colorStyle3 })
    for(let i = 1; i < 4; i++){
        for(let j = 1; j < 4; j++){
            if(i == j) gsap.to('#methodologies-style-'+i+'-'+j, {opacity: 1})
            else gsap.to('#methodologies-style-'+i+'-'+j, {opacity: 0})
        }
    }
}
