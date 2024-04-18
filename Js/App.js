let Tens = document.querySelector(".tens");
let Second = document.querySelector(".second");
let Startbutton = document.querySelector(".Startbutton");
let Stopbutton = document.querySelector(".Stopbutton");
let Resetbutton = document.querySelector(".Resetbutton");





let Time = 0;
let tens = 0;
let second = 0;





const Timerstart = () => {
    Time = setInterval(Timer, 10);
}






let Timer = () => {


    second++;



    if (second <= 9) {
        Second.textContent = "0" + second;
    }
    else {
        Second.textContent = second;
    }



    if (second > 99) {
        tens++;
        Tens.textContent = tens;

        second = 0;
        Second.textContent = "0" + second;
    }



    if (tens > 100) {

        Tens.textContent = second;

    }



}






const Timerstop = () => {
    clearInterval(Time);



}









const Timerreset = () => {




    tens = "00";
    second = "00";


    Tens.textContent = tens;
    Second.textContent = second;




}








Resetbutton.addEventListener("click", Timerreset);
Stopbutton.addEventListener("click", Timerstop);
Startbutton.addEventListener("click", Timerstart);