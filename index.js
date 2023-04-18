let numberOfDrumButton = document.querySelectorAll(".drum").length;

for(let i=0;i<numberOfDrumButton;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

}

document.addEventListener("keypress",function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w" : 
            let w_audio = new Audio("sounds/tom-1.mp3");
            w_audio.play();
            break;
        case "a" : 
            let a_audio = new Audio("sounds/tom-2.mp3");
            a_audio.play();
            break;
        case "s" : 
            let s_audio = new Audio("sounds/tom-3.mp3");
            s_audio.play();
            break;
        case "d" : 
            let d_audio = new Audio("sounds/tom-4.mp3");
            d_audio.play();
            break;
        case "j" : 
            let j_audio = new Audio("sounds/snare.mp3");
            j_audio.play();
            break;
        case "k" : 
            let k_audio = new Audio("sounds/crash.mp3");
            k_audio.play();
            break;
        case "l" : 
            let l_audio = new Audio("sounds/kick-bass.mp3");
            l_audio.play();
            break;
        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(currentKey){
    
    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
    
}
