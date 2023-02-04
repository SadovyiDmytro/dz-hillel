const inputEl = document.getElementById('input')
inputEl.addEventListener('focus', function() {
    this.value = '<div>';
});
inputEl.addEventListener('blur', function() {
    this.value = '';
});