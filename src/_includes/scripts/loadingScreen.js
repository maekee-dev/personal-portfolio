window.addEventListener("load", () => {
    document.body.style.overflowY = 'auto'
    document.body.style.cursor = 'none';
    const loadingTl = gsap.timeline({ease: 'none'})
    loadingTl.to('.text-loading div', { clipPath: 'polygon(0% 0%, 0% 0%, 100% 0%, 100% 0%)'})
    loadingTl.to('.text-loading span', { text: '', border: 'none', stagger: .05}, '-=.4')
    loadingTl.to('#loadingBlink', {opacity: 0, display: 'none'}, '-=.8')
    loadingTl.to('.loading-container', {opacity: 0, display: 'none', duration: .8})
  })