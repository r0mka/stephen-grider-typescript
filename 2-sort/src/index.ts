import { CharachtersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { LinkedList } from './LinkedList';

import { Sorter } from './Sorter';

// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const numberSorter = new Sorter(numbersCollection);
// numberSorter.sort();
// console.log(numbersCollection);

// const charachtersCollection = new CharachtersCollection('RomanoFf');
// const sorter = new Sorter(charachtersCollection);
// sorter.sort();

// console.log(charachtersCollection);

const list = new LinkedList();
for (let i = 1; i < 11; i++)
  list.add(Math.floor(Math.random() * 100));

const sorter = new Sorter(list);
sorter.sort();
list.print();
