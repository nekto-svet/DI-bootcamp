const child = document.getElementById('child');

let pos = 0;
let id = setInterval(function(){
    if (pos != 401) {
        child.style.left = pos+'px';
        child.style.top = pos+'px';
    pos++
    } else {
        clearInterval(id)
    }
}, 1)

