
const init = () => {
  const inputForm = document.querySelector('form')

  inputForm.addEventListener('submit', e => {
    e.preventDefault();

//accessing user input
// console.log(e.target.children[1].value)
    const userInput = document.querySelector('input#searchByID');

    fetch(`http://localhost:3000/movies/${userInput.value}`)
    .then(res => res.json())

//where to relying the data to the dom
   .then(data => {
      const detailsTitle = document.querySelector('section#movieDetails h4');
      const detailsSummary = document.querySelector('section#movieDetails p');

//update the contents in the dom
      detailsTitle.innerText = data.title;
      detailsSummary.innerText = data.summary;
    });
  });
}

document.addEventListener('DOMContentLoaded', init);