let pullButton = document.querySelector(".button1")
let randomNum1 = document.querySelector("#column1")
let randomNum2 = document.querySelector("#column2")
let randomNum3 = document.querySelector("#column3")
let winnerMessage = document.querySelector(".result1")
let loserMessage = document.querySelector(".result2")
let tokens = document.querySelector(".tokens")
let points = 1000
tokens.innerHTML = 1000
let gameOverMessage = document.querySelector('.gameover')
let winnerMessage1 = document.querySelector('.winnermessage')
let youWin = document.querySelector('.youwin')
let youLose = document.querySelector('.youlose')
let slider = document.querySelector('.parent')
let child = document.querySelector('.child')

function randomNumberGenerator(){
    return Math.floor(Math.random() * 3);
}
function increaseTokenValue(){
    points += 900
    tokens.innerHTML = points
    if (points > 0 && points < 2000 ){
        return tokens.innerHTML = points, tokens.style.color = 'green'
    }
    else if (points >= 2000){
        return youWin.style.display = "block", tokens.style.display = "none", 
        winnerMessage1.style.display = "block", winnerMessage.style.display = "none",
        loserMessage.style.display = "none", pullButton.style.display = "none", slider.style.display = 'none'
    }
}
function decreaseTokenValue(){
    points += -100
    tokens.innerHTML = points
    if (points > 0 && points < 2000){
        return tokens.innerHTML = points, tokens.style.color = 'red'
    }
    else if (points <= 0){
        return youLose.style.display = "block", tokens.style.display = "none",
         gameOverMessage.style.display = "block", loserMessage.style.display = "none", 
         winnerMessage.style.display = "none", pullButton.style.display = "none", slider.style.display = 'none'
    }
}
function randomNumber2(){
    randomNum2.innerHTML = randomNumberGenerator()
}
function randomNumber3(){
    randomNum3.innerHTML = randomNumberGenerator()
}
function lotteryResult(){
    if (randomNum1.innerHTML === randomNum2.innerHTML && randomNum1.innerHTML === randomNum3.innerHTML){
        return winnerMessage.style.display = "block", loserMessage.style.display = "none", increaseTokenValue()
    }
    else {
        return loserMessage.style.display = "block", winnerMessage.style.display = "none", decreaseTokenValue()
    } 
}
function lotteryFunction(){
    randomNum1.innerHTML = randomNumberGenerator()
    setTimeout(randomNumber2, 250)
    setTimeout(randomNumber3, 500)
    setTimeout(lotteryResult, 500)
}
function translateChild(){
    return child.style.transform = 'translateX(100%)', child.style.transition = "1s"
}
function stopTranslate(){
    return child.style.transform = 'translateX(0%)', child.style.transition = 'none'
}
pullButton.addEventListener("click", ()=>{
    winnerMessage.style.display = "none", loserMessage.style.display = "none"
    translateChild()
    setTimeout(stopTranslate, 1650)
})
slider.addEventListener('transitionend', ()=>{
    lotteryFunction() 
})