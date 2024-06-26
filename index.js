const {
    convertMilesToKm,
    convertCelsiusToFahrenheit,
    convertLbsToKg,
    convertFtToM,
    multiplyNumbers,
    divideNumbers,
} = require("./functions_module")

const http = require('http');
function handler(req, res) {
    const url = req.url;
    console.log("url:", url)

    const [, operation, num1, num2] = req.url.split("/");

    let result = ""
    switch (operation) {
        case "milestokm":
            result = convertMilesToKm(Number(num1));
            res.end(`${num1} miles converted to km: ${result} km.`);
            break;
        case "celsiustofahrenheit":
            result = convertCelsiusToFahrenheit(Number(num1));
            res.end(`${num1} Celisus converted to Fahrenheit is: ${result} Fh.`)
            break;
        case "lbstokg":
            result = convertLbsToKg(Number(num1));
            res.end(`${num1} lbs converted to kg: ${result} kg`);
            break;
        case "feettometers":
            result = convertFtToM(Number(num1));
            res.end(`${num1} Feet to meteres: ${result}`);
            break;
        case "multiply":
            result = multiplyNumbers(Number(num1), Number(num2));
            res.end(`${num1} multipled by ${num2} is: ${result}.`);
            break;
        case "division":
            result = divideNumbers(Number(num1), Number(num2));
            res.end(`${num1} divided by ${num2} is: ${result}`);
            break;
        default:
            res.end("Invalid request, please make an operation!")
    }
}


const calculatorServer = http.createServer(handler);
calculatorServer.listen(10000, () => {
    console.log("Server started!")
})
