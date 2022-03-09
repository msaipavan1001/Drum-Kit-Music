var event1 = document.getElementsByClassName('drum')
console.log(event1)

for (let i = 0; i < event1.length; i++) {
    event1[i].addEventListener('click', handleClick)
}

//mouse click event handler
function handleClick() {
    //alert("I got clicked!")
    //this--identity
    console.log("I got clicked!")

    console.log(this, this.innerHTML)
    //this.style.color = 'white'
    var button = this.innerHTML
    //invoke sound function
    makeSound(button)

    // invoke animation.
    buttonAnimataion(button)
}

//key board press even listner
document.addEventListener("keydown", function (event) {
    console.log(event, event.key)
    makeSound(event.key)
    buttonAnimataion(event.key)
})

//function takes the input keyboard or mouse click and returns sounds
function makeSound(key) {
    switch (key) {
        case 'w':
            let audio1 = new Audio('sounds/tom-1.mp3')
            audio1.play();
            break
        case 'a':
            let audio2 = new Audio('sounds/tom-2.mp3')
            audio2.play();
            break
        case 's':
            let audio3 = new Audio('sounds/tom-3.mp3')
            audio3.play();
            break
        case 'd':
            let audio4 = new Audio('sounds/tom-4.mp3')
            audio4.play();
            break
        case 'j':
            let audio5 = new Audio('sounds/crash.mp3')
            audio5.play();
            break
        case 'k':
            let audio6 = new Audio('sounds/kick-bass.mp3')
            audio6.play();
            break
        case 'l':
            let audio7 = new Audio('sounds/snare.mp3')
            audio7.play();
            break
        default:
            console.log(key)
    }
}

function buttonAnimataion(button) {
    var list = ['w', 'a', 's', 'd', 'j', 'k', 'l']
    if (list.includes(button)) {
        var currentPressedButton = document.querySelector("." + button)
        console.log(currentPressedButton)
        // to get the class present inside the element
        console.log(currentPressedButton.classList)
        //add the class to previous present 
        currentPressedButton.classList.add("pressed")

        // after 100 milliseconds the remove the classlist
        setTimeout(function () {
            currentPressedButton.classList.remove("pressed")
        }, 100)
        console.log(currentPressedButton.classList)
    }

}