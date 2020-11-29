import { User } from './models/User';

const collection = User.buildUserCollection();

collection.on('change', () => console.log('COLLECTION CHANGED'));
collection.fetch();
console.log(collection);
