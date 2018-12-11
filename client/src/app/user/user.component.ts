import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public users: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((users: User) => this.users = users);
  }

}
