"use strict";
class Car {
    constructor(make, model, year) {
        (this.make = make), (this.model = model), (this.year = year);
    }
    getCarAge() {
        return new Date().getFullYear() - this.year;
    }
}
