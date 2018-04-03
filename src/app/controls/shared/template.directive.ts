import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngcTemplate]'
})
export class TemplateDirective {
  @Input() ngcTemplate: string;

  constructor(public template: TemplateRef<any>) {
  }

  getType(): string {
    return this.ngcTemplate;
  }
}
