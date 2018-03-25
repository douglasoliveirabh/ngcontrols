import { CardorlistviewComponent } from './cardorlistview/cardorlistview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardorlistviewModule } from './cardorlistview/cardorlistview.module';
import { ListitemDirective } from './cardorlistview/listitem.directive';
import { CarditemDirective } from './cardorlistview/carditem.directive';

@NgModule({
  imports: [
    CommonModule,
    CardorlistviewModule
  ],
  declarations: [],
  exports : [CarditemDirective, ListitemDirective, CardorlistviewComponent]
})
export class ControlsModule { }
