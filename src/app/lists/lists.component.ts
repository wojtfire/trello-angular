import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { List } from '../model/list.model';
import { ListItem } from '../model/list-item.model';

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

  onAddItem(list: List) {
    if (list) {
      this.lists
        .find(actualList => actualList.name === list.name)
        .items.push({
          name: '',
          description: '',
          comment: ''
        });
    }
  }

  onAddList() {}
}
