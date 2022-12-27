import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MDepDepeches } from 'src/app/views/Models/DepDepeches';
import { MEtatDepeche } from 'src/app/views/Models/EtatDepeche';
import { MEtatMateriel } from 'src/app/views/Models/EtatMateriel';
import { MTypeMateriel } from 'src/app/views/Models/TypeMateriel';
import { environment } from 'src/environments/environment';

const AUTH_API = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class DepecheService {

  constructor(private http: HttpClient) { }

  private _listners = new Subject<any>();
  listen(): Observable<any>{
    return this._listners.asObservable();
  }
  filter(filterBy: string){
    this._listners.next(filterBy);
  }

  getAllTypeMateriel(): Observable<MTypeMateriel[]> {
    return this.http.get<MTypeMateriel[]>(AUTH_API + 'api/v1/typeMateriel/allTypeMateriel' );
  }

  getAllEtatMateriel(): Observable<MEtatMateriel[]> {
    return this.http.get<MEtatMateriel[]>(AUTH_API + 'api/v1/etatMateriel/allEtatMateriel' );
  }

  createMateriel(materiel, etatMaterialId: number, typeMaterielId): Observable<any>{ 
    return this.http.post(AUTH_API + 'api/material/addMaterial/'+etatMaterialId + '/' + typeMaterielId ,materiel);
  }
  

  getNombreDepecheToDo(): Observable<any> {
    return this.http.get(AUTH_API + 'api/DepDepeches/nombreDepecheToDo' );
  }

  getNombreDepecheOnGoing(): Observable<any> {
    return this.http.get(AUTH_API + 'api/DepDepeches/nombreDepecheOnGoing' );
  }

  getNombreDepecheDone(): Observable<any> {
    return this.http.get(AUTH_API + 'api/DepDepeches/nombreDepecheDone' );
  }

  getAllDepeches(): Observable<MDepDepeches[]> {
    return this.http.get<MDepDepeches[]>(AUTH_API + 'api/DepDepeches/allDepeche' );
  }

  getAllDepechesSimple(): Observable<MDepDepeches[]> {
    return this.http.get<MDepDepeches[]>(AUTH_API + 'api/DepDepeches/allDepecheSimple' );
  }

  deleteDepeche(id: number): Observable<any> {
    return this.http.get(AUTH_API + 'api/DepDepeches/delete/'+id);
  }

  getAllEtatDepeche(): Observable<MEtatDepeche[]> {
    return this.http.get<MEtatDepeche[]>(AUTH_API + 'api/DepDepeches/allEtatDepeche' );
  }

  getDepecheById(depecheId: number): Observable<MDepDepeches> {
    return this.http.get<MDepDepeches>(AUTH_API + 'api/DepDepeches/depecheDetaille/' +depecheId);
  }

  updateEtatDepeche(etatDepecheId: number, depecheId): Observable<any> {
    return this.http.get(AUTH_API + 'api/DepDepeches/updateEtatDepeche/'+ etatDepecheId + '/'+ depecheId);
  }

  updateDepeche(Depeche, destinataireId: number, stationId: number, equipementId: number, anomalieId: number, serviceId: number, typeDepecheId: number, statusId: number, id: number): Observable<any>{ 
    return this.http.put(AUTH_API + 'api/DepDepeches/updateDepeches/'+destinataireId +'/'+stationId + '/' +equipementId +'/' +anomalieId + '/' +serviceId +'/' +typeDepecheId + '/'+ statusId + '/'+ id,Depeche);
  }
}
