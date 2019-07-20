import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
  AfterViewInit
} from '@angular/core';
import { List } from '../model/list.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  @ViewChild('newItemWrapper') newItemWrapper: ElementRef;

  lists: List[] = [
    new List('To do', 1),
    new List('In progress', 2),
    new List('Done', 3)
  ];
  listNameFormGroup: FormGroup;
  newName: string;
  showListForm = false;
  windowOpen = false;

  constructor() {}

  ngOnInit() {
    this.listNameFormGroup = new FormGroup({
      name: new FormControl(null, [Validators.required])
    });

    this.lists[0].items.push({
      name: 'Think about UI for personal website bla bla bla',
      description: 'Choose template, colors, animations.',
      comment: '',
      priority: 'green'
    });
    this.lists[0].items.push({
      name: 'Think about UI for personal website',
      description: 'Choose template, colors, animations.',
      comment: '',
      priority: 'yellow'
    });
    this.lists[0].items.push({
      name: 'Think about UI for personal website',
      description: 'Choose template, colors, animations.',
      comment: '',
      priority: 'blue'
    });

    this.lists[1].items.push({
      name: 'Think about UI for personal website',
      description: 'Choose template, colors, animations.',
      comment: '',
      priority: 'purple'
    });
    this.lists[1].items.push({
      name: 'Think about UI for personal website',
      description: 'Choose template, colors, animations.',
      comment: '',
      priority: 'orange'
    });
    this.lists[1].items.push({
      name: 'Think about UI for personal website',
      description: 'Choose template, colors, animations.',
      comment: ''
    });
    this.lists[1].items.push({
      name: 'Think about UI for personal website',
      description: 'Choose template, colors, animations.',
      comment: ''
    });
    this.lists[1].items.push({
      name: 'Think about UI for personal website',
      description: 'Choose template, colors, animations.',
      comment: ''
    });

    this.lists[2].items.push({
      name: 'Think about UI for personal website',
      description: 'Choose template, colors, animations.',
      comment: ''
    });
    this.lists[2].items.push({
      name: 'Think about UI for personal website',
      description: 'Choose template, colors, animations.',
      comment: ''
    });
    this.lists[2].items.push({
      name: 'Think about UI for personal website',
      description: 'Choose template, colors, animations.',
      comment: ''
    });
    this.lists[2].items.push({
      name: 'Think about UI for personal website',
      description: 'Choose template, colors, animations.',
      comment: ''
    });
  }

  onAddItem(object: { list: List; name: string }) {
    if (object.name && object.list) {
      this.lists
        .find(actualList => actualList.id === object.list.id)
        .items.push({
          name: object.name,
          description: '',
          comment: ''
        });
    }
  }

  addList() {
    if (this.listNameFormGroup.valid) {
      let id = 0;
      this.lists.map(list => (list.id > id ? (id = list.id + 1) : (id = id)));
      this.lists.push(new List(this.listNameFormGroup.value.name, id));
      this.listNameFormGroup.reset();
    }
  }

  showAddListForm(event: Event) {
    this.showListForm = !this.showListForm;
    this.windowOpen = !this.windowOpen;
    event.preventDefault();
    event.stopPropagation();
  }

  hideAddListForm() {
    this.showListForm = !this.showListForm;
  }

  @HostListener('click', ['$event'])
  hideOnClickOutside(event: Event) {
    if (this.showListForm) {
      const parent = (event.target as HTMLElement).parentElement;
      if (!this.newItemWrapper.nativeElement.contains(parent)) {
        this.showListForm = false;
      }
    }
  }
}
