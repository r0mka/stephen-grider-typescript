import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
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
const rootUrl = 'https://localhost:3000/users';
export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }
  get get() {
    return this.attributes.get;
  }
}
