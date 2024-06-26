// Miles to km

const convertMilesToKm = (miles) => {
    return miles * 1.6;
};

// Celsius to Fahrenheit

const convertCelsiusToFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
};

// lbs to kg

const convertLbsToKg = (lbs) => {
    return lbs * 0.4535;
};

// Ft to m

const convertFtToM = (ft) => {
    return ft * 0.3048;
};

// Multiply

const multiplyNumbers = (num1, num2) => {
    return num1 * num2;
};

// Division

const divideNumbers = (num1, num2) => {
    return num1 / num2;
};

module.exports = {
    convertMilesToKm,
    convertCelsiusToFahrenheit,
    convertLbsToKg,
    convertFtToM,
    multiplyNumbers,
    divideNumbers,
};
