
//                      DAY 7
//  01. class
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

     getInfo() {
         return `The Car is a ${this.brand} ${this.model}`;
    }
}

//  02. object
 class Car {
     constructor(brand, model) {
         this.brand = brand;
         this.model = model;
    }

     getInfo() {
         return `The Car is a ${this.brand} ${this.model}`;
    }
 }

 let myCar2 = new Car("Toyota", "vios")
 console.log(myCar2.getInfo())

//  03. inheritance
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    getInfo() {
        return `The Car is a ${this.brand} ${this.model}`;
    }
}

class ElectricCar extends Car {
    constructor(brand, model, baterryCapacity) {
        super(brand, model);
        this.baterryCapacity = baterryCapacity;
    }

    getInfo() {
        return `The car is ${super.getInfo()} and has a battery capacity of ${this.baterryCapacity}`
    }
}

let myCar3 = new Car("Toyota", "vios", 100);
console.log(myCar3.getInfo());

//  04. polymorphism
class Vehicle {
    drive() {
        return "The Vehicle is Being Driven";
    }
}

class Car {
    drive() {
        return "The Car is Being Driven"
    }
}

class ElectricCar extends Car {
    drive() {
        return "The Electric Car is Driven silently"
    }
}

let myVehicle = new Vehicle();
let myCar4 = new Car();
let myEletricCar = new ElectricCar();

console.log(myVehicle.drive());
console.log(myCar4.drive());
console.log(myEletricCar.drive());

//  05. abstraction
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    get brand() {
        return this.#brand;
    }

    get model() {
        return this.#model;
    }   
}

let myCar5 = new Car ("toyota", "Vios");
console.log(myCar5.brand);
console.log(myCar5.model);

//  06. encapsulation
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    get brand() {
        return this.#brand;
    }

    set brand(brand) {
        if (brand === "") {
            console.log("Brnad can't be Emptying");
            return;
        }
    }

    get model() {
        return this.#model;
    }
    
    set model(model) {
        if (model === "") {
            console.log("Model can't be Emptying");
            return;
        }
    }
}









//                      DAY 8
// foreach
// maggil sebagai perualangan menjadi item yang sama / langsung jalan atau mengulang tanpa ditampung
const arr = [1, 2, 3, 4, 5];
arr.forEach(function(item) {
    let number = item * 2;
    console.log(number)
});

// map
// ngerturn value baru / mengirimkan data baru / ditampung dulu tidak seperti foreach
const arr2 = [1, 2, 3, 4, 5];
const double = arr2.map((item) => {
    return item * 2;
});
console.log(double)

// filter
// 
const arr3 = [1, 2, 3, 4, 5]
const eventNumber = arr3.filter(function(item) {
    return item % 2 == 0
});

// reduce
// mengembalikan value yang di dapat dari panggilan seluruh elemnt yang ada di array
const arr4 = [ 1, 2, 3, 4, 5]
const sum = arr4.reduce(function(total, item) {
    return total + item;
}, 5);
console.log(sum);


// callback    bek kiri bek kanan
// memanggil fungsi yang sama, 1 function akan berjalan jika function lain berjalan
// dan 1 fuction tidak akan berjalan jika fuction lain tidak jalan
function satu() {
    console.log("Hello World");
}

function dua() {
    console.log("Goodbye World");
}

function tiga(callback) {
    callback()
}
tiga(satu);
tiga(dua);

// costum hof that return another function 
function multiplyBy(n) {
    return function(x) {
        return x * n;
    };
}

// ngisi n
const duble = multiplyBy(2);
// ngisi x
console.log(duble(5));


function repeat(n, action) {
    for (let i = 0, i < n, i++) {
        action(i);
    }
}

function lognumber(x) {
    console.log(`The Number Is ${x}`);
}

repeat(3, lognumber);
