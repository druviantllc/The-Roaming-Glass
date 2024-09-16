function calculatePrice() {
  const guestCount = document.getElementById('guest-count').value;
  const hours = document.getElementById('hours').value;
  const noTipJar = document.getElementById('no-tip-jar').checked;

  let baseRate = guestCount <= 50 ? 150 : 175;
  let bartenders = Math.ceil(guestCount / 100); // 1 bartender per 100 guests
  let bartenderCost = (bartenders - 1) * 75; // Additional $75 per extra bartender

  let basePrice = baseRate * hours + bartenderCost;

  // Add-ons pricing
  let addOnsPrice = 0;
  if (document.getElementById('glassware').checked) {
      addOnsPrice += guestCount * 2; // $2 per guest for glassware
  }
  if (document.getElementById('garnishes').checked) {
      addOnsPrice += guestCount * 1; // $1 per guest for garnishes
  }
  if (document.getElementById('selfie-wall').checked) {
      addOnsPrice += 200; // $200 flat rate for selfie wall and camera
  }
  if (document.getElementById('custom-cocktail').checked) {
      addOnsPrice += guestCount * 5; // $5 per guest for custom cocktail menu
  }

  let totalPrice = basePrice + addOnsPrice;

  // Add gratuity if no tip jar is requested
  if (noTipJar) {
      totalPrice += totalPrice * 0.18;
      document.getElementById('gratuity-message').style.display = "block";
  } else {
      document.getElementById('gratuity-message').style.display = "none";
  }

  // Update the result section
  document.getElementById('total-price').textContent = totalPrice.toFixed(2);
  document.getElementById('bartender-count').textContent = bartenders;
}

function updateAddOns() {
  const guestCount = document.getElementById('guest-count').value;

  // Dynamically update add-on prices based on number of guests
  if (guestCount > 0) {
      document.querySelector('label[for="glassware"]').textContent = `Glassware ($${guestCount * 2} total)`;
      document.querySelector('label[for="garnishes"]').textContent = `Garnishes ($${guestCount * 1} total)`;
      document.querySelector('label[for="custom-cocktail"]').textContent = `Custom Cocktail Menu ($${guestCount * 5} total)`;
  }
}

