if(window.innerWidth > 1024){
    import('/assets/js/lib/three.js')
    .then(THREE => {
        console.log('-> loading indexThreeJS.js')
        const container1 = document.getElementById("scene-container-hero")
        const container2 = document.getElementById("scene-container-projects")
        
        const scene1 = new THREE.Scene();
        const camera1 = new THREE.PerspectiveCamera(75, container1.offsetWidth / container1.offsetHeight, 0.1, 1000)
        camera1.position.z = 2
        const renderer1 = new THREE.WebGLRenderer({ alpha: true, antialias: true })
        renderer1.setSize(container1.offsetWidth, container1.offsetHeight)
        container1.appendChild(renderer1.domElement)
        
        const scene2 = new THREE.Scene();
        const camera2 = new THREE.PerspectiveCamera(75, container2.offsetWidth / container2.offsetHeight, 0.1, 1000)
        camera2.position.z = 2.1
        const renderer2 = new THREE.WebGLRenderer({ alpha: true, antialias: true })
        renderer2.setSize(container2.offsetWidth, container2.offsetHeight)
        container2.appendChild(renderer2.domElement)
        
        const sphereGeometry = new THREE.SphereGeometry( 1.2, 72,  72 )
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: '#080808', opacity: .5, transparent: true })
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial) 
        const sphereEdges = new THREE.EdgesGeometry(sphereGeometry)
        const sphereLineMaterial = new THREE.LineBasicMaterial({ color: '#00FF85' })
        const sphereLines = new THREE.LineSegments(sphereEdges, sphereLineMaterial)
        sphere.add(sphereLines)
        scene1.add(sphere) 
        
        const torusGeometry = new THREE.TorusGeometry(2, 1, 32, 128)
        const torusMaterial = new THREE.MeshBasicMaterial({ color: '#080808', opacity: .5, transparent: true })
        const torus = new THREE.Mesh(torusGeometry, torusMaterial)
        const torusEdges = new THREE.EdgesGeometry(torusGeometry)
        const torusLineMaterial = new THREE.LineBasicMaterial({ color: '#fff' })
        const torusLines = new THREE.LineSegments(torusEdges, torusLineMaterial)
        torus.rotation.x -= 175
        torus.position.x -= 1.5
        torus.position.y -= .5
        torus.add(torusLines)
        scene2.add(torus)
        
        let scene2MouseIn = false
        
        container2.addEventListener("mouseenter", () => scene2MouseIn = true)
        container2.addEventListener("mouseleave", () => scene2MouseIn = false)
        
        const animate = () => {
            requestAnimationFrame(animate)
            renderer1.render(scene1,camera1)
            renderer2.render(scene2,camera2)
        
            sphere.rotation.y += 0.001
            //sphere.rotation.x -= 0.0005
            //sphere.rotation.z += 0.0005
        
            if(scene2MouseIn) torus.rotation.z += 0.002
            else torus.rotation.z -= 0.002
        }
        animate();
        
        const consoleWriteTl = gsap.timeline({repeat: -1})
        consoleWriteTl.from('.console-section .console-body .images .item-2 p', {text: ' ', ease: 'linear', duration: 30})
        .to('.console-section .console-body .images .item-2 p', {opacity: 0, duration: .05, delay: 2})
        .to('.console-section .console-body .images .item-2 p', {x: 5, opacity: 1, duration: .05})
        .to('.console-section .console-body .images .item-2 p', {x: -5, opacity: 0, duration: .05})
        .to('.console-section .console-body .images .item-2 p', {x: 0, opacity: 1, duration: .05})
    })
    .catch(error => console.error('-> ERROR: Can\'t load ThreeJS module __ ' + error))
}
