var essayString = '\   I have been asked, on a few separate occasions "Why did you decide you wanted to learn coding?" Great question don\'t you think? In all honesty during my time in the United States Marine Corps, personally my least favorite part was sitting in front of a computer all day. In fact, I don\'t think I could have hated doing that any more if you paid me to. My favorite part was learning why we did things a certain way and seeing what I could do to make them more efficient. I LOVE PROBLEM SOLVING, the more "out there" the problem the better. I saw this as a chance to learn to develop code to make things easier not only for me, but hopefully one day for everyone. As you read this I have a very labor intense, heavy object lifting, Lowe\'s lumber department job. I enjoy the people I work with, as well as the customers I help every day. Yes, even the less enjoyable customers. This career path I going down is not a good one, considering the reason for my military discharge was a bad shoulder surgery that has left me in daily pain. Not only is the pain a big, "Pain in the butt", pun intended, but I couldn\'t imagine watching my boys grow up and not being able to throw a ball with them. Not being able teach them how to shoot a basketball or swing a golf club, would kill me.  Other than my own selfish reasons stated above, I saw this as an opportunity find and develop a career that would allow me to be home more often. The more home time the better. Over the course of 8 years in the military,  I probably spent the majority of it away from my family. Attributing deployments and field ops and who knows what other things I had to do, to the cause. Of all the reasons I have mentioned this one is the most important to me. I always have and always will do everything I can to put my family first and spend as much time with them as I can.  No matter what path in life I decide, or am forced, to take, FAMILY will always come before all else.' ;
var essayArray = essayString.split("");
var loopTimer;
function essayLooper(){
    loopTimer = setTimeout('essayLooper()', 50);
    if(essayArray.length > 0 ){
        document.getElementById('whyTypings').innerHTML += essayArray.shift();
    } else {
        clearTimeout(loopTimer);
    }
    
} 

essayLooper();