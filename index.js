//! Start by creating the variables for the data recorded
const day1TempF = 32
const day2TempC = 25
const day3TempF = 70
const day4TempC = 18
const day5TempF = 80
const day6TempC = 15
const day7TempF = 72
const day8TempC = 28
const day9TempF = 68
const day10TempC = 20
const day11TempF = 75
const day12TempC = 23
const day13TempF = 82
const day14TempC = 30
const day15TempF = 65
const day16TempC = 22
const day17TempF = 77
const day18TempC = 26
const day19TempF = 78
const day20TempC = 24
const day21TempF = 73
const day22TempC = 21
const day23TempF = 79
const day24TempC = 27
const day25TempF = 71
const day26TempC = 19
const day27TempF = 74
const day28TempC = 17
const day29TempF = 76
const day30TempC = 29

//! Start the calculation of the total temperatures

const totalFOriginal = day1TempF + day3TempF + day5TempF + day7TempF + day9TempF +
                        day11TempF + day13TempF + day15TempF + day17TempF + day19TempF +
                        day21TempF + day23TempF + day25TempF + day27TempF + day29TempF;

 const totalCOriginal = day2TempC + day4TempC + day6TempC + day8TempC + day10TempC +
                        day12TempC + day14TempC + day16TempC + day18TempC + day20TempC +
                        day22TempC + day24TempC + day26TempC + day28TempC + day30TempC;

const totalCtoF = (totalCOriginal * 9 / 5) + (15 * 32);
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius
const tot_temperature_in_fahrenheit = totalFOriginal + totalCtoF;
const tot_temperature_in_celsius = totalCOriginal + (totalFOriginal - (15 * 32)) * 5/9;

//! Start the calculation of the average temperatures
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;

//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like
console.log("Total °F:", tot_temperature_in_fahrenheit);
console.log("Total °C:", tot_temperature_in_celsius);
console.log("Average °F:", avg_temperature_in_fahrenheit);
console.log("Average °C:", avg_temperature_in_celsius);
//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};