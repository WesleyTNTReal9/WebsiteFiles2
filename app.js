const pics = [
    'url("Monkey.gif")',
    'url("MRBEAST.jpg")',
    

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
