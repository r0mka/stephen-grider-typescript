import { Eventing } from './Eventing';
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
// Option #1
// Accepting dependencies as second constructor argument

// Option #2
// Only accept dependencies into constructor
// Define a static class method to preconfigure
// User and assign properties afterwards

// Option #3
// Only accept properties into constructor
// Hard code dependencies as class properties

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}
  get(propName: string): number | string {
    return this.data[propName];
  }
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
