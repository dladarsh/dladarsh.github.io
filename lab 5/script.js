const billInput        = document.getElementById("billTotal");
const tipSlider       = document.getElementById("tipSlider");
const tipPercent      = document.getElementById("tipPercent");
const tipAmount       = document.getElementById("tipAmount");
const totalWithTax    = document.getElementById("totalWithTax");
const totalWithTipTax = document.getElementById("totalWithTipTax");
const errorMsg        = document.getElementById("errorMsg");
const currencySelect  = document.getElementById("currency");
const conversionRateDisplay = document.getElementById("conversionRateDisplay");
const convertedTip    = document.getElementById("convertedTip");
const convertedTotal  = document.getElementById("convertedTotal");

// Extra credit rates
const rates = {
  usd: 1,
  inr: 85,
  eur: 0.95
};

// Fire on any form change or currency switch
document.getElementById("tipForm").addEventListener("input", calculateTip);
currencySelect.addEventListener("change", calculateTip);

function calculateTip() {
  const billValue = parseFloat(billInput.value);
  const tipVal    = parseInt(tipSlider.value, 10);

  // Reset on zero
  if (billValue === 0) {
    clearFields();
    return;
  }

  // Validate
  if (isNaN(billValue) || billValue < 0) {
    errorMsg.textContent = "Please enter a valid positive number for the bill.";
    clearFields();
    return;
  } else {
    errorMsg.textContent = "";
  }

  // Show tip % in disabled input
  tipPercent.value = tipVal + "%";

  // 11% tax
  const tax        = billValue * 0.11;
  const totalTaxed = billValue + tax;
  totalWithTax.value = totalTaxed.toFixed(2);

  // Tip based on original bill
  const tipAmt     = billValue * (tipVal / 100);
  tipAmount.value  = tipAmt.toFixed(2);

  // Grand total = bill + tax + tip
  const grandTotal = totalTaxed + tipAmt;
  totalWithTipTax.value = grandTotal.toFixed(2);

  // Currency conversion
  const curr = currencySelect.value;
  const rate = rates[curr];
  conversionRateDisplay.textContent = `1 USD = ${rate} ${curr.toUpperCase()}`;

  convertedTip.value   = (tipAmt * rate).toFixed(2);
  convertedTotal.value = (grandTotal * rate).toFixed(2);
}

function clearFields() {
  tipPercent.value      = "";
  totalWithTax.value    = "";
  tipAmount.value       = "";
  totalWithTipTax.value = "";
  convertedTip.value    = "";
  convertedTotal.value  = "";
  conversionRateDisplay.textContent = "";
}

