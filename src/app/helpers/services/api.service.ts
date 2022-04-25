import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import LoginModel from 'src/app/models/loginModel';
import LoginResModel from 'src/app/models/loginResModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_BASE_URL: string = environment.API_BASE_URL;
  constructor(
    private httpClient: HttpClient
  ) { }

  postLogin(data: LoginModel): Observable<LoginResModel>{
    return this.httpClient.post<LoginResModel>(`${this.API_BASE_URL}/login`, data);
  }

}
