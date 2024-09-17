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
    if (document.getElementById('custom-glassware').checked) {
        addOnsPrice += 100; // $100 for Customized Glassware
    }
    if (document.getElementById('custom-drink-menu').checked) {
        addOnsPrice += 150; // $150 for Customized Drink Menu
    }
    if (document.getElementById('themed-garnishes').checked) {
        addOnsPrice += 75; // $75 for Themed Garnishes
    }
    if (document.getElementById('mocktail-station').checked) {
        addOnsPrice += 150; // $150 for Mocktail Station
    }
    if (document.getElementById('selfie-wall').checked) {
        addOnsPrice += 250; // $250 flat rate for Selfie Wall and Camera
    }
    if (document.getElementById('champagne-service').checked) {
        addOnsPrice += 175; // $175 for Champagne Service
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
}

function updateAddOns() {
    const guestCount = document.getElementById('guest-count').value;

    // Dynamically update add-on prices based on number of guests
    if (guestCount > 0) {
        document.querySelector('label[for="custom-cocktail"]').textContent = `Custom Cocktail Menu ($${guestCount * 5} total)`;
    }
}
