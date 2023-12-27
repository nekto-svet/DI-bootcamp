
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.

let id1, id2, id3, id4;

function myMove(){
    const animate = document.getElementById('animate');
    let pos_left = 0;
    let pos_top = 0;


    leftToRight()

    function leftToRight(){
        id1 = setInterval(
            function(){
            if (pos_left < 350) {
                animate.style.left = pos_left+'px';
                pos_left+=0.6
            } else {
                clearInterval(id1);
                rightToLeft()
            }
        }, 1);
    }

    function rightToLeft(){
        id2 = setInterval(
            function(){
            if (pos_left > 0) {
                animate.style.left = pos_left+'px';
                pos_left-=0.7
            } else {
                leftToRight()
                clearInterval(id2);
            }
        }, 1);
    }


    topToBottom()

    function topToBottom(){
        id3 = setInterval(
            function(){
            if (pos_top < 350) {
                animate.style.top = pos_top+'px';
                pos_top+=0.4
            } else {
                clearInterval(id3);
                bottomToTop()
            }
        }, 1);
    }

    function bottomToTop(){
        id4 = setInterval(
            function(){
            if (pos_top > 0) {
                animate.style.top = pos_top+'px';
                pos_top-=0.3
            } else {
                topToBottom()
                clearInterval(id4);
            }
        }, 1);
    }

}

function myStop(){
    clearInterval(id1);
    clearInterval(id2);
    clearInterval(id3);
    clearInterval(id4);
}




