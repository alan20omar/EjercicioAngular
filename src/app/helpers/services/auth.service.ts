import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieOptions, CookieService } from 'ngx-cookie';
import { Observable, tap } from 'rxjs';
import { ApiService } from './api.service';
import LoginData from 'src/app/models/loginModel';
import UserModel from 'src/app/models/userModel';
import LoginResModel from 'src/app/models/loginResModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private api: ApiService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  login(username: string, password: string): Observable<LoginResModel>{
    const data: LoginData = {
      username,
      password
    };
    return this.api.postLogin(data).pipe(
      tap({
        next: (data: LoginResModel) => {
          const expires: Date = new Date();
          expires.setDate(expires.getDate() + 1);
          const options: CookieOptions = {
            expires,
            secure: true,
            // httpOnly: true
          };
          this.cookieService.put('auth', data.data.token, options);
          const infUsuario = data.data.infUsuario;
          const userData: UserModel = {
            apellidoMaterno: infUsuario.apellidoMaterno,
            apellidoPaterno: infUsuario.apellidoPaterno,
            bloqueado: infUsuario.bloqueado,
            email: infUsuario.email,
            fechaCreacion: infUsuario.fechaCreacion,
            idUser: infUsuario.idUser,
            loginName: infUsuario.loginName,
            nombre: infUsuario.nombre,
          }
          this.cookieService.putObject('user', userData, options);
          this.router.navigate(['user']);
        },
        error: (error) => {
          console.error('Ocurrio un error', error);
        }
      })
    );
  }
}
