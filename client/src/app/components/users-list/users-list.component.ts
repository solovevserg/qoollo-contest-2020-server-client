import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'cb-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users = this.api.loadUsers();

  constructor(
    private readonly api: ApiService
  ) { }

  ngOnInit(): void {
  }

}
