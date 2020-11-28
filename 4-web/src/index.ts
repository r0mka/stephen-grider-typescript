import { User } from './models/User';

const user = User.buildUser({ id: 1 });

user.on('change', () => {
  console.log(user);
});

user.set({ name: 'Roman', age: 32 });
user.save();
user.fetch();
