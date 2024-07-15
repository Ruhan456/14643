
function setTimer(elem_id, date) {
    // set the date we're counting down to
        var target_date = new Date(date).getTime();
        // variables for time units
        var days, hours, minutes, seconds;
        // get tag element
    
        var countDownElem = document.getElementById(elem_id);
        //update the tag with id "countdown" every 1 second
        setInterval(function () {
           // find the amount of "seconds" between now and target
          var current_date = new Date().getTime();
          var seconds_left = (target_date - current_date) / 1000;
          // do some time calculations
          days = parseInt(seconds_left / 86400);
          seconds_left = seconds_left % 86400;
          hours = parseInt(seconds_left / 3600);
          seconds_left = seconds_left % 3600;
          minutes = parseInt(seconds_left / 60);
          seconds = parseInt(seconds_left % 60);
          // format countdown string + set tag value
          countDownElem.innerHTML = days + "D " + hours + "h " + minutes + "m " + seconds + "s";
        }, 1000);


       }


    var yearSimi = new Date().getFullYear()
    var simi = new Date("Jul 12, "+ yearSimi).getTime()
    currentDate= new Date().getTime();
    setTimer("countdown1","Jul 12, "+ yearSimi);
    if ((simi - currentDate) < 0){
        yearSimi = yearSimi+1
        setTimer("countdown1","Jul 12, "+ yearSimi);
    }
       
    var yearRuhan = new Date().getFullYear()
    var Ruhan = new Date("May 13, "+ yearRuhan).getTime()
    currentDate= new Date().getTime();
    setTimer("countdown2","May 13" + yearRuhan);
    if ((Ruhan - currentDate) < 0){
        yearRuhan = yearRuhan+1
        setTimer("countdown2","May 13, "+ yearRuhan);
    }

    var yearUn = new Date().getFullYear()
    var Un = new Date("May 3, "+ yearUn).getTime()
    currentDate= new Date().getTime();
    setTimer("countdown3",Un);
    if ((Un - currentDate) < 0){
        yearUn = yearUn+1
        setTimer("countdown3","May 3, "+ yearUn);
    }

    var yearOfficial = new Date().getFullYear()
    var Official = new Date("May 8, "+ yearOfficial).getTime()
    currentDate= new Date().getTime();
    setTimer("countdown4",Official);
    if ((Official - currentDate) < 0){
        yearOfficial = yearOfficial+1
        setTimer("countdown4","May 8, "+ yearOfficial);
    }
