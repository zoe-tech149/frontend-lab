const form = document.querySelector('#tax-input-form');

form.addEventListener('submit', function(event){
  
  event.preventDefault();

  const incomeInputEl = document.querySelector('#annual-tax-income');

  const incomeInputValue = Number(incomeInputEl.value);

  const validationResultsEl =
  document.querySelector('#validation-results');

  validationResultsEl.textContent = "";
  
  if (!Number.isFinite(incomeInputValue)) {
    validationResultsEl.textContent = "Please enter a valid income.";
    return;
  }

  let taxBeforeRebate;

  if (incomeInputValue <= 245100) {
    taxBeforeRebate = incomeInputValue * 0.18;
  } else if (incomeInputValue > 245100 && incomeInputValue <= 383100) {
    taxBeforeRebate = 44118 + (incomeInputValue  - 245100) * 0.26
  }

});


 