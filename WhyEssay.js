var essayString = 'MY ESSAY WILL END UP HERE AFTER I FIGURE OUT HOW TO MAKE MAGIC HAPPEN!!!!';
var essayArray = essayString.split("");
var loopTimer;
function essayLooper(){
    
    if(essayArray.length > 0 ){
        document.getElementById('whyTypings').innerHTML += essayArray.shift();
    } else {
        clearTimeout(loopTimer);
    }
    loopTimer = setTimeout('essayLooper()', 85);
} 

essayLooper();