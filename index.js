for(var i = 0; i < 7; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        let pressedKey = this.innerHTML;
        makeSound(pressedKey);
        addAnimation(pressedKey);
    });
}

document.addEventListener("keydown", function (KeyboardEvent){
    let pressedKey = KeyboardEvent.key;
    makeSound(pressedKey);
    addAnimation(pressedKey);
});

function makeSound(pressedKey) {
    switch(pressedKey) {
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play();
            break;
        case 'a':
            var audio = new Audio("sounds/tom-2.mp3")
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/tom-3.mp3")
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/snare.mp3")
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/crash.mp3")
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/kick-bass.mp3")
            audio.play();
            break;
        default:
            console.log(this.innerHTML);
            break;
    }
}

function addAnimation(pressedKey){
    let activeButton = document.querySelector("." + pressedKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {activeButton.classList.remove("pressed")}, 100);
}