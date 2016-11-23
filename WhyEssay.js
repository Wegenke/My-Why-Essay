var essayString = '\   \I have been asked, on a few separate occasions "Why did you decide you wanted to learn coding?" My initial answer was "Why not?" In all honesty during my time in the Marine Corps, the most mind numbing part was sitting in front of a computer all day. In fact, I don\'t think I could have hated doing that any more if you paid me to. My favorite part was learning why we did things a certain way and seeing what I could do to make them better, more efficient. But mainly I LOVE PROBLEM SOLVING, the more "out there" the problem the better. I saw this as a chance to learn to develop code to make things easier not only for me, but hopefully one day for everyone. As you read this I have a very labor intense, heavy object lifting, boring LOWE\'s lumber department job. I enjoy the people I work with, as well as the customers I help every day. Yes, even the less enjoyable customers. But there is nothing challenging about it, it is seriously boring. This career path I am going down, at LOWE\'S is not a worth while path to take. Taking into consideration, the reason for my military discharge being a shoulder surgery that has left me in pain. Not only is the pain a big "Pain in the butt", pun intended, but I couldn\'t imagine destroying my shoulder working there. Then end up watching my boys grow up and not being able to throw a ball with them. Not being able teach them how to shoot a basketball or swing a golf club, and who knows maybe teach them javascript one day, whould kill me. Other than the selfish reasons previously stated, I saw this as an opportunity find and develop a career that would allow me to be home more often. The more family time the better. Over the course of 8 years in the military,  I probably spent 65% of it away from my family. Attributing to this loss of time were deployments, field ops, duty and who knows what other made up things I had to endure. Of all the reasons I have mentioned this one is the most important to me. I always have and always will do everything I can to put my family first and spend as much time with them as I can.  No matter what path in life I decide, or am forced, to take, FAMILY will always come before all else.' ;
var essayArray = essayString.split("");
var loopTimer;
function essayLooper(){
    loopTimer = setTimeout('essayLooper()', 25);
    if(essayArray.length > 0 ){
        document.getElementById('whyTypings').innerHTML += essayArray.shift();
    } else {
        clearTimeout(loopTimer);
    }

}

essayLooper();
