function displayTime(){
  const dateTime = new Date()
  const hrs = dateTime.getHours()
  const min = dateTime.getMinutes()
  const sec = dateTime.getSeconds()
  const clock = document.querySelector(".session")

  if(hrs >= 12){
    clock.innerHTML = "PM"
  }else{
    clock.innerHTML = "AM"
  }

  if(hrs > 12){
    
  }

  document.querySelector(".hours").innerHTML = hrs
  document.querySelector(".minutes").innerHTML = min
  document.querySelector(".seconds").innerHTML = sec
}
setInterval(displayTime,10)