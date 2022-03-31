var card = document.querySelector('.card-container')
var button = document.querySelector('button.primary.ghost');
var button2 = document.getElementById('backbutton');

button.addEventListener( 'click', function() {
  var x = document.getElementById("back");
  var y = document.getElementById("front");
    card.classList.toggle('flip');
    setTimeout(() => { y.style.display = "none"; }, 500);
    setTimeout(() => { x.style.display = "block"; }, 555);
    
});

button2.addEventListener( 'click', function() {
  var x = document.getElementById("back");
  var y = document.getElementById("front");
    card.classList.toggle('flip');
    setTimeout(() => { x.style.display = "none"; }, 500);
    setTimeout(() => { y.style.display = "block"; }, 555);
    
});