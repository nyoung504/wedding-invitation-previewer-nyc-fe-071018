//keyup
//event listener for each text box
//innerhtml


finital.addEventListener('keyup', () => {
  document.getElementById("box1").innerHTML = finital.value;
})

sinital.addEventListener('keyup', () => {
  document.getElementById("box2").innerHTML = sinital.value;
})

lname.addEventListener('keyup', () => {
  document.getElementById("box3").innerHTML = lname.value;
})

date.addEventListener('keyup', () => {
  document.getElementById("box4").innerHTML = date.value;
})
loc.addEventListener('keyup', () => {
  document.getElementById("box5").innerHTML = loc.value;
})



