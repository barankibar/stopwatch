// Stopwatch with setInterval but this is not the best solution

const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const tens = document.querySelector("#tens");
const start = document.querySelector("#start");
const restart = document.querySelector("#restart");
const stop = document.querySelector("#stop");
let ten = 00;
let second = 59;
let minute = 00;
let date = new Date();
let Interval;

start.addEventListener("click", () => {
  Interval = setInterval(startTimer, 10);
  console.log(Interval);
});

function startTimer() {
    ten++; 
    
    if(ten <= 9){
      tens.innerHTML = "0" + ten;
    }
    
    if (ten > 9){
      tens.innerHTML = ten;
      
    } 
    
    if (ten > 99) {
      console.log("seconds");
      second++;
      seconds.innerHTML = "0" + second;
      ten = 0;
      tens.innerHTML = "0" + 0;
    }
    
    if (second > 9){
      seconds.innerHTML = second;
    }

    if(second >59){
        minute++;
        minutes.innerHTML = "0" + minute;
        second = 0;
        seconds.innerHTML = "0" + second;
        ten = 0;
        tens.innerHTML = "0" + ten;
    }
    if ( document.hidden ) { return; }
    document.title = `${minute}m : ${second}s`;
}