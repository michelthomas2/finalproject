let answers = document.querySelectorAll('dd');
let questions = document.querySelectorAll('dt');

answers.forEach(function(el) {
  el.style.display = 'none';
});

questions.forEach(function(el) {
  el.onclick = () => {
    if (el.nextSibling.nextSibling.style.display === 'none') {
      el.nextSibling.nextSibling.style.display ='block';
    } else {
      el.nextSibling.nextSibling.style.display = 'none';
    }
  };
});
