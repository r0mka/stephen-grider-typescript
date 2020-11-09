const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ['brown', true, 40];
pepsi[0] = 'red';
// pepsi[0] = 1; warning wrong type

const fanta: Drink = ['orange', true, 40];
const tea: Drink = ['brown', false, 10];

const carSpecs: [number, number] = [400, 2333];

const carStats = {
  horsePower: 400,
  weight: 2333,
};
