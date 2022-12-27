import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DepecheService } from "src/app/services/depeche/depeche.service";
import { UserService } from "src/app/services/user/user.service";
import { MAnomalie } from "src/app/views/Models/Anomalie";
import { MDepDepeches } from "src/app/views/Models/DepDepeches";
import { MEtatDepeche } from "src/app/views/Models/EtatDepeche";
import { MMateriel } from "src/app/views/Models/Materiel";
import { MServices } from "src/app/views/Models/Services";
import { MStation } from "src/app/views/Models/Station";
import { MTypeDepeche } from "src/app/views/Models/TypeDepeche";
import { MUtilisateur } from "src/app/views/Models/Utilisateur";
@Component({
  selector: 'app-card-update-depeche',
  templateUrl: './card-update-depeche.component.html',
  styleUrls: ['./card-update-depeche.component.css']
})
export class CardUpdateDepecheComponent implements OnInit {
  id: number;

  seletcedDestinataire: number;
  seletcedStation: number;
  seletcedAnomalie: number;
  seletcedEquipement: number;
  selectedService: number;
  selectedTypeDepeche: number;
  selectedStatus: number;
  users: MUtilisateur[];
  stations: MStation[];
  materials: MMateriel[];
  anomalies: MAnomalie[];
  services: MServices[];
  TypeDepeches: MTypeDepeche[];
  Status: MEtatDepeche[];
  
  submitted = false;
  isSuccessful = false;
  dateCreation= new Date();
  depDepeches:MDepDepeches;

  public DateN = Date.now();
  public get MyDate() {
    return this.DateN;
  }
  public set MyDate(value) {
    this.DateN = value;
  }
  
  constructor(private route: ActivatedRoute, private userService: UserService, private depecheService: DepecheService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getDepecheById();
    this.userList();
    this.stationList();
    this.materialList();
    this.anomalieList();
    this.serviceList();
    this.typeDepecheList();
    this.getAllStatus();
  }

  userList(){
    this.userService.getAllUsersTechnicien().subscribe(data =>{
      this.users =data;
    })
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

  updateDepeche(){
    console.log(this.seletcedDestinataire)
    console.log(this.seletcedStation);
    console.log(this.seletcedEquipement);
    console.log(this.seletcedAnomalie);
    console.log(this.selectedService);
    console.log(this.selectedTypeDepeche);
    console.log(this.depDepeches);
    const current = new Date();
    current.setHours(0)
    current.setMinutes(0)
    current.setSeconds(0)
    current.setMilliseconds(0)
    const timestamp = current.getTime();
    this.depDepeches.dateCreation= timestamp;
    this.depecheService.updateDepeche(this.depDepeches, this.seletcedDestinataire, this.seletcedStation, 
      this.seletcedEquipement, this.seletcedAnomalie, this.selectedService, this.selectedTypeDepeche, this.selectedStatus, this.id).subscribe(data =>{
        this.submitted = true;
        console.log(data);
        console.log(this.submitted);
    })
    this.isSuccessful = true;
    if(this.isSuccessful==true)
    alert('dépeche ajouter avec succés');
 
  }

  getDestinataireId(id: number){
    this.seletcedDestinataire = id;
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

  getServiceId(id: number){
    this.selectedService = id;
  }

  getTypeDepecheId(id: number){
    this.selectedTypeDepeche = id;
  }

  getStatusId(id: number){
    this.selectedStatus = id;
  }

getDepecheById(){
  this.depDepeches = new MDepDepeches();
  this.depecheService.getDepecheById(this.id).subscribe(data => {
    this.depDepeches = data;
    this.selectedStatus = this.depDepeches.etatDepeche.id;
    this.selectedTypeDepeche = this.depDepeches.typeDepeche.id;
    this.selectedService = this.depDepeches.services.id;
    this.seletcedEquipement = this.depDepeches.materiel.id;
    this.seletcedAnomalie = this.depDepeches.anomalie.id;
    this.seletcedDestinataire = this.depDepeches.utilisateur.id;
    this.seletcedStation = this.depDepeches.station.id;
    console.log(this.depDepeches)
  })
}
  



}
