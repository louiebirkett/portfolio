
function splittext(){

    const herotext = new SplitType('.font');
    console.log(herotext);
}

function slidein(){
    gsap.from('.word', {duration: 1, x: -1000, ease:"power2", stagger: 0.1, });
    gsap.from('.locationContainer', {duration: 1, opacity: 0, delay: 1.75});
    gsap.from('.skillsContainer', {duration: 3, y: 1000, delay: 1.75});
    gsap.from('.contactContainer', {duration: 1, x: 150, delay: 2.5});
    gsap.from('button', {duration:1, opacity: 0, delay: 3})
}

function darkmode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}



splittext();
slidein();
