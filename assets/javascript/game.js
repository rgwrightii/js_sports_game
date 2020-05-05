// increase number of shots for shoot button 
// shots randomly succeed
// goals increase with successful shots
// clicking reset button to reset scores
// add number reset button when clicked

const oneNum = document.querySelector("#teamone-numshots");
const oneShoot = document.querySelector("#teamone-shoot-button");
const oneGoal = document.querySelector("#teamone-numgoals");


oneShoot.addEventListener("click", function() {
    console.log("getRandomInt");
    let newCount = Number(oneNum.innerHTML) + 1;
    oneNum.innerHTML = newCount
    
    if (Math.random() > 0.5) {
        let newGoal = Number(oneGoal.innerHTML) +1;
        oneGoal.innerHTML = newGoal;
}})

const twoNum = document.querySelector("#teamtwo-numshots");
const twoShoot = document.querySelector("#teamtwo-shoot-button");
const twoGoal = document.querySelector("#teamtwo-numgoals");

twoShoot.addEventListener("click", function() {
    console.log("getRandy");
    let twoCount = Number(twoNum.innerHTML) + 1;
    twoNum.innerHTML = twoCount;

    if (Math.random() > 0.5) {
        let newTwo = Number(twoGoal.innerHTML) +1;
        twoGoal.innerHTML = newTwo;
    }
})

const mainReset = document.querySelector("#reset-button");
const numReset = document.querySelector("#num-resets")

mainReset.addEventListener("click", function() {
    
    console.log("Resetter");
    
    let thisReset = Number(numReset.innerHTML) + 1;
    numReset.innerHTML = thisReset;
    
    twoGoal.innerHTML = 0
    oneGoal.innerHTML = 0
    oneNum.innerHTML = 0
    twoNum.innerHTML = 0
})
