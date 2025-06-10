
for (var i = 0; i < document.querySelectorAll("button").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function() {
    
    var buttoninnerHTML = this.innerHTML;
    
    makesound(buttoninnerHTML);
    
});
}

document.addEventListener("keypress", function() {
    makesound(event.key);
})

function makesound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-5.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-6.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-7.mp3");
            audio.play();
            break;
    }
}