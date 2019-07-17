import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { List } from '../../model/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list: List;
  @Output() newListItem = new EventEmitter<{ list: List; name: string }>();
  newListItemToCreate = false;
  listItemNameFormGroup: FormGroup;

  constructor() {}

  ngOnInit() {
    this.listItemNameFormGroup = new FormGroup({
      name: new FormControl(null, [Validators.required])
    });
  }

  addListItem(currentList: List) {
    this.newListItem.emit({
      list: currentList,
      name: this.listItemNameFormGroup.value.name
    });
    this.listItemNameFormGroup.reset();
  }

  hideAddListItemForm() {
    this.newListItemToCreate = !this.newListItemToCreate;
  }

  showListItemForm() {
    this.newListItemToCreate = !this.newListItemToCreate;
  }
}
