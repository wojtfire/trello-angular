import { ListItem } from './list-item.model';

export class List {
  items: ListItem[] = [];

  constructor(public name: string) {
    this.name = name;
  }
}
