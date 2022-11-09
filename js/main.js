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


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



