const img1 = document.querySelector('.container-images img:nth-child(1)')
const img2 = document.querySelector('.container-images img:nth-child(2)')
const img3 = document.querySelector('.container-images img:nth-child(3)')
const title = document.querySelector('.title')
const txt = document.querySelector('.txt')

// Instancier une timeline
const TL = gsap.timeline({
    defaults: {
        duration: 1,
        ease: "elastic"
    },
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.5,
    // onComplete: () => {
    //     console.log('complete')
    // },
})

TL
.to(img1, {autoAlpha: 1, y: 0})
.to(img2, {autoAlpha: 1, y: 0}, '-=0.75')
.to(img3, {autoAlpha: 1, y: 0}, '-=0.75')
// .addLabel('milieu')
.to(title, {autoAlpha: 1, y: 0}, '-=0.75')
.to(txt, {autoAlpha: 1, y: 0}, '-=0.75')

// TL.play('milieu')