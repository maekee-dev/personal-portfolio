const linkGlitch = [
    gsap.timeline({paused: true}),
    gsap.timeline({paused: true}),
    gsap.timeline({paused: true}),
]

for(let i = 0; i < 3; i++){
    linkGlitch[i].to('.animate-link-' + (i+1), {opacity: 0, duration: .05})
    linkGlitch[i].to('.animate-link-' + (i+1), {x: 5, opacity: 1, duration: .05})
    linkGlitch[i].to('.animate-link-' + (i+1), {x: -5, opacity: 0, duration: .05})
    linkGlitch[i].to('.animate-link-' + (i+1), {x: 0, opacity: 1, duration: .05})
    linkGlitch[i].paused(true)
}



