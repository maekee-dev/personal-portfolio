const loadDesktopScript = () => {
    let isTouch = "ontouchstart" in window || window.navigator.maxTouchPoints
    if (!isTouch) {
        const lenis = new Lenis({
          duration: 2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10*t))
        })
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
        lenis.on('scroll', ScrollTrigger.update)
        gsap.ticker.add((time)=>{
          lenis.raf(time * 1000)
        })
    }
}
loadDesktopScript()