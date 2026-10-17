const form = document.querySelector('#tax-input-form');

form.addEventListener('submit', function(event){
  console.log("form submitted!");

  event.preventDefault();

  const incomeInputEl = document.querySelector('#annual-tax-income');

  const incomeInputValue = Number(incomeInputEl.value);

})


