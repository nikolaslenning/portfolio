// var card = document.querySelectorAll('.card');
// card.addEventListener( 'click', function() {
//   card.classList.toggle('is-flipped');
// });




let card = document.querySelectorAll(".card");
card.forEach( card => card.addEventListener('click', function() {
    this.classList.toggle('is-flipped')
    console.log(card.classList);  
  }));