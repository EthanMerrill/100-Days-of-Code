// function addListeners() {
//     expandElement = document.getElementById("expand-btn")
//     expandElement.addEventListener("click", descriptionShow(expandElement))
// }

// function descriptionShow(expandElement) {
//     console.log((expandElement.parentElement))
//     container_div = expandElement.parentElement
//     console.log(container_div.getElementsByClassName("hidden-description"))
//     expandElement.parentElement.getElementsByClassName("hidden-description")[0].style.display = "show"
// }
//https://medium.com/dailyjs/mimicking-bootstraps-collapse-with-vanilla-javascript-b3bb389040e7

// Handler that uses various data-* attributes to trigger
// specific actions, mimicing bootstraps attributes
// Handler that uses various data-* attributes to trigger
// specific actions, mimicing bootstraps attributes


const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));
console.log(triggers)

// console.log(triggers)
window.addEventListener('click', (ev) => {
    const elm = ev.target;
    if (triggers.includes(elm)) {
        const selector = elm.getAttribute('data-target');
        console.log(selector)
        collapse(elm, selector, 'toggle');
    }
}, false);


const fnmap = {
    'toggle': 'toggle',
    'show': 'add',
    'hide': 'remove'
};
const collapse = (selectee, selector, cmd) => {
    if (selectee.className == "far fa-minus-square fa-2x") {
        selectee.className = "far fa-plus-square fa-2x"
    } else if (selectee.className == "far fa-plus-square fa-2x") {
        selectee.className = "far fa-minus-square fa-2x"
    }
    const targets = Array.from(document.querySelectorAll(selector));
    targets.forEach(target => {
        target.classList[fnmap[cmd]]('show');
    });
}