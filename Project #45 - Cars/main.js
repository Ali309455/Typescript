"use strict";
// Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function store_car_info(manufacturer, model, ...options) {
    let car = {
        manufacturer,
        model,
    };
    options.forEach(option => {
        car[option[0]] = option[1];
    });
    return car;
}
const car1 = store_car_info('Toyota', 'Corolla', ['color', 'blue'], ['year', 2021], ['feature', 'sunroof']);
const car2 = store_car_info('Tesla', 'Model S', ['color', 'red'], ['autopilot', true]);
console.log(car1);
console.log(car2);
