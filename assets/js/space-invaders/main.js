console.log('-> loading /space-invaders/main.js')

const canvas = document.querySelector('.game-canvas canvas')
canvas.width = document.querySelector('.os-game-container').offsetWidth
canvas.height = document.querySelector('.os-game-container').offsetHeight

const c = canvas.getContext('2d')

const scoreElem = document.getElementById('game-score')

const config = {
    player: {
        scale: .1,
        velocity: 8
    },
    invader:{
        scale: 1,
        valocity: 5  

    },
    game: {
        spawnProb: 1,
        spawnRateMin: 100,
        spawnRateMax: 500,
        gridRowMin: 2,
        gridRowMax: 5,
        gridColumnMin: 5,
        gridColumnMax: 10
    }
}

const keys = {
    left: {
        pressed: false
    },
    right: {
        pressed: false
    },
    space: {
        pressed: false
    }
}

const explosionColors = [
    '#122410',
    '#122410',
    '#1B3719',
    '#1B3719',
    '#539F3C',
    '#4BD745',
    '#EEF88F',
]

const starColors = [
    'white',
    '#434343',
    '#A8A8A8'
]

class Player{
    constructor(){
        const image = new Image()
        image.src = './assets/img/space-invaders/spaceship.png'
        image.onload = () => {
            this.image = image
            this.width = image.width * config.player.scale
            this.height = image.height * config.player.scale
            this.position = {
                x: canvas.width/2 - this.width/2,
                y: canvas.height - this.height - 50
            }
        }
        this.velocity = {
            x: 0,
            y: 0 
        }
        this.rotation = 0
    }
    draw(){
        c.save()
        c.translate(player.position.x + player.width/2, player.position.y + player.height/2)
        c.rotate(this.rotation)
        c.translate(-player.position.x - player.width/2, -player.position.y - player.height/2)
        c.drawImage( 
            this.image, 
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height 
        )
        c.restore()
    }
    update(){
        if(this.image){
            this.draw()
            this.position.x += this.velocity.x
        }
    }
}

class Invader{
    constructor({ position }){
        const image = new Image()
        image.src = './assets/img/space-invaders/invader.png'
        image.onload = () => {
            this.image = image
            this.width = 30 * config.invader.scale
            this.height = 30 * config.invader.scale
            this.position = {
                x: position.x,
                y: position.y
            }
        }
    }
    draw(){
        c.drawImage( 
            this.image, 
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height 
        )
    }
    update({ velocity }){
        if(this.image){
            this.draw()
            this.position.x += velocity.x
            this.position.y += velocity.y
        }
    }
    shoot(InvaderProjectiles){
        InvaderProjectiles.push(new InvaderProjectile({
            position: {
                x: this.position.x + this.width/2,
                y: this.position.y + this.height
            },
            velocity: {
                x: 0,
                y: 5
            }
        }))
    }
}

class Grid{
    constructor(){
        this.position = {
            x: 0,
            y: 0
        }
        this.velocity = {
            x: config.invader.valocity,
            y: 0
        }
        this.invaders = []
        const columns = Math.floor(Math.random() * (config.game.gridColumnMax - config.game.gridColumnMin) + config.game.gridColumnMin)
        const rows = Math.floor(Math.random() * (config.game.gridRowMax - config.game.gridRowMin) + config.game.gridRowMin)
        this.width = columns * 30
        for(let x = 0; x < columns; x++){
            for(let y = 0; y < rows; y++){
                if(Math.random() <= config.game.spawnProb){
                    this.invaders.push(new Invader({
                        position: {
                            x: x*30,
                            y: y*30
                        }
                    }))
                }
            }
        }
    }
    update(){
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.velocity.y = 0
        if(this.position.x + this.width >= canvas.width || this.position.x <= 0){
            this.velocity.x = -this.velocity.x
            this.velocity.y = 30
        }
    }
}

class InvaderProjectile{
    constructor({ position, velocity }){
        this.position = position
        this.velocity = velocity
        this.width = 3
        this.height = 10
    }
    draw(){
        c.fillStyle = '#4BD745'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update(){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}

class Projectile{
    constructor({ position, velocity }){
        this.position = position
        this.velocity = velocity
        this.radius = 3
    }
    draw(){
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2)
        c.fillStyle = '#FFE13B'
        c.fill()
        c.closePath()
    }
    update(){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}

class Particle{
    constructor({ position, velocity, radius, color, fades = true }){
        this.position = position
        this.velocity = velocity
        this.radius = radius
        this.color  = color
        this.opacity = 1
        this.fades = fades
    }
    draw(){ 
        c.save()
        c.globalAlpha = this.opacity
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2)
        c.fillStyle = this.color
        c.fill()
        c.closePath()
        c.restore()
    }
    update(){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if(this.fades) this.opacity -= 0.03
    }
}

let frames = 0
let randomInterval = Math.floor(Math.random() * (config.game.spawnRateMax - config.game.spawnRateMin) + config.game.spawnRateMin)
let score = 0
let gameOver = false

 // create explosion
const createParticles = ({ object }) => {
    for(let i = 0; i < 30; i++){
        particles.push(new Particle({
            position: {
                x: object.position.x + object.width/2,
                y: object.position.y + object.height/2
            },
            velocity:{
                x: (Math.random() - .2)*2,
                y: (Math.random() - .2)*2
            },
            radius: Math.floor(Math.random()*2),
            color: explosionColors[Math.floor(Math.random()*7)]
        }))
    }
}

const animate = () => {
    if(gameOver){
        window.cancelAnimationFrame(animate)
        gsap.to('.game-over', {opacity: 1, display: 'flex'})
    } 
    else window.requestAnimationFrame(animate)
    c.fillStyle = '#040404'
    c.fillRect(0, 0, canvas.width, canvas.height)
    
    player.update()

    particles.forEach((particle, i) => {
        if(particle.position.y - particle.radius >= canvas.height){
            particle.position.x = Math.random()*canvas.width
            particle.position.y = -particle.radius
        }
        if(particle.opacity <= 0){
            // SetTimeout prevent flickering
            setTimeout(() => {
                particles.splice(i, 1)
            }, 0)
        }else particle.update()
    })

    invaderProjectiles.forEach((invaderProjectile, index) => {
        if(invaderProjectile.position.y + invaderProjectile.height >= canvas.height){
            setTimeout(() => {
                invaderProjectiles.splice(index, 1)
            }, 0)
        }else invaderProjectile.update()

        //projectile hits player
        if(invaderProjectile.position.y + invaderProjectile.height >= player.position.y
            && invaderProjectile.position.x + invaderProjectile.width >= player.position.x
            && invaderProjectile.position.x <= player.position.x + player.width){
                setTimeout(() => {
                    invaderProjectiles.splice(index, 1)
                    gameOver = true
                }, 0)
                //createParticles({ object: player })
        }
    })

    projectiles.forEach((projectile, i) => {
        if(projectile.position.y + projectile.radius <= 0){
            setTimeout(() => {
                projectiles.splice(i, 1)
            }, 0)
        }else projectile.update()
    })

    grids.forEach((grid, gridIndex) => {
        grid.update()

        //spawning enemies projectiles
        if(frames % 100 === 0 && grid.invaders.length > 0){
            grid.invaders[Math.floor(Math.random() * grid.invaders.length)].shoot(invaderProjectiles)
        }

        grid.invaders.forEach((invader, i) => {
            invader.update( {velocity: grid.velocity} )
            projectiles.forEach((projectile, j) => {
                //projectile hit enemy
                if(projectile.position.y - projectile.radius <= invader.position.y + invader.height
                    && projectile.position.x + projectile.radius >= invader.position.x 
                    && projectile.position.x - projectile.radius <= invader.position.x + invader.width
                    && projectile.position.y + projectile.radius >= invader.position.y){
                    setTimeout(() => {
                        const invaderFound = grid.invaders.find(invader2 => invader2 === invader)
                        const projectileFound = projectiles.find(projectile2 => projectile2 === projectile)
                        if(invaderFound && projectileFound){
                            score += 100
                            scoreElem.innerHTML = score
                            //create explosion
                            createParticles({ object: invader })
                            //remove invader and projectile
                            grid.invaders.splice(i, 1)
                            projectiles.splice(j, 1)
                            if(grid.invaders.length > 0){
                                const firstInvader = grid.invaders[0]
                                const lastInvader = grid.invaders[grid.invaders.length - 1]
                                grid.width = lastInvader.position.x - firstInvader.position.x + lastInvader.width
                                grid.position.x = firstInvader.position.x
                            }else grids.splice(gridIndex, 1)
                        }
                    }, 0)
                }
            })
        })
    })

    if(keys.left.pressed && player.position.x >= 0) {
        player.velocity.x = -config.player.velocity
        player.rotation = -.15
    } else if(keys.right.pressed && player.position.x + player.width <= canvas.width){
        player.velocity.x = config.player.velocity
        player.rotation = .15
    } else {
        player.velocity.x = 0
        player.rotation = 0
    }

    // spawning enemies
    if(frames % randomInterval === 0){
        grids.push(new Grid())
        randomInterval = Math.floor(Math.random() * (config.game.spawnRateMax - config.game.spawnRateMin) + config.game.spawnRateMin)
        frames = 0
    }
    /*if(score >= config.game.winCondition && grids.length == 0){
        setTimeout(() => {
            gameOver = true
        }, 2000);
    }*/
    frames++
}

addEventListener('keydown', ({ key }) => {
    switch(key){
        case 'a':
        case 'A':
        case 'ArrowLeft':
            keys.left.pressed = true
            break
        case 'd':
        case 'D':
        case 'ArrowRight':
            keys.right.pressed = true
            break
        case 'w':
        case 'W':
            projectiles.push(
                new Projectile({
                    position: {
                        x: player.position.x + player.width/2,
                        y: player.position.y
                    },
                    velocity: {
                        x: 0,
                        y: -10
                    }
                })
            )
            break
    }
}) 

addEventListener('keyup', ({ key }) => {
    switch(key){
        case 'a':
        case 'A':
        case 'ArrowLeft':
            keys.left.pressed = false
            break
        case 'd':
        case 'D':
        case 'ArrowRight':
            keys.right.pressed = false
            break
    }
}) 

let player = new Player()
let projectiles = []
let grids = []
let invaderProjectiles = []
let particles = []

const startGame = () => {
    hideItem()
    if(!window.matchMedia("(any-pointer: fine)").matches){
        gsap.to('.game-errors', {opacity: 1, display: 'flex'})
        return null
    }
    const gameCountdown = document.getElementById('game-countdown')
    gsap.to('.game-overlay', {opacity: 1, display: 'flex'})
    setTimeout(() => gameCountdown.innerHTML = "2", 1000);
    setTimeout(() => gameCountdown.innerHTML = "1", 2000);
    setTimeout(() => gameCountdown.innerHTML = "GO", 3000);
    setTimeout(() => {
        gsap.to('.game-canvas', { opacity: 1 })
        gsap.to('.game-overlay', {opacity: 0, display: 'none'})
        gsap.to('.os-game-header', {opacity: 0, display: 'none'})
        animate()
    }, 4000);   
    for(let i = 0; i < 100; i++){
        particles.push(new Particle({
            position: {
                x: Math.random()*canvas.width,
                y: Math.random()*canvas.height
            },
            velocity:{
                x: 0,
                y: .5
            },
            radius: 1,
            color: starColors[Math.floor(Math.random()*3)],
            fades: false
        }))
    }
}

const hideItem = () => {
    const cssSelector = { opacity: 0, display: 'none' }
    const classNames = [
        '.console', '.commands',
        '.game', '.folders',
        '.buttons', '.info',
        '.style-1', '.style-2',
        '.style-3', '.style-4'
    ]
    for(let i = 0; i < classNames.length; i++) gsap.to(classNames[i], cssSelector)
}

/* set date and time in hh:mm dd:mm:yy format and display in the 
space-invaders' window (top right corner) */
const date = new Date();
const hours = date.getHours().toString().padStart(2, '0')
const minutes = date.getMinutes().toString().padStart(2, '0')
const time = `${hours}:${minutes}`;
const day = date.getDate().toString().padStart(2, '0')
const month = (date.getMonth() + 1).toString().padStart(2, '0')
const year = date.getFullYear().toString().slice(-2)
const dateStr = `${day}/${month}/${year}`
//change the value based on the given info
document.getElementById('info-game-hour').innerHTML = time
document.getElementById('info-game-date').innerHTML = dateStr

//gsap.from('.console p', {duration: 2, text: "", ease: "none"})

/* animation for a fake graph, also calculate the average of elements' 
height; the heights of the various divs are given randomly */
let random, average = 0
const fillGraph = () => {
    for(let i = 0; i < 40; i++){ //the graph item are 40 divs
        random = Math.random()*100 //random number between 0 and 100
        average += random
        random += '%' //height is set in % (height: xx%), so height: xx won't work
        gsap.to('#os-style-3-' + i, {height: random})
    } 
    average /= 40
    //display the average
    document.querySelector('.style-3 span').innerHTML = Math.floor(average) + '%'
}

//same as the fake graph code
const fillLevels = () => {
    for(let i = 0; i < 6; i++){
        random = Math.random()*100 + '%'
        gsap.to('#os-style-1-' + i + ' div', {width: random})
    } 
}

//same as the fake graph code
const updateDownload = () => {
    for(let i = 0; i < 20; i++){
        random = (Math.random()*90 + 10) + '%'
        gsap.to('#os-style-4-' + i, {height: random})
    } 
}

//starts the animation
fillGraph()
fillLevels()
updateDownload()

//set the animations loops
setInterval(fillGraph, 3000)
setInterval(fillLevels, 1500)
setInterval(updateDownload, 1000)