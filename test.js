const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
const triggerHeight = hero.offsetHeight * 0.7; // when 70% scrolled past
if (window.scrollY > triggerHeight) {
    hero.classList.add('panel-mode');
} else {
    hero.classList.remove('panel-mode');
}
});

