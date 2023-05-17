import * as THREE from './lib/three-js.min.js'

//declaration of the scene container
const containerPano = document.getElementById('panoramic')
let containerWidth = containerPano.offsetWidth
let containerHeight = containerPano.offsetHeight

//declaration of the scene, the camera and the renderer 
const scenePano = new THREE.Scene()
const cameraPano = new THREE.PerspectiveCamera(75, containerWidth/containerHeight, 0.1, 1000)
const rendererPano = new THREE.WebGLRenderer()
rendererPano.setSize(containerWidth, containerHeight)
containerPano.appendChild(rendererPano.domElement)

/* code idea: the space is a sphere reversed, seen from the inside; if
we put the image as a texture on the inner surface of the sphere
we can see the image as a 360 world */

//build the sphere
const geometryPano = new THREE.SphereGeometry(500, 60, 40)
geometryPano.scale(-1, 1, 1)

//the 360 panoramic image is loaded as a texture for the reverse sphere
const loader = new THREE.TextureLoader()
let texture = loader.load('/assets/img/panoramic-404.jpeg')
const materialPano = new THREE.MeshBasicMaterial({
    map: texture
})

const spherePano = new THREE.Mesh(geometryPano, materialPano)
scenePano.add(spherePano)
cameraPano.position.set(0, 0, 0.1)

//rotation variables
let lastTime = 0
const rotationSpeed = 0.0001

//frame per frame animation update
const animatePanoramic = time => {
    requestAnimationFrame(animatePanoramic)
    if(window.innerWidth < 1024) return
    //rotation of the sphere
    const delta = time - lastTime
    lastTime = time
    spherePano.rotation.y += rotationSpeed * delta
    rendererPano.render(scenePano, cameraPano)
}
animatePanoramic(0);

//the element must be responsive, so it resizes with the container
window.addEventListener("resize", () => {
    containerWidth = containerPano.offsetWidth
    containerHeight = containerPano.offsetHeight
    rendererPano.setSize(containerWidth, containerHeight)
    cameraPano.aspect = containerWidth/containerHeight
    cameraPano.updateProjectionMatrix();
})