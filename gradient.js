const btn1= document.getElementById("button1")
const btn2= document.getElementById("button2")
let code = document.getElementById("gradient-code")
let container = document.querySelector("body")

const hexaValues = "0123456789abcdef"
let buttonValues = ""

let buttonValue1 = "#011f8c"
let buttonValue2 = "#88c93a"



btn1.addEventListener("click",function(){
    buttonValues = ""
    for (let i=0; i<6; i++){
        buttonValues=buttonValues+hexaValues[Math.floor(Math.random()*16)]
    }
    buttonValue1 ="#"+ buttonValues
    btn1.textContent =buttonValue1
    
    //change button color
    btn1.style.backgroundColor = buttonValue1
    updateGradient()
    updateBackground()
    
})
btn2.addEventListener("click",function(){
    buttonValues = ""
    for (let i=0; i<6; i++){
        buttonValues=buttonValues+hexaValues[Math.floor(Math.random()*16)]
    }
    buttonValue2= "#"+buttonValues
    btn2.textContent = buttonValue2

    //change button color
    btn2.style.backgroundColor = buttonValue2
    updateGradient()
    updateBackground()
})

function updateGradient(){
    code.textContent = `background-image: linear-gradient(to right, ${buttonValue1} , ${buttonValue2});`
}

function updateBackground(){
    container.style.backgroundImage =`linear-gradient(to right, ${buttonValue1} , ${buttonValue2})`
}

code.addEventListener("click",function(){
    gradientText = code.textContent
    navigator.clipboard.writeText(gradientText)
    alert("Copied to clipboard")
    }
)
updateBackground()
updateGradient()






