import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RegisterService } from "src/app/services/register/register.service";
import { TokenStorageService } from "src/app/services/_helpers/token-storage.service";
import { MUtilisateur } from "../../Models/Utilisateur";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private loginService: RegisterService, private tokenStorage: TokenStorageService,private router: Router) {}

  Utilisateur:MUtilisateur = new MUtilisateur();

  ngOnInit(): void {}

  login():void{
    console.log(this.Utilisateur);
    //this.registerService.register(this.Utilisateur);
    this.loginService.login(this.Utilisateur).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.jwt);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        //  window.location.replace("/dashboard");
        //  this.router.navigate(['/dashboard'])
        this.router.navigate(['/admin/dashboard']).then();

        // this.roles = this.tokenStorage.getUser().roles;
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );


    
  }
}
