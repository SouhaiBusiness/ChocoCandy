var tl = gsap.timeline({scrollTrigger:{
    trigger: ".about",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#choco-candy",{
    top: "120%",
    left: "12%",
    rotate: "30deg"
}, 'choclate')
tl.to("#choclate",{
    top:"160%",
    left: "23%"
}, 'choclate')
tl.to("#choclate2",{
    width: "21%",
    top:"160%",
    right: "10%",
    rotate: "-15deg"
}, 'choclate')
tl.to("#walnut",{
    top:"110%",
    rotate: "130deg",
    left: "70%",
    width:"17%"
}, 'choclate')
tl.to("#almod2",{
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'choclate')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".product",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.to("#choclate",{
    width:"28%",
    left: "42%",
    top: "214%"
}, 'can')
tl2.to("#choclate2",{
    width:"15%",
    left: "23%",
    top: "275%"
}, 'can')
tl2.to("#choco-candy",{
    width:"30%",
    top: "247%",
    left: "35%",
    rotate: "0deg"
}, 'can')





  // nav bar responsiveness
        function toggleMenu() {
        const nav = document.querySelector('.menu-nav');
        nav.classList.toggle('active');
        document.querySelector('.menu-icon').style.display = nav.classList.contains('active') ? 'none' : 'block';
        document.querySelector('.close-icon').style.display = nav.classList.contains('active') ? 'block' : 'none';
    }
