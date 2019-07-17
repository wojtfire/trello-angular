import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { List } from '../../model/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list: List;
  @Output() newListItem = new EventEmitter<List>();

  constructor() {}

  ngOnInit() {}

  addListItem(list: List) {
    this.newListItem.emit(list);
  }
}
