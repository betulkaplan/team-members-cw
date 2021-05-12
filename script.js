const body = document.querySelector('body');
const toggle = document.getElementById('toggle_sw');
const texts = document.querySelectorAll('h1, h2, h3, p');

const texts2 = document.querySelectorAll('h3, p');

console.log(texts);

let bg_dark = false;
toggle.addEventListener('click', () => {
  bg_dark = !bg_dark;
  console.log(toggle.checked);
  if (bg_dark) {
    body.classList.add('bg-dark');
    texts.forEach((item) => {
      item.classList.add('text-white');
    });
  } else {
    body.classList.remove('bg-dark');
    texts.forEach((item) => {
      item.classList.remove('text-white');
    });
  }
});
