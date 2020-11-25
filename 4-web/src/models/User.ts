import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';
interface UserProps {
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

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }
  save(): void {
    const id = this.get('id');
    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post('http://localhost:3000/users', this.data);
    }
  }
}
