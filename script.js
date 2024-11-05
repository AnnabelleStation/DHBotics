
document.addEventListener("scroll", function() {
    const fadeElements = document.querySelectorAll(".scroll-fade");

    fadeElements.forEach(function(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < 400) {
            element.style.opacity = 1;
         } else {

         const viewportProximity = Math.min(Math.abs(rect.top - windowHeight/2), Math.abs(rect.bottom - windowHeight / 2));
         const outofRange = windowHeight * 0.2;
         const opacity = Math.max(0, 1 - (viewportProximity / outofRange));

         element.style.opacity = opacity;
         }
    });


    
});
document.addEventListener("scroll", function() {
    const fadeElements = document.querySelectorAll(".scroll-fade-down");

    fadeElements.forEach(function(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

       

        if (rect.top > 80) {
            element.style.opacity = 1;
         } else {

         const viewportProximity = Math.min(Math.abs(rect.top - windowHeight/2), Math.abs(rect.bottom - windowHeight / 2));
         const outofRange = windowHeight * .3;
         const opacity = Math.max(0, 1 - (viewportProximity / outofRange));

         element.style.opacity = opacity;
         }
    });
});



document.addEventListener("scroll", function() {
    const centerpoint = window.innerHeight / 2;
    
    const gearHeight = document.querySelector(".gear").getBoundingClientRect();
    const gearoffset = gearHeight.top - centerpoint;
    let multiply_rot = window.innerWidth / 2000;


    const gear_rot = gearoffset * Math.min(multiply_rot, .2);

    document.querySelector(".gearL").style.transform = "rotate(" + gear_rot + "deg)";
    document.querySelector(".gearR").style.transform = "rotate(" + (-gear_rot) + "deg)";
});


    
document.dispatchEvent(new Event("scroll"));