// Initialize GSAP's matchMedia
const mm = gsap.matchMedia();

// Media query for screens min-width: 360px
mm.add("(min-width: 360px)", () => {
    // Animation for desktop and tablet
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".about",
            start: "0% 95%",
            end: "70% 50%",
            scrub: true,
        }
    });

    tl.to("#choco-candy", {
        top: "150%",
        left: "12%",
        rotate: "30deg"
    }, 'chocolate')
    .to("#choclate", {
        top: "130%",
        left: "5%"
    }, 'chocolate')
    .to("#choclate2", {
        width: "21%",
        top: "120%",
        right: "0%",
        rotate: "-15deg"
    }, 'chocolate')
    .to("#walnut", {
        top: "110%",
        rotate: "130deg",
        left: "70%",
        width: "17%"
    }, 'chocolate')
    .to("#almod2", {
        top: "110%",
        rotate: "130deg",
        left: "0%"
    }, 'chocolate');

    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".product",
            start: "0% 95%",
            end: "20% 50%",
            scrub: true,
        }
    });

    tl2.to("#choclate", {
        width: "28%",
        left: "65%",
        top: "230%"
    }, 'can')
    .to("#choclate2", {
        width: "15%",
        left: "23%",
        top: "210%"
    }, 'can')
    .to("#choco-candy", {
        width: "40%",
        top: "218%",
        left: "30%",
        rotate: "0deg"
    }, 'can');
});
