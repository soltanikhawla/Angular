import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card-settings",
  templateUrl: "./card-settings.component.html",
})
export class CardSettingsComponent implements OnInit {

  public DateN = Date.now();
  public get MyDate() {
    return this.DateN;
  }
  public set MyDate(value) {
    this.DateN = value;
  }
  
  constructor() {}

  ngOnInit(): void {}
}
