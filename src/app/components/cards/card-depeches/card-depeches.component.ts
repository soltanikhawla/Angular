import { Component, OnInit } from '@angular/core';
import { DepecheService } from 'src/app/services/depeche/depeche.service';
import { UserService } from 'src/app/services/user/user.service';
import { MAnomalie } from 'src/app/views/Models/Anomalie';
import { MDepDepeches } from 'src/app/views/Models/DepDepeches';
import { MEtatDepeche } from 'src/app/views/Models/EtatDepeche';
import { MMateriel } from 'src/app/views/Models/Materiel';
import { MServices } from 'src/app/views/Models/Services';
import { MStation } from 'src/app/views/Models/Station';
import { MTypeDepeche } from 'src/app/views/Models/TypeDepeche';
import { MUtilisateur } from 'src/app/views/Models/Utilisateur';

@Component({
  selector: 'app-card-depeches',
  templateUrl: './card-depeches.component.html',
  styleUrls: ['./card-depeches.component.scss']

  
})
export class CardDepechesComponent implements OnInit {
  
  seletcedDestinataire:number;
  seletcedStation: number;
  seletcedEquipement: number;
  seletcedAnomalie: number;
  selectedService:number;
  selectedTypeDepeche: number;
  selectedStatus: number;


  stations: MStation[];
  materials: MMateriel[];
  anomalies: MAnomalie[];
  services: MServices[];
  TypeDepeches: MTypeDepeche[];
  Status: MEtatDepeche[];


 depDepeches:MDepDepeches = new MDepDepeches();
 submitted = false;
 isSuccessful = false;
 dateCreation= new Date();



  public DateN = Date.now();
  public get MyDate() {
    return this.DateN;
  }
  public set MyDate(value) {
    this.DateN = value;
  }
  

  constructor(private userService: UserService, private depecheService: DepecheService) { }

  ngOnInit(): void {
    this.stationList();
    this.materialList();
    this.anomalieList();
    this.serviceList();
    this.typeDepecheList();
    this.getAllStatus();
  }

  stationList(){
    this.userService.getAllStation().subscribe(data =>{
      this.stations =data;
    })
  }
  materialList(){
    this.userService.getAllMaterial().subscribe(data =>{
      this.materials =data;
    })
  }

  anomalieList(){
    this.userService.getAllAnomalie().subscribe(data =>{
      this.anomalies =data;
    })
  }
  serviceList(){
    this.userService.getAllService().subscribe(data =>{
      this.services = data;
    })
  }

  typeDepecheList(){
    this.userService.getAllTypeDepeche().subscribe(data =>{
      this.TypeDepeches = data;
    })
  }

  getAllStatus(){
    this.depecheService.getAllEtatDepeche().subscribe(data => {
      this.Status = data;
    })
  }

  addDepeche(){
    console.log(this.seletcedStation);
    console.log(this.seletcedEquipement);
    console.log(this.seletcedAnomalie);
    console.log(this.depDepeches);
    const current = new Date();
    current.setHours(0)
    current.setMinutes(0)
    current.setSeconds(0)
    current.setMilliseconds(0)
    const timestamp = current.getTime();
    this.depDepeches.dateCreation= timestamp;
    this.userService.createDepecheSimple(this.depDepeches, this.seletcedStation, 
      this.seletcedEquipement, this.seletcedAnomalie).subscribe(data =>{
        this.submitted = true;
        console.log(data);
        console.log(this.submitted);
    })
    this.isSuccessful = true;
    if(this.isSuccessful==true)
    alert('dépeche ajouter avec succés');
 
  }
  getStationId(id: number){
    this.seletcedStation = id;
  }
  getMaterialId(id: number){
    this.seletcedEquipement = id;
  }

  getAnomalieId(id: number){
    this.seletcedAnomalie = id;
  }
  


  getStatusId(id: number){
    this.selectedStatus = id;
  }


 




}
