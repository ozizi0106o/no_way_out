// ===== desktop ===== //
const cd = document.getElementById("cd");
const playbtn1 = document.getElementById("playbtn1");
const pausebtn1 = document.getElementById("pausebtn1");
// const volumebtn1 = document.getElementById("volumebtn1");
// const mute1btn1 = document.getElementById("mutebtn1");
const timebox_btn = document.getElementById("timebox_btn");
const desktop_song1 = document.getElementById("desktop_song1");
const desktop_singer1 = document.getElementById("desktop_singer1");
const timeline_btn = document.getElementById("timeline_btn");

function autoPlay1(){
    // ====== 點擊播放 音樂開始 ===== //
    var play1 = document.getElementById("audio");
    play1.play();

    // ===== 點擊播放 切換版面和按鈕 ===== //
    cd.classList.add("show");
    pausebtn1.classList.add("show");
    playbtn1.classList.remove("show");
    timebox_btn.classList.add("show");
    desktop_song1.classList.add("show");
    desktop_singer1.classList.add("show");
    timeline_btn.classList.add("show");
}			

function closePlay1(){
    // ====== 點擊暫停 音樂停止 ===== //
    var pause1 = document.getElementById("audio");
    pause1.pause();
    // Auto.load();
    // 上面的循環播放btn有bug

    // ===== 點擊暫停 切換版面和按鈕 ===== //
    cd.classList.remove("show");
    pausebtn1.classList.remove("show");
    playbtn1.classList.add("show");
    timebox_btn.classList.remove("show");
    desktop_song1.classList.remove("show");
    desktop_singer1.classList.remove("show");
    timeline_btn.classList.remove("show");
}

// function autoVolume1(){
//     ====== 點擊聲音 有音樂 ===== 
//     var 
//     還沒寫出來
//     volumebtn1.classList.add("show");
//     mute1btn1.classList.remove("show");
// }

// function autoMute1(){
//     ====== 點擊靜音 沒有音樂 ===== 
//     var 
//     還沒寫出來
//     volumebtn1.classList.remove("show");
//     mute1btn1.classList.add("show");
// }



// ===== mobile ===== //
const playbtn2 = document.getElementById("playbtn2");
const pausebtn2 = document.getElementById("pausebtn2");

function autoPlay2(){
    var play2 = document.getElementById("audio");
    play2.play();
    pausebtn2.classList.add("show");
    playbtn2.classList.remove("show");
}			

function closePlay2(){
    var pause2 = document.getElementById("audio");
    pause2.pause();
    // Auto.load();
    // 上面的循環播放btn有bug

    pausebtn2.classList.remove("show");
    playbtn2.classList.add("show");
}

// ===== main ster ===== //
// 俊傑 //
var shoot1 = new TimelineMax();
shoot1.to(".turn1", .7,
{                     
rotationX: 90, //旋轉
transformOrigin: 'bottom center 0', //旋轉的定位點 x軸 y軸 z軸
transformPerspective:  50000, //攝影機鏡頭
});
shoot1.stop();

// 滑鼠移入
document.getElementById("jj").onmouseover = function(){
    shoot1.play();
}

//  滑鼠移開，動畫還原
document.getElementById("jj").onmouseleave = function(){
shoot1.reverse();
}  

// 安安 //
var shoot2 = new TimelineMax();
shoot2.to(".turn2", .7,
{                     
rotationX: 90, //旋轉
transformOrigin: 'bottom center 0', //旋轉的定位點 x軸 y軸 z軸
transformPerspective:  50000, //攝影機鏡頭
});
shoot2.stop();

// 滑鼠移入
document.getElementById("an").onmouseover = function(){
    shoot2.play();
}

//  滑鼠移開，動畫還原
document.getElementById("an").onmouseleave = function(){
shoot2.reverse();
} 

// 鼓鼓 //
var shoot3 = new TimelineMax();
shoot3.to(".turn3", .7,
{                     
rotationX: 90, //旋轉
transformOrigin: 'bottom center 0', //旋轉的定位點 x軸 y軸 z軸
transformPerspective:  50000, //攝影機鏡頭
});
shoot3.stop();

// 滑鼠移入
document.getElementById("goo").onmouseover = function(){
    shoot3.play();
}

//  滑鼠移開，動畫還原
document.getElementById("goo").onmouseleave = function(){
shoot3.reverse();
} 

// 青峰 //
var shoot4 = new TimelineMax();
shoot4.to(".turn4", .7,
{                     
rotationX: 90, //旋轉
transformOrigin: 'bottom center 0', //旋轉的定位點 x軸 y軸 z軸
transformPerspective:  50000, //攝影機鏡頭
});
shoot4.stop();

// 滑鼠移入
document.getElementById("feng").onmouseover = function(){
    shoot4.play();
}

//  滑鼠移開，動畫還原
document.getElementById("feng").onmouseleave = function(){
shoot4.reverse();
} 