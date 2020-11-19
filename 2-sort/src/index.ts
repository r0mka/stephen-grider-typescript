import { CharachtersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { LinkedList } from './LinkedList';

import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);

numbersCollection.sort();

console.log(numbersCollection.data);

const charachtersCollection = new CharachtersCollection('RomanoFf');

charachtersCollection.sort();

console.log(charachtersCollection);

const linkedList = new LinkedList();
linkedList.add(-5);
linkedList.add(100);
linkedList.add(-2);
linkedList.add(43);
linkedList.add(23);

linkedList.sort();
linkedList.print();
