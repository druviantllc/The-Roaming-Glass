// Function to calculate the total price
function calculatePrice() {
    const guestCount = parseInt(document.getElementById('guest-count').value) || 0;
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const noTipJar = document.getElementById('no-tip-jar').checked;

    if (guestCount === 0 || hours === 0) {
        alert("Please enter valid numbers for guests and hours.");
        return;
    }

    // Base rate logic
    let baseRate = guestCount <= 50 ? 150 : 175;
    let basePrice = baseRate * hours;

    // Add-ons pricing
    let addOnsPrice = 0;
    if (document.getElementById('glassware').checked) {
        addOnsPrice += guestCount * 2; // $2 per guest for glassware
    }
    if (document.getElementById('garnishes').checked) {
        addOnsPrice += guestCount * 1; // $1 per guest for garnishes
    }
    if (document.getElementById('selfie-wall').checked) {
        addOnsPrice += 200; // $200 flat rate for selfie wall
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
}

// Function to update the add-on prices based on guest count
function updateAddOns() {
    const guestCount = parseInt(document.getElementById('guest-count').value) || 0;

    if (guestCount > 0) {
        document.querySelector('label[for="glassware"]').textContent = `Glassware ($${guestCount * 2} total)`;
        document.querySelector('label[for="garnishes"]').textContent = `Garnishes ($${guestCount * 1} total)`;
        document.querySelector('label[for="custom-cocktail"]').textContent = `Custom Cocktail Menu ($${guestCount * 5} total)`;
    }
}
