import { Component, Input, OnInit } from '@angular/core';
import { DepecheService } from 'src/app/services/depeche/depeche.service';
import { MDepDepeches } from 'src/app/views/Models/DepDepeches';
import { MEtatDepeche } from 'src/app/views/Models/EtatDepeche';

@Component({
  selector: 'app-card-list-dep-ag',
  templateUrl: './card-list-dep-ag.component.html',
  styleUrls: ['./card-list-dep-ag.component.scss']
  
})
export class CardListDepAgComponent implements OnInit {


  depeches:MDepDepeches [];
  etatDepeches: MEtatDepeche [];
  message ="";
  userFilter: any = { heure: '', dateCreation:''};

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
  constructor(private depecheService: DepecheService) {
    this.depecheService.listen().subscribe((m:any)=>{
      console.log(m);
      this.depecheList();
    })

   }

  ngOnInit(): void {
    this.depecheList();
    this.getAllEtatDepeche();
  }
  depecheList(){
    this.depecheService.getAllDepechesSimple().subscribe(data => {
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

  getAllEtatDepeche(){
    this.depecheService.getAllEtatDepeche().subscribe(data =>{
      this.etatDepeches = data;
      console.log(this.etatDepeches);
    })
  }

  updateStatus(statusId : number, depecheId: number){
    console.log(statusId, depecheId);
    
    this.depecheService.updateEtatDepeche(statusId, depecheId).subscribe(data =>{
      this.message= "update Status success";
      this.depecheService.filter('Update Status');
     // this.depecheList();
    })
  }

}
