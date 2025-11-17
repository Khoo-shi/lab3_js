//  Constructor (OOP)
function ToyCar(name, scale, color, price, length, width, height, material, brand, year, features) {
    this.name = name;
    this.scale = scale;
    this.color = color;
    this.price = price;
    this.length = length;
    this.width = width;
    this.height = height;
    this.material = material;
    this.brand = brand;
    this.year = year;
    this.features = features; // array

    // Method: return formatted information
    this.getInfo = function() {
        return `
            <strong>${this.name}</strong><br>
            Brand: ${this.brand}<br>
            Scale: ${this.scale}<br>
            Color: ${this.color}<br>
            Price: $${this.price}<br>
            Dimensions: ${this.length} x ${this.width} x ${this.height} cm<br>
            Material: ${this.material}<br>
            Year: ${this.year}<br>
            Features: ${this.features.join(", ")}
        `;
    };
}

//  object
const mustang = new ToyCar(
    "1:24 2020 Ford Mustang GT",
    "1:24",
    "Black",
    29.99,
    19,
    8,
    6,
    "Die-cast metal",
    "ModelToyCars",
    2020,
    ["Opening doors", "Rubber tires", "Detailed interior"]
);


const container = document.getElementById("car-container");
container.innerHTML = mustang.getInfo();


// List to hold multiple cars
let cars = [];

// When button is clicked → create a new ToyCar
document.getElementById("addCarBtn").addEventListener("click", function() {

    const car = new ToyCar(
        document.getElementById("name").value,
        document.getElementById("scale").value,
        document.getElementById("color").value,
        Number(document.getElementById("price").value),
        Number(document.getElementById("length").value),
        Number(document.getElementById("width").value),
        Number(document.getElementById("height").value),
        document.getElementById("material").value,
        document.getElementById("brand").value,
        Number(document.getElementById("year").value),
        document.getElementById("features").value.split(",")
    );

    cars.push(car);
    displayCars();
});

// Show all cars
function displayCars() {
    let output = "";

    cars.forEach((c, i) => {
        output += `<div><strong>Car ${i + 1}</strong><br>${c.getInfo()}</div><hr>`;
    });

    document.getElementById("car-list").innerHTML = output;
}

