module.exports = function toReadable(num) {
    let arrUnits = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    let arrTenth = [
        ,
        ,
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (num < 20) {
        return arrUnits[num];
    }

    if (num >= 20 && num < 100) {
        return `${arrTenth[Math.trunc(num / 10)]} ${arrUnits[num % 10]}`
            .split("zero")
            .join(" ")
            .trim();
    }

    if (num >= 100 && num < 1000) {
        let tenth;
        let units = arrUnits[num % 10];

        if (num % 100 < 20) {
            tenth = arrUnits[num % 100];
            units = "";
        } else {
            tenth = arrTenth[Math.trunc((num % 100) / 10)];
        }

        return `${arrUnits[Math.trunc(num / 100)]} hundred ${tenth} ${units}`
            .split("zero")
            .join(" ")
            .trim();
    }
};
