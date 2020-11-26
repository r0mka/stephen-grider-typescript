import { User } from './models/User';

const user = new User({ name: 'new record', age: 0 });

user.on('change', () => {
  console.log('CHANGE');
});
user.trigger('change');

console.log(user.get('name'));
