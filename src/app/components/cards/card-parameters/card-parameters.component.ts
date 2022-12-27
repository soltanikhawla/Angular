import { Component, OnInit } from '@angular/core';
import { AnomalieService } from 'src/app/services/anomalie/anomalie.service';
import { UserService } from 'src/app/services/user/user.service';
import { MAnomalie } from 'src/app/views/Models/Anomalie';
import { MMateriel } from 'src/app/views/Models/Materiel';

@Component({
  selector: 'app-card-parameters',
  templateUrl: './card-parameters.component.html',
 
})
export class CardParametersComponent implements OnInit {
  seletcedAnomalie: number;
  seletcedEquipement: number;

  
 materials: MMateriel[];
 anomalie:MAnomalie = new MAnomalie();
 submitted = false;
 isSuccessful = false;

 
  


constructor(private userService: UserService,private anomalieService:AnomalieService) { }

  ngOnInit(): void {
    this.materialList();
  }
  addAnomalie(){
    console.log(this.anomalie);
    console.log(this.seletcedEquipement);

    this.anomalieService.createAnomalie(this.anomalie,  
      this.seletcedEquipement).subscribe(data =>{
        this.submitted = true;
        console.log(data);
        console.log(this.submitted);
    })
    this.isSuccessful = true;
    if(this.isSuccessful==true)
    alert('annomalie ajouter avec succés');
 

  }
  getMaterialId(id: number){
    this.seletcedEquipement = id;
  }

  getAnomalieId(id: number){
    this.seletcedAnomalie = id;
  }

  materialList(){
    this.userService.getAllMaterial().subscribe(data =>{
      this.materials =data;
    })
  }
  

}
