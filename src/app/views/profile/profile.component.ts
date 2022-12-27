import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/services/user/user.service";
import { MUtilisateur } from "../Models/Utilisateur";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
})
export class ProfileComponent implements OnInit {
  id: number;
  user: any;

  constructor(private route: ActivatedRoute, private userService : UserService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.findUser();
  }

  findUser(){
    this.user = new MUtilisateur();
    this.userService.getUserById(this.id).subscribe(data =>{
      this.user = data;
      console.log(this.user);
    })
  }
}
