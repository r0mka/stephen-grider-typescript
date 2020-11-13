import faker from 'faker';

class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor(name: string) {
    this.name = name;
  }
}
