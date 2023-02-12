const pics = [
    'url("Among_Us_Eye.png")',
    'url("EGGHEAD.jpg")',
    'url("Extreme_Strong_Bear.png")',
    'url("Laughed_To_Hard.png")',
    'url("Mammott_Icon.png")',
    'url("Minion_Mammott_Icon.png")',
    'url("Monkey.gif")',
    'url("MRBEAST.jpg")',
    'url("Peter_Griffin.png")',
    'url("Phlox.png")',
    'url("Sans.png")',
    'url("The_Rock.jpg")',


];

const pic = document.querySelector('section');


function showImage(){
    var a = Math.floor(Math.random()*pics.length);
    console.log(a);
    var img = pics[a];
    console.log(img);
    pic.style.backgroundImage = img;
}

setInterval(showImage,1000);
