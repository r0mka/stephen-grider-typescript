import { User } from './models/User';

const user = new User({ id: 1 });
user.fetch();

setTimeout(() => {
  console.log(user);
  console.log(user.get('name'));
}, 4000);
