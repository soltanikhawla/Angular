import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { DepecheService } from 'src/app/services/depeche/depeche.service';
import { MDepDepeches } from 'src/app/views/Models/DepDepeches';
import { MEtatDepeche } from 'src/app/views/Models/EtatDepeche';
import { MUtilisateur } from 'src/app/views/Models/Utilisateur';


@Component({
  selector: 'app-card-liste-dep',
  templateUrl: './card-liste-dep.component.html',
  styleUrls: ['card-liste-dep.component.scss']

  
})
export class CardListeDepComponent implements OnInit {
 
  depeches:MDepDepeches [];
  users : MUtilisateur [];

  message ="";
  userFilter: any = { heure: '', dateCreation:''};
  userFilters :any={firstName:''}
  seletcedDestinataire: number;
  Status: MEtatDepeche[];
  
  

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  constructor(private depecheService: DepecheService,  private router: Router, ) { }

  ngOnInit(): void {
    this.depecheList();
    this.getAllStatus();
  }

  depecheList(){
    this.depecheService.getAllDepeches().subscribe(data => {
      this.depeches = data;
      console.log(this.depeches);
    })
  }

  onDeleteDepeche(id: number){
    console.log(id);
    this.depecheService.deleteDepeche(id).subscribe(data =>{
      this.message = "delete Successfully";
      console.log(this.message);
      this.depecheList();
    })
  }

  getAllStatus(){
    this.depecheService.getAllEtatDepeche().subscribe(data => {
      this.Status = data;
    })
  }

  setStatus(id: number, depecheId: number){
    this.seletcedDestinataire = id;
    console.log(this.seletcedDestinataire +"  "+ depecheId)

  }
  
  getDepecheById(idItem : number){
    console.log(idItem)
    this.router.navigate(['admin/update-depeche', idItem]);
    
  }


}
