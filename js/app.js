function Auto(brend, model, yerOfManufacture, vin) {

    this.brend = brend;
    this.model = model;
    this.yerOfManufacture = yerOfManufacture;
    this.vin = vin;

}

Auto.prototype.log = function () {
    console.log(`${this.brend} ${this.model} ${this.yerOfManufacture}`);
}

Auto.prototype.chekVin = function () {
    return this.vin.length === 16 ? true : false;
}

let skoda = new Auto("Skoda", "Kodiaq", 2021, "123456789123456");
let volkswagen = new Auto("Volkswagen", "Tuareg", 2018, "5234567123456789");

function Auto_Fuel(brend, model, yerOfManufacture, vin, engineVolume, consumptionInLiters) {

    this.brend = brend;
    this.model = model;
    this.yerOfManufacture = yerOfManufacture;
    this.vin = vin;
    this.engineVolume = engineVolume;
    this.consumptionInLiters = consumptionInLiters;

}

Auto_Fuel.prototype = Object.create(Auto.prototype);

Auto_Fuel.prototype.showFuelConsumption = function () {
    console.log(`${this.engineVolume} L. ${this.consumptionInLiters} L. per 100 km`);
}

let nissan = new Auto_Fuel("Nissan", "Rouge", 2017, "7234567123456787", "2.5", 13);

function Auto_Electric(brend, model, yerOfManufacture, vin, batteryConfig) {

    this.brend = brend;
    this.model = model;
    this.yerOfManufacture = yerOfManufacture;
    this.vin = vin;
    this.batteryConfig = batteryConfig;

}

Auto_Electric.prototype = Object.create(Auto.prototype);

Auto_Electric.prototype.showBatteryConfig = function () {
    console.log(`${this.batteryConfig} kW/h`);
}

let tesla = new Auto_Electric("Tesla", "Model X", 2020, "5554567123456787", 100);
