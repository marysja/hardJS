document.addEventListener('scroll', onScroll);

function onScroll(event) {
const curPos = window.scrollY;
const divs = document.querySelectorAll('#wrapper>div');
const links = document.querySelectorAll('#menu-center a');



divs.forEach((el) => {
 if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
        links.forEach((a) => {
            a.classList.remove('active');
            if (el.getAttribute('id') === a.getAttribute('href').substring(1)){
                a.classList.add('active');
            }
        })
    }
});

}
