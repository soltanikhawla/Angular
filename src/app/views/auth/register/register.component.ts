import { Component, OnInit } from "@angular/core";
import { RegisterService } from "src/app/services/register/register.service";
import {MUtilisateur} from "../../Models/Utilisateur";
//import {RegisterService} from "../../../services/register/register.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})

export class RegisterComponent implements OnInit {
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  
  constructor(private registerService: RegisterService) {}

  Utilisateur:MUtilisateur = new MUtilisateur();

  ngOnInit():void {}

  registerUser():void{
    console.log(this.Utilisateur);
    //this.registerService.register(this.Utilisateur);
    this.registerService.register(this.Utilisateur).subscribe(
      (data) => {
       // this.showSpinner = false;
       console.log(data)
        this.isSuccessful = true;
      },
      (err) => {
        this.errorMessage = err.error;
        this.isSignUpFailed = true;
        console.log(this.errorMessage);
      }
    );

    
  }

}
