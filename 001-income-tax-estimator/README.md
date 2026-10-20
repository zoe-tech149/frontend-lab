# South African Income Tax Estimator

## Problem
Individuals in South Africa need to understand how much annual income tax they may owe and how much of their taxable income will remain after estimated tax.

## Objective
Build a responsive web application that estimates annual income tax using South African tax brackets and the primary rebate for individuals under 65.

## Specifications

Tax estimation assumptions:

- Individual is under 65 years old.
- Only the primary rebate is applied.
- No deductions or additional tax credits are included.
- The calculation uses annual taxable income.

Tax estimator requirements:

- Accept annual taxable income through a user input field.
- Validate the submitted income.
- Calculate tax before the primary rebate using the applicable tax bracket.
- Subtract the primary rebate of R17,820.
- Ensure the final estimated tax cannot be negative.
- Calculate income remaining after estimated tax.
- Display the estimated annual tax and income after estimated tax.
- Format monetary results using South African rand currency formatting.
- Present the input and results in a responsive, user-friendly layout.
- Display a disclaimer explaining that the result is an estimate.

## Demo

### Income Input
![Income Tax Estimator input](screenshots/income-tax-estimator-input.png)

### Calculation Results
![Income Tax Estimator results](screenshots/income-tax-estimator-results.png)

![Income Tax Estimator ](screenshots/income-tax-estimator.mp4)

## Concepts Practised

- HTML forms, labels, inputs, and semantic structure
- CSS Grid, responsive layouts, and styling
- JavaScript variables, constants, and assignment
- DOM selection and manipulation
- Event listeners and form submission
- Preventing default form behaviour with "event.preventDefault()"
- Reading and converting input values
- Input validation with "Number.isFinite()"
- Conditional statements and multiple tax brackets
- Arithmetic operators and expressions
- Scope, execution order, and variable dependencies
- Applying a rebate and preventing negative results with "Math.max()"
- Currency formatting with "Intl.NumberFormat()"
- Displaying calculated results using "textContent"
- Testing calculations with expected outputs
- Debugging and verifying program behaviour

## Future Improvements

- [ ] Format the income input with thousands separators while typing.
- [ ] Add support for different age groups and applicable rebates.
- [ ] Account for eligible deductions and additional tax credits.
- [ ] Add a monthly salary option alongside annual taxable income.
- [ ] Display a breakdown of tax calculated within each bracket.
- [ ] Improve validation messages for invalid or out-of-range values.
- [ ] Add automated tests for tax bracket boundaries and edge cases.
- [ ] Allow users to reset the form and clear previous results.
- [ ] Add an option to export or print the tax estimate.
- [ ] Update tax rules when new South African tax years are introduced.
- [ ] Improve accessibility and test the interface across different devices.

## Disclaimer

This application provides an estimate for educational purposes. It assumes an individual under 65 who qualifies for the primary rebate and does not account for individual deductions, additional tax credits, or other circumstances that may affect actual tax liability. Verify calculations against current South African Revenue Service (SARS) guidance before making financial decisions.