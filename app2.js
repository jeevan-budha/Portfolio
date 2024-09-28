

/*============================Toogle icon navaber=========*/
let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");


menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
})


/*============================scroll section active link n=========*/

let section=document.querySelector('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height= sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>= offset && top <offset+height){
            navLinks.forEach.apply(link=>{
                navLinks.classList.remove('active');
                document.querySelector('header nav a[href*='+id +']').classList.add('active');

            })
        }
    })

    // Sticky navber

    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

// ScrollReveal({ reset: true });

// ScrollReveal({
//     distance:'80px',
//     duration:2000,
//     delay:200,
// });

// scrollReveal().reveal('.home-content, heading', {origin:'top'});

// scrollReveal().reveal('.home-img, .services-container .portfolio-box .contact form', {origin:'buttom'});

// scrollReveal().reveal('.home-content h1, .about-img', {origin:'left'});

// scrollReveal().reveal('.home-content p, .about-content', {origin:'right'});

// ScrollReveal().reveal('.headline');
// ScrollReveal().reveal('.tagline', { delay: 500 });
// ScrollReveal().reveal('.punchline', { delay: 2000 });

//typed js


// const typed=new Typed('.hi',{
//     strings:['Data Science','Data Analysis','Youruber'],
//     typspeed:70,
//     backspeed:70,
//     backDelay:1000,
//     loop:true,

// });

