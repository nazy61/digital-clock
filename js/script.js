function showTime() {
  let date = new Date();

  let hour = date.getHours(); // 0 - 23
  let minutes = date.getMinutes(); // 0 - 59
  let seconds = date.getSeconds(); // 0 - 59
  let session = "AM";

  if (hour == 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour = hour - 12;
    session = "PM";
  }

  if (hour < 10) {
    hour = "0" + hour;
  } else {
    hour = hour;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  } else {
    minutes = minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  } else {
    seconds = seconds;
  }

  // hour = hour < 10 ? "0" + hour : hour;
  // minutes = minutes < 10 ? "0" + minutes : minutes;
  // seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = hour + ":" + minutes + ":" + seconds + " " + session; // 01:30:50 PM
  document.getElementById("MyClockDisplay").innerHTML = time;
}

setInterval(showTime, 1000);
