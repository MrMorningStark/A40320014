const { windowSize } = require("../constant");
var prevState = [];
var currState = [];

const avgCalculator = async (req, res) => {
    let { numberid } = req.params;

    try {
        var averageOfNumbers = 0;
        var numbersFromApi = [];
        switch (numberid) {
            case 'p':
                numbersFromApi = [1, 2, 3];
                let last10Numbers = numbersFromApi.slice(-10);
                if (currState.length != 0) {
                    prevState.push(...currState);
                    prevState = prevState.slice(-10);
                }
                currState.push(...last10Numbers);
                currState = currState.slice(-10);
                averageOfNumbers = currState.reduce((a, b) => a + b, 0) / currState.length;
                break;
            case "f":
            case "e":
            case 'r':
        }

        return res.status(200).json({
            numbers: numbersFromApi,
            windowPrevState: prevState,
            windowCurrState: currState,
            avg: averageOfNumbers
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    avgCalculator
}