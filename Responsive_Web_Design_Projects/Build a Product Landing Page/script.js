const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));
console.log(triggers)

// console.log(triggers)
window.addEventListener('click', (ev) => {
    const elm = ev.target;
    if (triggers.includes(elm)) {
        const selector = elm.getAttribute('data-target');

        collapse(elm, selector, 'toggle');
    }
}, false);


const fnmap = {
    'toggle': 'toggle',
    'show': 'add',
    'hide': 'remove'
};
const collapse = (selectee, selector, cmd) => {
    if (selectee.className == "far fa-minus-square") {
        selectee.className = "far fa-plus-square"
    } else if (selectee.className == "far fa-plus-square") {
        selectee.className = "far fa-minus-square"
    }
    const targets = Array.from(document.querySelectorAll(selector));
    targets.forEach(target => {
        target.classList[fnmap[cmd]]('show');
    });
}