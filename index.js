let currentScoreHome = document.getElementById("score-home")
let currentScoreGuest = document.getElementById("score-guest")
let scoreHome = 0
let scoreGuest = 0



function plusOneHome() {
    scoreHome = scoreHome + 1
    currentScoreHome.textContent = scoreHome
    
}

function plusOneGuest() {
    scoreGuest = scoreGuest + 1
    currentScoreGuest.textContent = scoreGuest
    
}

function plusTwoHome() {
    scoreHome = scoreHome + 2
    currentScoreHome.textContent = scoreHome
    
}

function plusTwoGuest() {
    scoreGuest = scoreGuest + 2
    currentScoreGuest.textContent = scoreGuest
    
}
function plusThreeHome() {
    scoreHome = scoreHome + 3
    currentScoreHome.textContent = scoreHome
    
}

function plusThreeGuest() {
    scoreGuest = scoreGuest + 3
    currentScoreGuest.textContent = scoreGuest
    
}