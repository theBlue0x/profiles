var card = document.querySelector('.card-container')
var button = document.querySelector('button.primary');
var button2 = document.querySelector('button.primary.ghost');
var button3 = document.getElementById('backbutton_send');
var button4 = document.getElementById('backbutton_social');

button.addEventListener( 'click', function() {
  var y = document.getElementById("front");
  var x = document.getElementById("back_send");
    card.classList.toggle('flip');
    setTimeout(() => { y.style.display = "none"; }, 500);
    setTimeout(() => { x.style.display = "block"; }, 555);  
});

button2.addEventListener( 'click', function() {
  var x = document.getElementById("front");
  var y = document.getElementById("back_social");
    card.classList.toggle('flip');
    setTimeout(() => { x.style.display = "none"; }, 500);
    setTimeout(() => { y.style.display = "block"; }, 555);  
});

button3.addEventListener( 'click', function() {
  var x = document.getElementById("back_send");
  var y = document.getElementById("front");
    card.classList.toggle('flip');
    setTimeout(() => { x.style.display = "none"; }, 500);
    setTimeout(() => { y.style.display = "block"; }, 505);  
});

button4.addEventListener( 'click', function() {
  var x = document.getElementById("back_social");
  var y = document.getElementById("front");
    card.classList.toggle('flip');
    setTimeout(() => { x.style.display = "none"; }, 500);
    setTimeout(() => { y.style.display = "block"; }, 505);  
});
