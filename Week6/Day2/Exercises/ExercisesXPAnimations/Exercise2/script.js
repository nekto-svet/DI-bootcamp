// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.

const btn = document.querySelector('button');

function myMove(){
    const animate = document.getElementById('animate');
    let pos_left = 0;
    let pos_top = 0;
    let pos_right = 350;

    let id1 = setInterval(function(){
        animate.style.left = pos_left+'px';
        if (pos_left !== 350) {
            animate.style.left = pos_left+'px';
            pos_left++
        } else {
            clearInterval(id1);
            let id3 = setInterval(function(){
                if (pos_left == 350 && pos_right !== 0) {
                    animate.style.left = pos_right+'px';
                    pos_right--
                } else {
                    clearInterval(id3);
                }
            }, 1);
        }
    }, 1);

    let id2 = setInterval(function(){
        if (pos_top < 350) {
            animate.style.top = pos_top+'px';
            pos_top+=0.5
        } else {
            clearInterval(id2);
        }
    }, 1);
}



