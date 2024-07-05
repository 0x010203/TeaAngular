import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".btn").addClass("hvr hvr-sweep-to-top");
    
    let icons = {
      header: "iconClosed", // custom icon class
      activeHeader: "iconOpen", // custom icon class
    };
  
    $("#accordion").accordion({
      icons: icons,
    });
  }

}
