//Eligibility Calculator

const basicPay = prompt("Please enter your basic pay");
const housingAllowance = prompt(
  "Please enter your housing allowance. If not applicable, enter 0"
);
const transportAllowance = prompt(
  "Please enter your transport allowance. If not applicable, enter 0"
);
const otherAllowance = prompt(
  "Please enter any other allowances. If none, enter 0"
);
const loanTerm = prompt("Please enter the loan term");
const interest = prompt("Please enter the interest in decimal form");
const serviceFee = prompt("Please enter the service fee in decimal form");
const napsaFee = prompt("Please enter monthly NAPSA payment");
const payeTax = prompt("Please enter monthly PAYE tax");
const nhimaFee = prompt("Please enter monthly NHIMA payment");
const thirdPartyRecovery = prompt(
  "Please enter any third party loan recovery amounts. If not applicable, enter 0"
);
const lupiyaLoanRecovery = prompt(
  "Please enter any Lupiya loan recovery amounts. If not applicable, enter 0"
);
const otherDeductions = prompt(
  "Please enter any other deduction amounts. If not applicable, enter 0"
);

function eligibilityCalculator(rate, nper, pmt) {
  const maxLoanAmount = (pmt / rate) * (1 - Math.pow(1 + rate, -nper));
  const amountDisbursed = maxLoanAmount * (1 - serviceFee);
  const eligible = `The customer is eligible for K${maxLoanAmount.toFixed(
    2
  )}, with the disbursement amount being K${amountDisbursed.toFixed(
    2
  )} after a deduction of our ${
    serviceFee * 100
  }% service fee. The maximum installment amount per month is K${maxInstallment.toFixed(
    2
  )}`;
  return eligible;
}

const grossPay =
  Number(basicPay) +
  Number(housingAllowance) +
  Number(transportAllowance) +
  Number(otherAllowance);
console.log(grossPay);
const totalDeductions =
  Number(napsaFee) +
  Number(nhimaFee) +
  Number(payeTax) +
  Number(thirdPartyRecovery) +
  Number(lupiyaLoanRecovery) +
  Number(otherDeductions);
const netPay = Number(grossPay - totalDeductions);
const maxInstallment = 0.4 * netPay;
console.log(
  `Gross pay is K${grossPay}, total deductions add up to K${totalDeductions} making the net pay K${netPay}.`
);

console.log(
  eligibilityCalculator(
    Number(interest),
    Number(loanTerm),
    Number(maxInstallment)
  )
);
