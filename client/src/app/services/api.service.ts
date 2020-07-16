import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  constructor(
    private readonly http: HttpClient
  ) { }

  public loadUsers() {
    const url = `${environment.apiBaseUrl}/api/users`;
    return this.http.get(url);
  }

  public loadUserById(id: number) {
    const url = `${environment.apiBaseUrl}/api/users/${id}`;
    return this.http.get(url) as Observable<any>;
  }

}
