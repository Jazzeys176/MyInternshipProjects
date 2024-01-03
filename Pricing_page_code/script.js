var prices = {
  "STUDENT": {"USD": "$5", "EUR": "€5", "INR": "₹330", "GBP": "£5", "CAD": "C$9","AUD": "A$7"},
  "INDIVIDUAL": {"USD": "$10", "EUR": "€10", "INR": "₹800", "GBP": "£9", "CAD": "C$17","AUD": "A$16"},
  "FAMILY": {"USD": "$30", "EUR": "€27", "INR": "₹2250", "GBP": "£24", "CAD": "C$42","AUD": "A$39"},
};


function updatePrices() {
  
  var selectedCurrency = document.getElementById("Currency").value;

  
  updatePriceElement("Price-1", "STUDENT", selectedCurrency);
  updatePriceElement("Price-2", "INDIVIDUAL", selectedCurrency);
  updatePriceElement("Price-3", "FAMILY", selectedCurrency);
}

function updatePriceElement(elementId, plan, currency) {
  var priceElement = document.getElementById(elementId);
  var priceValue = prices[plan][currency];
  priceElement.textContent = priceValue + "/month";
}
