import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MUtilisateur } from 'src/app/views/Models/Utilisateur';
import { environment } from 'src/environments/environment';

const AUTH_API = environment.baseURL;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'api/login', {
      login: credentials.login,
      password: credentials.password
    }, httpOptions);
  }

  register(utilisateur): Observable<MUtilisateur>{ 
    return this.http.post<MUtilisateur>(AUTH_API + 'api/inscription',utilisateur, httpOptions);
  }

  public signOut(): void {
    window.sessionStorage.clear();
  }


}
