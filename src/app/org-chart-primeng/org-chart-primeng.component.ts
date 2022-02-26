import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-org-chart-primeng',
  templateUrl: './org-chart-primeng.component.html',
  styleUrls: ['./org-chart-primeng.component.scss'],
})
export class OrgChartPrimengComponent implements OnInit {
  @Input('data') data!: any;
  constructor() {}

  ngOnInit() {
    this.mapData();
    this.data = this.convertToTree(this.data);
  }

  mapData() {
    this.data = this.data.map((e: Employee) => {
      let code = e.code.split('.');
      return {
        id: code[code.length - 1],
        type: 'person',
        styleClass: 'p-person',
        expanded: true,
        label: code[code.length - 1],
        data: {
          name: e.name,
          avatar: e.imagePath,
          code: code[code.length - 1],
        },
        parentId: code[code.length - 2] ? code[code.length - 2] : '0',
        children: null,
      };
    });
  }

  convertToTree(list: any[]) {
    let map: { [key: string]: any } = {},
      node,
      roots = [],
      i;

    list.forEach((element, i) => {
      map[element.id] = i;
      list[i].children = [];
    });

    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      if (node.parentId !== '0') {
        // if you have dangling branches check that map[node.parentId] exists
        list[map[node.parentId]].children.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots;
  }
}
