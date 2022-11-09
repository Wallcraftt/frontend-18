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

  document.querySelector(".hours").innerHTML = hrs
  document.querySelector(".minutes").innerHTML = min
  document.querySelector(".seconds").innerHTML = sec
}
setInterval(displayTime,10)


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 5 seconds
}

const slider = document.querySelector("#img")

slider.addEventListener('mouseenter', (e) => {
  slider.style.opacity = "0"
});
slider.addEventListener('mouseleave', (e) => {
  slider.style.opacity = "1"
});



