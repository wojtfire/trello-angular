import { Component, Output, OnInit } from '@angular/core';
import { List } from './list/list.model';
import { ListItem } from './list/list-item/list-item.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  lists: List[] = [
    new List('To do'),
    new List('In progress'),
    new List('Done')
  ];

  constructor() {}

  ngOnInit() {
    this.lists[0].items.push(
      new ListItem(
        'Think about UI for personal website',
        'Choose template, colors, animations.',
        ''
      )
    );
    this.lists[0].items.push(new ListItem('Item2', '', ''));
    this.lists[0].items.push(new ListItem('Item3', '', ''));

    this.lists[1].items.push(new ListItem('Item1.1', '', ''));
    this.lists[1].items.push(new ListItem('Item1.2', '', ''));
    this.lists[1].items.push(new ListItem('Item1.3', '', ''));
    this.lists[1].items.push(new ListItem('Item1.4', '', ''));
    this.lists[1].items.push(new ListItem('Item1.5', '', ''));

    this.lists[2].items.push(new ListItem('Item2.1', '', ''));
    this.lists[2].items.push(new ListItem('Item2.2', '', ''));
    this.lists[2].items.push(new ListItem('Item2.3', '', ''));
    this.lists[2].items.push(new ListItem('Item2.4', '', ''));
  }
}
