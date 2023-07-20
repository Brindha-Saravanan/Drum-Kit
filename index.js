//setting event listner for all buttons

// for (var i=0;i<document.querySelectorAll('.drum').length;i++)
//     document.querySelectorAll(".drum")[i].addEventListener("click",
//     function ()
// {
//     alert("Ï got clicked");
// });



for(var i=0;i<document.querySelectorAll('.drum').length;i++)
{
    document.querySelectorAll('.drum')[i].addEventListener("click",function(){
       makeSound(this.innerHTML);
       this.style.color='white';
    })
}

addEventListener("keydown",function(e){
    
    makeSound(e.key);
    buttonAnimation(e.key);
})

function makeSound(key){
    switch(key)
    {
        case 'w':
                var ad = new Audio("sounds/crash.mp3");
                ad.play();
                break;
            case 'a':
                var ad = new Audio("sounds/kick-bass.mp3");
                ad.play();
                break;
            case 's':
                var ad = new Audio("sounds/snare.mp3");
                ad.play();
                break;
            case 'd':
                var ad = new Audio("sounds/tom-1.mp3");
                ad.play();
                break;
            case 'j':
                var ad = new Audio("sounds/tom-2.mp3");
                 ad.play();
                break;
            case 'k':
                var ad = new Audio("sounds/tom-3.mp3");
                ad.play();
                break;
            case 'l':
                var ad = new Audio("sounds/tom-4.mp3");
                ad.play();
                break;
            default:console.log("Default case");
    }
}

function buttonAnimation(key1){
    console.log(key1);
    document.querySelector("."+key1).classList.add('pressed');
    
    setTimeout(function(){
        document.querySelector("."+key1).classList.remove('pressed');
    },100);

}

// document.querySelector('.w').addEventListener("click",function(){
//     var ad = new Audio("sounds/crash.mp3");
//     ad.play();

//     console.log(this.innerHTML);



// });
// document.querySelector('.a').addEventListener("click",function(){
//     var ad = new Audio("sounds/kick-bass.mp3");
//     ad.play();
// });
// document.querySelector('.s').addEventListener("click",function(){
//     var ad = new Audio("sounds/snare.mp3");
//     ad.play();
// });
// document.querySelector('.d').addEventListener("click",function(){
//     var ad = new Audio("sounds/tom-1.mp3");
//     ad.play();
// });
// document.querySelector('.j').addEventListener("click",function(){
//     var ad = new Audio("sounds/tom-2.mp3");
//     ad.play();
// });
// document.querySelector('.k').addEventListener("click",function(){
//     var ad = new Audio("sounds/tom-3.mp3");
//     ad.play();
// });
// document.querySelector('.l').addEventListener("click",function(){
//     var ad = new Audio("sounds/tom-4.mp3");
//     ad.play();
// });




// var HouseKeeper1 = new HouseKeeper('hello',18);

// function HouseKeeper(name,age){
//     this.name=name,
//     this.age=age
// };

// console.log(HouseKeeper1)