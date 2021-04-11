import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import Popper from "popper.js";
import { TokenStorageService } from "src/app/services/_helpers/token-storage.service";

@Component({
  selector: "app-user-dropdown",
  templateUrl: "./user-dropdown.component.html",
})
export class UserDropdownComponent implements OnInit {
  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef: ElementRef;
  constructor(private tokenStorage: TokenStorageService,private router: Router) {
    Window["UserDropdownComponent"] = this;
  }
  popper = document.createElement("div");
  ngOnInit() {
    this.popper.innerHTML = `<div class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1" style="min-width:12rem" #popoverDropdownRef>
  <button type="button" class="sign-button" onclick="Window.UserDropdownComponent.signOutEmit()">
      Sign out
    </button>
</div>`;
  }
  toggleDropdown(event) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
      this.destroyPopper();
    } else {
      this.dropdownPopoverShow = true;
      this.createPoppper();
    }
  }
  destroyPopper() {
    this.popper.parentNode.removeChild(this.popper);
  }
  createPoppper() {
    new Popper(this.btnDropdownRef.nativeElement, this.popper, {
      placement: "bottom-end",
    });
    this.btnDropdownRef.nativeElement.parentNode.insertBefore(
      this.popper,
      this.btnDropdownRef.nativeElement.nextSibling
    );
  }

  
  signOutEmit(){
    console.log("ggggggggggggg")
    this.tokenStorage.signOut();
    this.router.navigate(['/auth/login']).then();
   
  }

  

}
