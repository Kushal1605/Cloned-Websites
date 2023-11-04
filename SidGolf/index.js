// Force page to scroll to the top when the page reloads.
// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
// }
const cursor = document.getElementById('cursor')
const cursorBlur = document.getElementById('cursor-blur')

// Mouse Follower
window.addEventListener('mousemove', (details) => {
    cursor.style.left = details.x + 'px'
    cursor.style.top = details.y + 'px'
    cursorBlur.style.left = details.x - 200+ 'px'
    cursorBlur.style.top = details.y - 200 + 'px'
})

const nav = document.getElementById('nav')
const navElements = document.querySelectorAll('#nav h4')
navElements.forEach( (element) => {
    element.addEventListener('mouseenter', () => {
        if(nav.style.backgroundColor != 'rgb(0, 0, 0)') {
        cursor.style.backgroundColor = 'transparent'
        cursor.style.border = '0.5px solid white'
        cursor.style.scale = 3
        element.style.color = '#000'
        } else {
            element.style.color = '#c8ff00'
        }
    })

    element.addEventListener('mouseleave', () => {
        cursor.style.backgroundColor = '#c8ff00'
        cursor.style.border = 'none'
        cursor.style.scale = 1
        element.style.color = '#fff'
    })
})

const navImg = document.querySelector('#nav img')
navImg.addEventListener('mouseenter', () => {
    cursor.style.backgroundColor = 'transparent'
    cursor.style.border = '0.5px solid white'
    cursor.style.scale = 3
})

navImg.addEventListener('mouseleave', () => {
    cursor.style.backgroundColor = '#c8ff00'
    cursor.style.border = 'none'
    cursor.style.scale = 1
})

// const body = document.getElementsByTagName('body')[0]
// const testimonialText = document.getElementById('testimonial-text')
// let prevX = 0, prevY = 0
// body.addEventListener('mousemove', (details) => {
//     let left = right = top = bottom = false

//     if(prevX < details.x) right = true
//     else left = true
//     if(prevY < details.y) bottom = true
//     else top = true


// })

// GSAP Animations

gsap.to('#nav', {
    backgroundColor: '#000',
    duration: 1,
    height: '80px',
    scrollTrigger: {
        trigger: '#nav',
        scroller: 'body',
        start: 'top -10%',
        end: 'top -11%',
        scrub: 1
    }
})

gsap.to('#main', {
    backgroundColor: '#000',
    scrollTrigger: {
        trigger: '#main',
        scroller: 'body',
        scrub: 6,
        start: 'top -40%',
        end: 'top -20%',
    }
})

gsap.from('#about-us img, #about-us-in', {
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        scroller: 'body',
        trigger: '#about-us',
        start: 'top 60%',
        end: 'top 50%',
        scrub: 2
    }
}) 

gsap.to('#upper-colon', {
    x: 60,
    y: 40,
    duration: 1,
    scrollTrigger: {
        scroller: 'body',
        trigger: '#upper-colon',
        start: 'top 100%',
        end: 'top 100%',
        scrub: 2,
    }
}) 

gsap.to('#lower-colon', {
    x: -60,
    y: -70,
    duration: 1,
    scrollTrigger: {
        scroller: 'body',
        trigger: '#upper-colon',
        start: 'top 100%',
        end: 'top 100%',
        scrub: 2,
    }
})

gsap.to('#page4 h2', {
    y: -55,
    duration: 1.5,
    scrollTrigger: {
        scroller: 'body',
        trigger: '#page4 h2',
        start: 'top 100%',
        end: 'top 100%',
        scrub: 3
    }
})


