// I added an event listener to the button element (which is "Calculator-Button") that would listen for the user to 'click' it.
document.getElementById('Calculator-Button').addEventListener('click', function() {

    // I created this line to retrieve the value inputted or entered by the user for the cost of petrol per liter. This input is then converted to a floating-point number.
    const PetrolCost = parseFloat(document.getElementById('PetrolCost').value);

    // Likewise, I created this line to retrieve the value inputted or entered by the user for the number of liters they have purchased. This input is then converted to a floating-point number.
    const PetrolLiterPurchased = parseFloat(document.getElementById('PetrolLiterPurchased').value);

    // I created this next line to retrieve the element where the total calculated cost will be displayed.
    const CalculatedTotalCostDisplay = document.getElementById('PetrolTotalCost');

    // This line is to calculate the total cost of petrol and display it.
    CalculatedTotalCostDisplay.textContent = (!isNaN(PetrolCost) && !isNaN(PetrolLiterPurchased)) ? (PetrolCost * PetrolLiterPurchased).toFixed(2) : ''; // I also used the toFixed(2) method to round the calculated value by two decimal places and return it as a string.
})