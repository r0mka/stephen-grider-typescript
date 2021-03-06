import { Sorter } from './Sorter';

export class CharachtersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLocaleLowerCase() >
      this.data[rightIndex].toLocaleLowerCase()
    );
  }
  swap(leftIndex: number, rightIndex: number): void {
    const charachters = this.data.split('');

    const leftHand = charachters[leftIndex];
    charachters[leftIndex] = charachters[rightIndex];
    charachters[rightIndex] = leftHand;

    this.data = charachters.join('');
  }
}
