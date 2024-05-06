const typed = new Typed(".text", {
    strings: ["Frontend developer", "Logo designer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


document.querySelector('a[href="#ui-ux-design"]').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('ui-ux-details').style.display = 'block'; 
});

document.querySelector('a[href="#web-design"]').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('web-design-details').style.display = 'block';
});