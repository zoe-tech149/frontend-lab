const form = document.querySelector('#tax-input-form');

form.addEventListener('submit', function(event){
  
  event.preventDefault();

  const incomeInputEl = document.querySelector('#annual-tax-income');

  const incomeInputValue = Number(incomeInputEl.value);

  const validationResultsEl =
  document.querySelector('#validation-results');

  if (!Number.isFinite(incomeInputValue)) {
    validationResultsEl.textContent = "Please enter a valid income.";
    return;
  }
 

});


 