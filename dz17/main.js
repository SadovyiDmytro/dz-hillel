const tabMath = function() {
    let body = document.querySelector('body');
    let table = document.createElement('table');
    table.setAttribute('id', 'tab');
    for (let i = 0; i < 10; i += 1) {
        let tr = document.createElement('tr');
        for (let j = 0; j < 10; j += 1) {
            const tabMath = 1 + Math.random() * 100 | 0;
            let td = document.createElement('td');
            td.textContent = tabMath;
            tr.appendChild(td);
        }
    table.appendChild(tr);
    }
body.appendChild(table);
};
addEventListener('load', tabMath);