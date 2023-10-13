const observer = new IntersectionObserver((entries) =>
  entries.forEach((entry) => {
    console.log(entries)
    entry.target.classList.toggle("show", entry.isIntersecting);
  }),
  {
    threshold:0.5,
  }
  
);
const cards = document.querySelectorAll(".hidden");

cards.forEach((cards) => {
  observer.observe(cards);
});

const redirectButtonNetflix = document.getElementById('netflix');
redirectButtonNetflix.addEventListener('click', function () {
  window.location.href = 'https://netflix-clone-ex9f.vercel.app/'; 
});

const redirectButtonToDoList = document.getElementById('to-do');
redirectButtonToDoList.addEventListener('click', function () {
  window.location.href = 'https://to-do-list-kohl-nine.vercel.app/'; 
});
const redirectButtonTicTacToe = document.getElementById('tic-tac');
redirectButtonTicTacToe.addEventListener('click', function () {
    window.location.href = 'https://webdev-sy5j.vercel.app/'; 
  });


