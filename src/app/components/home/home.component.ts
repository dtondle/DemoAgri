import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  public projectList: any;
  constructor() { }

  ngOnInit() {
    this.projectList = [
      {
        projectName: 'Project 1',
        projectDesc: 'Project Decription'
      },
      {
        projectName: 'Project 2',
        projectDesc: 'Project Decription'
      }, {
        projectName: 'Project 3',
        projectDesc: 'Project Decription'
      }
    ]
  }

}
