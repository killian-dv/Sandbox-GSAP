const img1 = document.querySelector('.container-images img:nth-child(1)')
const btnCat = document.querySelector('.cat-fade')
// gsap.to(img1, {x: 100, duration: 2})
gsap.to('.container-images img', {y: 300, scale: 1.2, duration: 2, ease: 'power1', stagger: function(index){
    return index * 0.2
}
})

// gsap.from(img1, {x: 100, duration: 2})

// btnCat.addEventListener('click', () => {
//     // gsap.from(img1, {opacity: 0, duration: 3})
//     // gsap.fromTo(img1, {opacity: 0}, {opacity: 1, duration: 3})
//     // gsap.to(img1, {opacity: 0, scale: 2, duration: 3, delay: 2})
// })

gsap.to('.container-btns button', {duration: 0.2, x: "random(-100, 100)", stagger: 0.2})