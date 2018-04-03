import { ListviewComponent } from './listview/listview.component';
import { ListviewModule } from './listview/listview.module';
import { TemplateDirective } from './shared/template.directive';
import { CardorlistviewComponent } from './cardorlistview/cardorlistview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardorlistviewModule } from './cardorlistview/cardorlistview.module';
import { ListitemDirective } from './cardorlistview/listitem.directive';
import { CarditemDirective } from './cardorlistview/carditem.directive';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CardorlistviewModule,
    SharedModule,
    ListviewModule
  ],
  declarations: [],
  exports : [CarditemDirective,
             ListitemDirective,
             CardorlistviewComponent,
             TemplateDirective,
             ListviewComponent]
})
export class ControlsModule { }
