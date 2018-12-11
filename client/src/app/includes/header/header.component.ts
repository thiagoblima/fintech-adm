import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public grupoEconomico: Array<Object>;
  constructor() { }

  ngOnInit() {
    this.grupoEconomico = [
      {
        name: 'Visão Agregada 1',
        group: 1
      },
      {
        name: 'Visão Agregada 2',
        group: 2
      }
    ];
  }

}
