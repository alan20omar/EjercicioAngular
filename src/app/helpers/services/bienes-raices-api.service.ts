import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BienesRaicesApiService {
  private API_BASE_URL: string = environment.BIENES_RAICES_API_BASE_URL;
  constructor(
    private httpClient: HttpClient
  ) { }

  postEstadoCivil(): Observable<any> {
    return this.httpClient.post<any>(`${this.API_BASE_URL}/BienesRaicesApi/api/services/app/Catalogo/EstadoCivil`,{});
  }
}
