const slider = document.querySelector('.fath');
const leftBtn = document.querySelector('#leftBtn');
const rightBtn = document.querySelector('#rightBtn');


rightBtn.addEventListener('click', (e) => {
    slider.scrollLeft += window.innerWidth * .4;
})

leftBtn.addEventListener('click', (e) => {
    slider.scrollLeft -= window.innerWidth * .4;
})




window.addEventListener('scroll', function () {
    const navBar = document.querySelector(".navvigation");
    if (window.scrollY > 10) {
        navBar.classList.add("navvigation-scroll");
    } else {
        navBar.classList.remove("navvigation-scroll");
    }
});
const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});
const menu = document.querySelector('.hamborger');
const nav = document.querySelector('.nav');
const closee = document.querySelector('.fa-xmark');


menu.addEventListener('click', function () {
    nav.classList.toggle('hidden');
    menu.classList.toggle('hidden');

});
closee.addEventListener('click', function () {
    nav.classList.toggle('hidden');
    menu.classList.toggle('hidden');
});


