// ===== desktop ===== //
function autoPlay1(){
    var play1 = document.getElementById("audio");
    play1.play();
}			

function closePlay1(){
    var pause1 = document.getElementById("audio");
    pause1.pause();
    // Auto.load();
}

// ===== mobile ===== //
function autoPlay2(){
    var play2 = document.getElementById("audio");
    play2.play();
}			

function closePlay2(){
    var pause2 = document.getElementById("audio");
    pause2.pause();
    // Auto.load();
}

// function updateButton() {
// const icon = this.paused ? 'play1' : 'pause1';
// console.log(icon);
// toggle.textContent = icon;

// var btn1 = document.getElementById("btn1");
// play1.addEventListener("click", function(){ // click 事件綁定
// let pause1 = document.getElementsByClassName("pause1")[0];
// console.log(pause1.innerHTML);
// });			

// play1.addEventListener("click", () => {
// 	pause1.onclick();
// });

// pause1.addEventListener("click", function(){
// 	play1.onclick();
// });

// var play1 = document.getElementsByClassName("play1");
// play1.addEventListener("focus", function(){
// 	this.closest("pause1").classList.toggle("pause1");
// });