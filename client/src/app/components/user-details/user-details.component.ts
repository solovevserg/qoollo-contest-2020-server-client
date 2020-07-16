import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cb-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  public user = this.api.loadUserById(
    Number(this.route.snapshot.queryParamMap['id'])
  );

  constructor(
    private readonly api: ApiService,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

}
