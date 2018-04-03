import { Component, OnInit, Input, ContentChild, TemplateRef,
         ViewChildren, QueryList, AfterViewInit, ContentChildren } from '@angular/core';
import { NgForOfContext } from '@angular/common';
import { TemplateDirective } from '../shared/template.directive';

@Component({
  selector: 'ngc-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss']
})
export class ListviewComponent implements AfterViewInit {

  @Input() items: any[] = [];

  @ContentChildren(TemplateDirective) templates: QueryList<any>;

  itemTemplate: TemplateRef<any>;

  constructor() { }

  ngAfterViewInit(): void {
    const _itemTemplate = this.templates.find(x => x.getType() === 'listItem');
    this.itemTemplate = _itemTemplate ? _itemTemplate.template : null;
  }

}
