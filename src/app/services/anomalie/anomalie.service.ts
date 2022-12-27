import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MAnomalie } from 'src/app/views/Models/Anomalie';
import { environment } from 'src/environments/environment';

const AUTH_API = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class AnomalieService {

  constructor(private http: HttpClient) { }

  getAllAnomalie(): Observable<MAnomalie[]> {
    return this.http.get<MAnomalie[]>(AUTH_API + 'api/anomalie/addAnomalie' );
  }

  createAnomalie(Anomalie, equipementId: number): Observable<any>{ 
    return this.http.post(AUTH_API + 'api/anomalie/addAnomalie/'+equipementId ,Anomalie);
  }

}
