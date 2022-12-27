import { Component, OnInit } from '@angular/core';
import { DepecheService } from 'src/app/services/depeche/depeche.service';
import { UserService } from 'src/app/services/user/user.service';
import { MEtatMateriel } from 'src/app/views/Models/EtatMateriel';
import { MMateriel } from 'src/app/views/Models/Materiel';
import { MTypeMateriel } from 'src/app/views/Models/TypeMateriel';

@Component({
  selector: 'app-card-equipement',
  templateUrl: './card-equipement.component.html',
  styleUrls: ['./card-equipement.component.scss']
  
})
export class CardEquipementComponent implements OnInit {

  typeMateriels: MTypeMateriel[];
  etatMateriels: MEtatMateriel[];
  seletcedTypeMateriel: number;
  seletcedEtatMateriel: number;
  materials: MMateriel=  new  MMateriel();
  dateCreation = new Date();
  isSuccessful = false;
  isSignUpFailed=false;
  errorMessage = '';

  constructor(private userService: UserService,  private depecheService: DepecheService) { }

  ngOnInit(): void {
    this.getAllTypeMateriel();
    this.getAllEtatMateriel();

  }

  getAllTypeMateriel(){
    this.depecheService.getAllTypeMateriel().subscribe(data => {
      this.typeMateriels = data;
    })
  }

  getAllEtatMateriel(){
    this.depecheService.getAllEtatMateriel().subscribe(data => {
      this.etatMateriels = data;
    })
  }

  addMateriel(){
    console.log(this.seletcedTypeMateriel)
    console.log(this.seletcedEtatMateriel)
    console.log(this.materials);
    this.materials.miseEnPlace = this.convert(this.dateCreation);
    this.depecheService.createMateriel(this.materials, this.seletcedEtatMateriel, this.seletcedTypeMateriel).subscribe(data =>{
      console.log("succes")
      this.isSuccessful = true;
      if(this.isSuccessful==true)
      alert('equipement ajouter avec succés');
     
    },
    (err) => {
      this.errorMessage = err.error;
      this.isSignUpFailed = true;
      console.log(this.errorMessage);
      if(this.isSignUpFailed)
      alert(' Remplir les champs');
    })
  }

  getTypeMaterielId(id: number){
    this.seletcedTypeMateriel = id;
  }

  getEtatMaterielId(id: number){
    this.seletcedEtatMateriel = id;
  }


  convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }


}
