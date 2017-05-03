import $ from 'jquery';

var hour = 0;
var minute = 0;
var second = 0;
var setTime = 0;

function updateTime(){
  setTimeout(function(){
      second++;
      if(second > 3){
        minute++;
        second = 0;
      }
      if(minute > 59){
        hour++;
        minute = 0;
      }
      if(minute === 3 && second === 0){
        setTime = minute;
        console.log(minute);
        console.log(setTime);
        alarm();
      }
  updateTime();
  displayTime();
  checkAlarm();
  console.log(minute);
  console.log(setTime);
  $(".startTime").addClass("hidden")
}, 1000)
}

function displayTime(){
  if (second < 10){
    $(".second").html(`0${second}`)
  }
  else if(second > 9){
    $(".second").html(`${second}`)
  }
  if (minute < 10){
    $(".minute").html(`0${minute}:`)
  }
  else if(minute > 9){
    $(".minute").html(`${minute}:`)
  }
  if (hour < 10){
    $(".hour").html(`0${hour}:`)
  }
  else if(hour > 9){
    $(".hour").html(`${hour}:`)
  }
}

function checkAlarm(){
  if(setTime === minute - 2 && minute != 2){
    setTime = minute;
    console.log(minute);
    console.log(setTime);
    alarm();
  }
}

function alarm(){
  $(".alarm").html(`<audio hidden controls autoplay>
   <source src="burp.ogg" type="audio/ogg">
   <source src="burp.mp3" type="audio/mpeg">
 Your browser does not support the audio element.`)
 console.log("im here")
}


export { updateTime, displayTime, alarm, hour, minute, second };
