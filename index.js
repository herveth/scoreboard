// let homeScoreBtnOne = document.getElementById("home-score-btn-1")
// let homeStoreEl =document.getElementById("home-score")
// let homeScore = 0

// function increaseHomeScoreOne(){
//     homeScore += 1
//     homeStoreEl.textContent = homeScore
// }

// let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
// let guestStoreEl =document.getElementById("guest-score")
// let guestScore = 0

// function increaseGuestScoreOne(){
//     guestScore += 1
//     guestStoreEl.textContent = guestScore
// }

let homeScore = 0
let guestScore = 0

function increaseHomeScore(points) {
    homeScore += points;
    document.getElementById("home-score").textContent = homeScore;  
}

function increaseGuestScore(points) {
    guestScore += points;
    document.getElementById("guest-score").textContent = guestScore;
}