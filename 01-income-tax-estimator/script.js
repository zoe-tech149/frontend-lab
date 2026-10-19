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
    taxBeforeRebate = 44118 + (incomeInputValue  - 245100) * 0.26;
  } else if (incomeInputValue > 383100 && incomeInputValue <= 530200) {
    taxBeforeRebate = 79998 + (incomeInputValue  - 383100) * 0.31;
  } else if (incomeInputValue > 530200 && incomeInputValue <= 695800) {
    taxBeforeRebate = 125599 + (incomeInputValue - 530200) * 0.36;
  } else if (incomeInputValue > 695800 && incomeInputValue <= 887000) {
    taxBeforeRebate = 185215 + (incomeInputValue  - 695800) * 0.39;
  } else if (incomeInputValue > 887000 && incomeInputValue <= 1878600) {
    taxBeforeRebate = 259783 + (incomeInputValue  - 887000) * 0.41;
  } else if (incomeInputValue > 1878600) {
    taxBeforeRebate = 666339 + (incomeInputValue - 1878600) * 0.45;
  }

});


 