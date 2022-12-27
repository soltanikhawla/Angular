import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RegisterService } from "src/app/services/register/register.service";
import { UserService } from "src/app/services/user/user.service";
import { TokenStorageService } from "src/app/services/_helpers/token-storage.service";
import { MUtilisateur } from "../../Models/Utilisateur";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private userService: UserService, private loginService: RegisterService, private tokenStorage: TokenStorageService,private router: Router, private status:Router) {}

  Utilisateur:MUtilisateur = new MUtilisateur();

  ngOnInit(): void {}

  gotoInsc(){
    this.status.navigate(["/auth/register"])
  }


  login():void{
    console.log(this.Utilisateur);
    //this.registerService.register(this.Utilisateur);
    this.loginService.login(this.Utilisateur).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.jwt);
        this.tokenStorage.saveUser(data);
        this.userService.getRole();
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
        alert('Remplir les champs');
      }
    );


    
  }
}
