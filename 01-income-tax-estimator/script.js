const form = document.querySelector('#tax-input-form');

form.addEventListener('submit', function(event){
  console.log("form submitted!");

  event.preventDefault();

  const incomeInputEl = document.querySelector('#annual-tax-income');

  const validationResultsEl = document.querySelector('#validation-results');

  if (incomeInputEl.value === "") {
    validationResultsEl.textContent = "Please enter your anual income.";
    return;
  }

  const incomeInputValue = Number(incomeInputEl.value);

  

})


 