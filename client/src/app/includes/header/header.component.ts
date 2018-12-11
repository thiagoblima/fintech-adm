import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public grupoEconomico: Array<Object>;
  public users: User;
  constructor(private userService: UserService) { }

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

    this.userService.getAllUsers().subscribe((users: User) => this.users = users);

  }

}
