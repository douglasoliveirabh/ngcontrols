import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  mode = 'card';
  items = [
    {
      id: 1,
      nome: 'Douglas Everton'
    },
    {
      id: 2,
      nome: 'Isabelle Vilela'
    }
  ];

  @Output()
  appdata: any[] = [
    {id: 1, nome: 'douglas'},
    {id: 2, nome: 'jose'},
    {id: 2, nome: 'geraldo'}
  ];
}
