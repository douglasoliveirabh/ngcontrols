import { CommonModule } from '@angular/common';
import { CardorlistviewComponent } from './cardorlistview.component';
import { NgModule } from '@angular/core';
import { CarditemDirective } from './carditem.directive';
import { ListitemDirective } from './listitem.directive';


@NgModule({
  imports: [CommonModule],
  declarations: [CardorlistviewComponent, CarditemDirective, ListitemDirective],
  exports: [CardorlistviewComponent, CarditemDirective, ListitemDirective]
})
export class CardorlistviewModule {}
