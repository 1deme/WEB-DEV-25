// Factory function to create car objects
function Factory(model, price, maxSpeed) {
    return {
        model,
        price,
        maxSpeed,
        // Function that logs "Running!" and the price of the car
        run: function() {
            console.log("Running! Price:", this.price);
        }
    };
}

// Array of car objects created by the Factory
const cars = [
    Factory('Model A', 20000, 180),
    Factory('Model B', 15000, 160),
    Factory('Model C', 25000, 200),
    Factory('Model A', 22000, 210),
    Factory('Model D', 10000, 140)
];

// ----- 1. Get the fastest specific model (using for loop) -----
function getFastestSpecificModel(cars, modelName) {
    let fastestModel = '';
    let fastestSpeed = -Infinity;
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].model === modelName && cars[i].maxSpeed > fastestSpeed) {
            fastestModel = cars[i].model;
            fastestSpeed = cars[i].maxSpeed;
        }
    }
    return fastestModel;  // Return the model name
}

// ----- 2. Get cars with prices within a range [i, r] (using for loop) -----
function getCarsInPriceRange(cars, i, r) {
    let filteredCars = [];
    for (let j = 0; j < cars.length; j++) {
        if (cars[j].price >= i && cars[j].price <= r) {
            filteredCars.push(cars[j].model);  // Store only the model name
        }
    }
    return filteredCars;
}

// ----- 3. Get the cheapest model (using for loop) -----
function getCheapestModel(cars) {
    let cheapestModel = '';
    let cheapestPrice = Infinity;
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].price < cheapestPrice) {
            cheapestModel = cars[i].model;
            cheapestPrice = cars[i].price;
        }
    }
    return cheapestModel;  // Return the model name
}

// ----- 4. Get the fastest model (using for loop) -----
function getFastestModel(cars) {
    let fastestModel = '';
    let fastestSpeed = -Infinity;
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].maxSpeed > fastestSpeed) {
            fastestModel = cars[i].model;
            fastestSpeed = cars[i].maxSpeed;
        }
    }
    return fastestModel;  // Return the model name
}

// Testing the functions
const fastestModelA = getFastestSpecificModel(cars, 'Model A');
console.log("Fastest Model A:", fastestModelA);

const carsInRange = getCarsInPriceRange(cars, 15000, 25000);
console.log("Cars in price range 15000-25000:", carsInRange);

const cheapestModel = getCheapestModel(cars);
console.log("Cheapest Model:", cheapestModel);

const fastestModel = getFastestModel(cars);
console.log("Fastest Model:", fastestModel);
