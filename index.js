// Triangle calculate
function triangleCalculate() {
    // triangle base
    const triangleBaseField = document.getElementById('triangle-base');
    const triangleBaseValue = triangleBaseField.value;
    const base = parseFloat(triangleBaseValue);

    // triangle height
    const triangleHeightField = document.getElementById('triangle-height');
    const triangleHeightValue = triangleHeightField.value;
    const height = parseFloat(triangleHeightValue);


    // Aria calculation
    const aria = 0.5 * base * height;

    // Aria value
    const ariaValue = document.getElementById('aria-value');
    ariaValue.innerText = aria;

}