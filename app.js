const img1 = document.querySelector('.container-images img:nth-child(1)')
const btnCat = document.querySelector('.cat-fade')
// gsap.to(img1, {x: 100, duration: 2})
gsap.to('.container-images img:nth-child(2)', {
    y: 100,
    repeat: 1,
    onComplete: () => console.log('terminée'),
    onStart: () => console.log('démarrée'),
    onUpdate: () => console.log('en cours'),
    onRepeat: () => console.log('répétée'),
})

// gsap.from(img1, {x: 100, duration: 2})

// btnCat.addEventListener('click', () => {
//     // gsap.from(img1, {opacity: 0, duration: 3})
//     // gsap.fromTo(img1, {opacity: 0}, {opacity: 1, duration: 3})
//     // gsap.to(img1, {opacity: 0, scale: 2, duration: 3, delay: 2})
// })

gsap.to('.container-btns button', {duration: 0.2, x: "random(-100, 100)", stagger: 0.2})

// Enregistrer un tween
// gsap.registerEffect({
//     name: "imgCrazy",
//     effect: (targets, config) => {
//         return gsap.to(targets, {duration: config.duration, y: 200, scale: 1.4, rotation: 360})
//     },
//     defaults: {duration: 2}
// })

// gsap.effects.imgCrazy(img1, {duration: 1})

// gsap.set('.container-images img', {opacity: 0})

const anim = gsap.to(img1, {y: 100, yoyo: true, repeat: 1})
anim.duration(5)
anim.pause()
anim.seek(2.5)
anim.resume()