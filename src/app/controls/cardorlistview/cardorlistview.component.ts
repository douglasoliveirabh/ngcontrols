import { CarditemDirective } from './carditem.directive';
import { Component, OnInit, Input, TemplateRef, ContentChild } from '@angular/core';
import { ListitemDirective } from './listitem.directive';

@Component({
  selector: 'app-cardorlistview',
  templateUrl: './cardorlistview.component.html',
  styleUrls: ['./cardorlistview.component.scss']
})
export class CardorlistviewComponent implements OnInit {

  constructor() { }

  @Input() items: any[] = [];

  @Input() mode: 'card' | 'list' = 'card';

  // Read in our structural directives as TemplateRefs
  @ContentChild(CarditemDirective, {read: TemplateRef}) cardItemTemplate;
  @ContentChild(ListitemDirective, {read: TemplateRef}) listItemTemplate;

  ngOnInit() {
  }

}
