import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardorlistviewComponent } from './cardorlistview.component';

describe('CardorlistviewComponent', () => {
  let component: CardorlistviewComponent;
  let fixture: ComponentFixture<CardorlistviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardorlistviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardorlistviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
