import { ListItem } from './list-item.model';

export class List {
  items: ListItem[] = [];

  constructor(public name: string, public id: number) {
    this.name = name;
    this.id = id;
  }
}
