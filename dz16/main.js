const inputEl = document.getElementById('input');
const hidenEl = document.querySelector('#over');


inputEl.addEventListener('focus', function() {
    hidenEl.classList.add('show')
});
inputEl.addEventListener('blur', function() {
    hidenEl.classList.remove('show')
});
