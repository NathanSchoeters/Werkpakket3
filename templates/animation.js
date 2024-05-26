gsap.from('.about-info-image', { duration: 1.2, y:'-100vh' , delay: 0, easer: 'power2.in'})

gsap.from('.intro-header', { duration: 1.2, x:'-100vw' , delay: 0, easer: 'power2.in'})
gsap.from('.intro-text', { duration: 1.2, x:'-100vw' , delay: 0, easer: 'power2.in'})


// gsap.from('.full-logo', {
//     scrollTrigger: '.full-logo',  duration: 1.3, x: '-100vw' , stagger: 0.25, ease:"power1.out"
// });

gsap.from('.blokContainer', {
    scrollTrigger: '.full-font', duration: 1, y: '30vh', opacity: 0, ease: "power1.inOut"
})

gsap.from('.card', {
    scrollTrigger: '.s', duration: 1, y: "-100", opacity:0, stagger: 0.25, ease: "power1.inOut"
})

// gsap.from('.card', {
//     scrollTrigger: '.img', duration: 1, y: "random(-200,200)", opacity:0, stagger: 0.25, ease: "power1.inOut"
// })