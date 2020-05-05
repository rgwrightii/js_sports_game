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
    let newCounterValue = Math.floor(Math.random() * 2) + 1;
    oneNum.innerHTML = newCounterValue;

})

if (newCounterValue < 0) {
    + 1

}

