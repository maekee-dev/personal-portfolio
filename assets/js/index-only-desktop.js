console.log('-> loading /index-only-desktop.min.js')

/* Below the ThreeJS code for the panoramic "window" in the hero section:
auto rotation and manual orientation */

import * as THREE from './lib/three-js.min.js'
import { OrbitControls } from './lib/orbit-controls.min.js'

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
let texture = loader.load('/assets/img/index/panoramic.jpeg')
const materialPano = new THREE.MeshBasicMaterial({
    map: texture
})

const spherePano = new THREE.Mesh(geometryPano, materialPano)
scenePano.add(spherePano)
cameraPano.position.set(0, 0, 0.1)

/* the controls (allow users to move the sphere) are disabled on mobile 
because it's problematic (the user get blocked in the image while scrolling);
could use a mobile version of Orbit Control but I prefer this way */
//if the device is touch, disable controls
const isTouch = window.matchMedia("(any-pointer: fine)").matches
let controls
if(isTouch){
    controls = new OrbitControls(cameraPano, rendererPano.domElement)
    controls.enableZoom = false
    controls.enablePan = false
    controls.rotateSpeed = 0.4
}

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
    //if it's touch controls are disabled
    if(isTouch) controls.update()
    //render the scene
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



/* Here starts the ThreeJS "About Me" code. The animation consists in a sphere rotating 
inside a two differenttly sized toruses that are also rotating. The rotation,
set on the same speed, across different axis gave the effect shown in the page */

/* declaration of 3 divs; if one is clicked change the sized of the elements
as shown in the transform functions; in this case is not possible to use
the onclick approach because this file is imported in index.php as a module
so I use the addEventListener */
const infoSelector1 = document.getElementById('about-me-item-1')
const infoSelector2 = document.getElementById('about-me-item-2')
const infoSelector3 = document.getElementById('about-me-item-3')
infoSelector1.addEventListener("click", () => transform1())
infoSelector2.addEventListener("click", () => transform2())
infoSelector3.addEventListener("click", () => transform3())

/* the sphere grows, the toruses shrink; the first torus is now
smaller than the sphere */
const transform1 = () => {
    gsap.to(sphere.scale, 1, { x: 1.2, y: 1.2, z: 1.2 })
    gsap.to(torus1.scale, 1, { x: .5, y: .5, z: .5 })
    gsap.to(torus2.scale, 1, { x: .9, y: .9, z: .9 })
    sceneConfig.velocity = 0.002 //reduce the elements' speed
}

/* the default system, sphere < torus1 < torus2 */
const transform2 = () => {
    gsap.to(sphere.scale, 1, { x: 1, y: 1, z: 1 })
    gsap.to(torus1.scale, 1, { x: 1, y: 1, z: 1 })
    gsap.to(torus2.scale, 1, { x: 1, y: 1, z: 1 })
    sceneConfig.velocity = 0.004 //default velocity
}

/* the sphere grows, the toruses shrink; the two toruses are now
smaller than the sphere */
const transform3 = () => {
    gsap.to(sphere.scale, 1, { x: 1.4, y: 1.4, z: 1.4 })
    gsap.to(torus1.scale, 1, { x: .5, y: .7, z: .5 })
    gsap.to(torus2.scale, 1, { x: .5, y: .5, z: .5 })
    sceneConfig.velocity = 0.006
}

//the scene container element used by the renderer
const container = document.getElementById('particles-container')

//objact containing the geometry and mash configuration info, also velocity
let sceneConfig = {
    sphere: {
        background: 0x0A0A0A,
        color: 0x202020,
        radius: 1,
        widthSegments: 64,
        heightSegments: 64
    },
    torus1: {
        background: 0x0A0A0A,
        color: 0x202020,
        radius: 1.3,
        tubeRadius: .1,
        radialSegments: 32,
        tubolarSegments: 100
    },
    torus2: {
        background: 0x0A0A0A,
        color: 0x202020,
        radius: 1.7,
        tubeRadius: .1,
        radialSegments: 32,
        tubolarSegments: 100
    },
    velocity: 0.004
}

//declare the scene
const scene = new THREE.Scene()

//the following code generates the solid sphere based on sceneConfig's info
const sphereGeometry = new THREE.SphereGeometry(
    sceneConfig.sphere.radius, 
    sceneConfig.sphere.widthSegments, 
    sceneConfig.sphere.heightSegments
)
const sphereMaterial = new THREE.MeshBasicMaterial({ color: sceneConfig.sphere.background })
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial) //set the sphere mesh
//draw the construction lines on the sphere surface
const sphereEdges = new THREE.EdgesGeometry(sphereGeometry)
const sphereLineMaterial = new THREE.LineBasicMaterial({ color: sceneConfig.sphere.color })
const sphereLines = new THREE.LineSegments(sphereEdges, sphereLineMaterial)
sphere.add(sphereLines)
scene.add(sphere) //add the sphere to the scene


//in a similar way the toruses are constructed
const torusGeometry1 = new THREE.TorusGeometry(
    sceneConfig.torus1.radius, 
    sceneConfig.torus1.tubeRadius, 
    sceneConfig.torus1.radialSegments, 
    sceneConfig.torus1.tubolarSegments
)
const torusMaterial1 = new THREE.MeshBasicMaterial({ color: sceneConfig.torus1.background })
const torus1 = new THREE.Mesh(torusGeometry1, torusMaterial1)
const torusEdges1 = new THREE.EdgesGeometry(torusGeometry1)
const torusLineMaterial1 = new THREE.LineBasicMaterial({ color: sceneConfig.torus1.color })
const torusLines1 = new THREE.LineSegments(torusEdges1, torusLineMaterial1)
torus1.add(torusLines1)
scene.add(torus1)

const torusGeometry2 = new THREE.TorusGeometry(
    sceneConfig.torus2.radius, 
    sceneConfig.torus2.tubeRadius, 
    sceneConfig.torus2.radialSegments, 
    sceneConfig.torus2.tubolarSegments
)
const torusMaterial2 = new THREE.MeshBasicMaterial({ color: sceneConfig.torus2.background })
const torus2 = new THREE.Mesh(torusGeometry2, torusMaterial2)
const torusEdges2 = new THREE.EdgesGeometry(torusGeometry2)
const torusLineMaterial2 = new THREE.LineBasicMaterial({ color: sceneConfig.torus2.color })
const torusLines2 = new THREE.LineSegments(torusEdges2, torusLineMaterial2)
torus2.add(torusLines2)
scene.add(torus2)

//set the scene camera
let camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
camera.position.z = 3;

//set the scene renderer, using the declared container
let renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(container.offsetWidth, container.offsetWidth)
renderer.setClearColor(0x000000, 0)
container.appendChild(renderer.domElement)

//the scene dimension must be responsive
window.addEventListener("resize", () => renderer.setSize(container.offsetWidth, container.offsetWidth))

//frame per frame animation function
const animate = () => {
    requestAnimationFrame(animate)
    if(window.innerWidth < 1024) return
    //the three objects are rotating
    sphere.rotation.y -= sceneConfig.velocity
    sphere.rotation.z += sceneConfig.velocity
    torus1.rotation.y += sceneConfig.velocity
    torus1.rotation.x += sceneConfig.velocity
    torus2.rotation.z += sceneConfig.velocity
    torus2.rotation.x += sceneConfig.velocity
    renderer.render(scene, camera)
}

animate()

