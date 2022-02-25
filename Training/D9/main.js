window.onload = function(){
    var minutes = 00;
    var seconds = 00;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById("btnStart");
    var buttonStop = document.getElementById("btnStop");
    var buttonReset = document.getElementById("btnReset");

    var intervals;

    buttonStart.onclick = function (){
        clearInterval(intervals);
        intervals = setInterval(startTimer,1000);
    }
    buttonStop.onclick = function (){
        clearInterval(intervals);
    }
    buttonReset.onclick = function (){
        clearInterval(intervals);
        seconds = "00";
        appendTens.innerHTML = seconds;
        minutes = "00";
        appendSeconds.innerHTML = minutes;
    }
    function startTimer(){
        seconds++;
        if(seconds<=9)
        {
            appendTens.innerHTML = "0"+seconds;
        }
        if(seconds>9)
        {
            appendTens.innerHTML = seconds;
        }

        if(seconds>10)
        {
            minutes++;
           appendSeconds.innerHTML = "0"+minutes;
           seconds = 0;
           appendTens.innerHTML = seconds;
        }
    }
}