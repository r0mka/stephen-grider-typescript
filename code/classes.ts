class Vehicle {
  constructor(private color: string) {}
  //  color: string;
  //   constructor(color: string) {
  //     this.color = color;
  //   }

  protected honk(): void {
    console.log('beep beep');
  }
}

const vehicle = new Vehicle('orange');
// console.log(vehicle);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
console.log(car);
car.startDrivingProcess();
