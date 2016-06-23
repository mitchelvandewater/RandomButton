/**
 * Created by mitchelvandewater on 31-05-16.
 */
(function(window){//Calling the windowfunction

    function defineButton(){ //Function to define button

        var randomBtn = {};
        randomBtn.condition = function(condition){// Checks for conditions and goes through setting them

            if(condition.transition == true){
                if(condition.interval){
                    setInterval(randomBtn.transition, condition.interval);
                }else{
                    //DEFAULT
                    setInterval(randomBtn.transition, 3000);

                }
            }else{console.log("Wrong use of parameter : transition, or set to false.");
            }

            if(condition.color == 'grayscale'){
                if(condition.interval){
                    setInterval(randomBtn.grayscale, condition.interval);
                }else{
                    //DEFAULT
                    setInterval(randomBtn.grayscale, 3000);

                }
            }
            if(condition.color == 'color'){
                if(condition.interval){
                    setInterval(randomBtn.color, condition.interval);

                }
                else{
                    setInterval(randomBtn.color, 3000);
                }
            }
            else{console.log("Wrong use of parameter : color, or set to false.");
                document.getElementById("style").style.background = "#cccccc";}
        }





        randomBtn.color = function () {
            document.getElementById("style").style.background = getRandomColor();
        };

        randomBtn.grayscale = function () {
            document.getElementById("style").style.background = getRandomGrayscale();
        };

        randomBtn.transition = function (){
            document.getElementById("style").style.transition = getRandomTransition();
        };

        console.log(randomBtn);
        return randomBtn;

    }

    if(typeof(randomBtn) === 'undefined') {
        window.randomBtn = defineButton();
        console.log("test");

    }


    //function Psycho(element){

    //}


//functions for random

    function getRandomGrayscale() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
            letter1 = letters[Math.floor(Math.random() * 16)];
            letter2 = letters[Math.floor(Math.random() * 16)];
            color += letter1+letter2+letter1+letter2+letter1+letter2;
        return color;
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        var i;
        for (i=0; i<6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        console.log(color);
        return color;
    }

    function getRandomTransition() {

        var number = Math.floor(Math.random() * 100);
        var transition = "all " + 0.5+number/100 + "s";
        return transition;
    }



})(window);
