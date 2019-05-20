import { ListItem } from "./list-item/list-item.model";

export class List {
  public items: ListItem[] = [];

  constructor(public name: string) {}
}
