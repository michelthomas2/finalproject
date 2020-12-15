let butts = document.querySelectorAll('.read-more');

// handle all the Read More and Close buttons
butts.forEach(function(el) {
  el.onclick = (e) => {
    let blur = e.target.closest('section').querySelector('.blur');
    blur.classList.toggle('blur-active')
    let popup = e.target.closest('section').querySelector('.popup');
    popup.classList.toggle('popup-active')
  }
});
