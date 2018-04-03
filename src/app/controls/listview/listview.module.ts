import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListviewComponent } from './listview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListviewComponent],
  exports : [ListviewComponent]
})
export class ListviewModule { }
