interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

interface Reportable {
  summary(): string;
}

const civic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary() {
    return `Name: ${this.name}`;
  },
};

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: 2,
};

// if we use vehicle in different functions we would have to
// duplicate our code
// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`name: ${vehicle.name}`);
//   console.log(`name: ${vehicle.year}`);
//   console.log(`name: ${vehicle.broken}`);
// };
// const printVehicle = (vehicle: Vehicle): void => {
//   console.log(`name: ${vehicle.name}`);
//   console.log(`name: ${vehicle.year}`);
//   console.log(`name: ${vehicle.broken}`);
// };

// printVehicle(civic);
// console.log(civic.summary());

// error because oldCivic doesn't match description of Vehicle
// printVehicle(oldCivic);

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(civic);
printSummary(drink);
