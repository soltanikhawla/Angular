import { Component, OnInit, AfterViewInit } from "@angular/core";
import{Chart}  from "chart.js";
import { MultiDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { DepecheService } from "src/app/services/depeche/depeche.service";
import { MNombreDepeche } from "src/app/views/Models/NombreDepecheParStatus";

@Component({
  selector: "app-card-line-chart",
  templateUrl: "./card-line-chart.component.html",
})
export class CardLineChartComponent implements OnInit {
  toDo: MNombreDepeche = new MNombreDepeche;
  onGoing: MNombreDepeche = new MNombreDepeche;
  done: MNombreDepeche  = new MNombreDepeche;

  doughnutChartLabels: Label[] = ['To Do', 'Ongoing', 'Done'];
  doughnutChartData: MultiDataSet = [

  ];
  doughnutChartType: ChartType = 'bar';

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#f51505', '#ffa83d', '#4ec24f'],
      hoverBackgroundColor: ['#ba1004', '#d18528', '#419c42'],
      borderWidth: 2,
    }
  ];


  constructor(private depecheService: DepecheService) {}

  ngOnInit() {
    this.geNombretDepecheToDo();
    this.geNombretDepecheOnGoing();
    this.geNombretDepecheDone();
    console.log(this.doughnutChartData)
  }

  geNombretDepecheToDo(){
    this.depecheService.getNombreDepecheToDo().subscribe(data =>{
      this.toDo = data;
      console.log(this.toDo);
      this.doughnutChartData =  [
        [this.toDo.nombre, this.onGoing.nombre, this.done.nombre,0]
      ];
    })
  }

  geNombretDepecheOnGoing(){
    this.depecheService.getNombreDepecheOnGoing().subscribe(data =>{
      this.onGoing = data;
      console.log(this.onGoing)
      this.doughnutChartData =  [
        [this.toDo.nombre, this.onGoing.nombre, this.done.nombre,0]
      ];
    })
  }

  geNombretDepecheDone(){
    this.depecheService.getNombreDepecheDone().subscribe(data =>{
      this.done = data;
      this.doughnutChartData =  [
        [this.toDo.nombre, this.onGoing.nombre, this.done.nombre,0]
      ];
    })
  }


  /*
  ngAfterViewInit() {
    var config = {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: "#fff",
            borderColor: "#fff",
            data: [40, 68, 86, 74, 56, 60, 87],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx: any = document.getElementById("line-chart") as HTMLCanvasElement;
    ctx = ctx.getContext("2d");
   // new Chart(ctx, config);
  }*/
}
