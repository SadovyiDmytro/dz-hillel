const firstBtnLink = document.querySelector('.one-btn');
const secBtnLink = document.querySelector('.two-btn');


let majorLink
firstBtnLink.addEventListener('click', () => {
 
    if (firstBtnLink.dataset.link.includes('https://') === false || firstBtnLink.dataset.link.includes('https://') === false) {
        alert('ERROR: Need to type a protocol')
        majorLinkInt = prompt("Type: http or https protocol you need?");
        majorLink = firstBtnLink.dataset.link.constructor(majorLinkInt + '://' + firstBtnLink.dataset.link);
        if (majorLink.includes('https://') === true || majorLink.includes('http://') === true){
        window.location.href = majorLink
        }
        else {
            alert('ERROR: Not available protocol')
        }
    }
    else {
        window.location.href = firstBtnLink.dataset.link;
    }
});

let secondaryLink
secBtnLink.addEventListener('click', () => { 
 
    if (secBtnLink.dataset.link.includes('https://') === true) {
        console.log('Clearly go to:' + secBtnLink.dataset.link + '?')
        window.location.href = secBtnLink.dataset.link
    }
    else {
        alert('ERROR: Need to type a protocol')
        secondLinkInt = prompt("Type: http or https protocol you need?");
        secondaryLink = firstBtnLink.dataset.link.constructor(secondLinkInt + '://' + firstBtnLink.dataset.link);
        if (secondaryLink.includes('https://') === true || secondaryLink.includes('http://') === true){
        window.location.href = secondaryLink;
        }
        else {
            alert('ERROR: Not available protocol')
        }
    }
});