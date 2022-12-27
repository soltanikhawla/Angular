import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user/user.service";
import { MUtilisateur } from "src/app/views/Models/Utilisateur";

@Component({
  selector: "app-card-table",
  templateUrl: "./card-table.component.html",
})
export class CardTableComponent implements OnInit {
  users : MUtilisateur [];
  message ="";
  userFilter: any = { firstName: '' };
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  constructor(private userService : UserService, private router: Router) {}

  ngOnInit(): void {
    this.getAllUsers();
    
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(data =>{
      this.users = data;
      console.log(this.users);
    })
  }
  /*
  findallusers(firstName){
    this.userService.findUser(firstName).subscribe(data =>{
      this.users = data;
      console.log(this.userFilter);
    })
  }*/

  onDelete(id){
    console.log(id);
    this.userService.deleteUser(id).subscribe(data =>{
      this.message = "delete Successfully";
      console.log(this.message);
      this.getAllUsers();
    })
  }

  getProfilById(userId : number){
    this.router.navigate(['profile', userId]);
    
  }

}