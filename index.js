// Adding Dark theme
const checkbox= document.getElementById('checkbox')
checkbox.addEventListener('change', () =>
{
    //change theme of website
   document.body.classList.toggle('dark')
 })
var player1= prompt('Enter first players name');
var player2=prompt('Enter second players name');
document.querySelector('#name-1').innerHTML=player1;
document.querySelector('#name-2').innerHTML=player2;
function roll() {
    var roll1= Math.floor(Math.random() * 6) + 1;
    var roll2= Math.floor(Math.random() * 6) + 1;
    var randomdice1= 'images/dice-0'+roll1+'.png';
    var randomdice2= 'images/dice-0'+roll2+'.png';
    document.getElementById('die-01').setAttribute("src",randomdice1);
    document.getElementById('die-02').setAttribute("src",randomdice2);
    
    if (roll1>roll2) {
        document.querySelector('h1').innerHTML="<span><img class='roll-image' src='https://cdn.discordapp.com/emojis/815892421011308565.webp?size=4096&quality=lossless'<h1 class='title'>"+player1 +" wins</h2></span>";
    }
    if (roll1<roll2) {
        document.querySelector('h1').innerHTML="<span><img class='roll-image' src='https://cdn.discordapp.com/emojis/935889575765757992.gif?size=4096&quality=lossless'<h1 class='title'>"+player2 +" wins</h2></span>";
    }
    else if (roll1===roll2) {
        document.querySelector('h1').innerHTML="<span><img class='roll-image' src='https://cdn.discordapp.com/emojis/1004970290553565185.webp?size=4096&quality=lossless'<h1 class='title'>Draw!!</h2></span>";
    }
}
