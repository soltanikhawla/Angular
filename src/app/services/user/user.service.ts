import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MAnomalie } from 'src/app/views/Models/Anomalie';
import { MMateriel } from 'src/app/views/Models/Materiel';
import { MServices } from 'src/app/views/Models/Services';
import { MStation } from 'src/app/views/Models/Station';
import { MTypeDepeche } from 'src/app/views/Models/TypeDepeche';
import { MUtilisateur } from 'src/app/views/Models/Utilisateur';
import { environment } from 'src/environments/environment';

const AUTH_API = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  roleAs: string;
  user: MUtilisateur;
  

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<MUtilisateur[]> {
    return this.http.get<MUtilisateur[]>(AUTH_API + 'api/user/allUsers' );
  }

  getAllUsersTechnicien(): Observable<MUtilisateur[]> {
    return this.http.get<MUtilisateur[]>(AUTH_API + 'api/user/allUsersTechnicien' );
  }

  getAllStation(): Observable<MStation[]> {
    return this.http.get<MStation[]>(AUTH_API + 'api/station/allStation' );
  }

  getAllAnomalie(): Observable<MAnomalie[]> {
    return this.http.get<MAnomalie[]>(AUTH_API + 'api/anomalie/allAnomalie' );
  }

  getAllMaterial(): Observable<MMateriel[]> {
    return this.http.get<MMateriel[]>(AUTH_API + 'api/material/allMaterial' );
  }

  getAllTypeDepeche(): Observable<MTypeDepeche[]> {
    return this.http.get<MTypeDepeche[]>(AUTH_API + 'api/typeDepeche/allTypeDepeche' );
  }

  getAllService(): Observable<MServices[]> {
    return this.http.get<MServices[]>(AUTH_API + 'api/service/allService' );
  }

  deleteUser(id: number): Observable<any> {
    return this.http.get(AUTH_API + 'api/user/delete/'+id);
  }


  createDepeche(Depeche, destinataireId: number, stationId: number, equipementId: number, anomalieId: number, serviceId: number, typeDepecheId: number, statusId: number): Observable<any>{ 
    return this.http.post(AUTH_API + 'api/DepDepeches/addDepDepeches/'+destinataireId +'/'+stationId + '/' +equipementId +'/' +anomalieId + '/' +serviceId +'/' +typeDepecheId + '/'+ statusId,Depeche);
  }

  createDepecheSimple(Depeche, stationId: number, equipementId: number, anomalieId: number): Observable<any>{ 
    return this.http.post(AUTH_API + 'api/DepDepeches/addDepDepechesSimple/'+stationId + '/' +equipementId +'/' +anomalieId ,Depeche);
  }
  

  findUser(firstName:String):  Observable<MUtilisateur[]> {
    return this.http.get<MUtilisateur[]>(AUTH_API + 'api/user/findUser/'+firstName);
  }
  getUserById(id: number): Observable<MUtilisateur[]> {
    return this.http.get<MUtilisateur[]>(AUTH_API + 'api/user/findUser/'+ id);
  }

  getCurrentUser(): Observable<MUtilisateur>{
    return this.http.get<MUtilisateur>(AUTH_API +"api/user/currentUser");
  }

  getRole(){
    this.getCurrentUser().subscribe(data =>{
      this.user = data;
      localStorage.setItem('ROLE', this.user.role.libelle);
      console.log(this.user.role.libelle);
      return this.roleAs = this.user.role.libelle;
    })
  }

}
