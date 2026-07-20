// =========================
// Floating Hearts
// =========================

for(let i=0;i<80;i++){

    let heart=document.createElement("span");

    heart.innerHTML="❤";

    heart.className="heart";

    heart.style.left=Math.random()*100+"%";

    heart.style.fontSize=(10+Math.random()*35)+"px";

    heart.style.animationDuration=(5+Math.random()*8)+"s";

    heart.style.animationDelay=Math.random()*8+"s";

    document.body.appendChild(heart);

}

// =========================
// Countdown
// =========================

const startDate = new Date("2021-08-01");

function updateCountdown(){

const now = new Date();

let diff = now-startDate;

let totalDays=Math.floor(diff/(1000*60*60*24));

let years=Math.floor(totalDays/365);

let months=Math.floor((totalDays%365)/30);

let days=(totalDays%365)%30;

let hours=now.getHours();

document.getElementById("year").innerHTML=years;

document.getElementById("month").innerHTML=months;

document.getElementById("day").innerHTML=days;

document.getElementById("hour").innerHTML=hours;

}

updateCountdown();

setInterval(updateCountdown,1000);

// =========================
// Preview Gallery
// =========================

function showImage(src){

document.getElementById("previewImage").src=src;

}

// =========================
// Loader
// =========================

window.onload=function(){

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},800);

},1800);

}

// =========================
// Scroll Progress
// =========================

window.addEventListener("scroll",()=>{

let winScroll=document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let scrolled=(winScroll/height)*100;

document.getElementById("progressBar").style.width=scrolled+"%";

});