import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class GalleryComponent implements OnInit {

  public photoList: any;
  public showOverlay = false;
  constructor() { }

  ngOnInit() {
    this.photoList = [    
      {
        projectTitle: 'Project 1',
        image: [
          {
            imageTitle: 'Image 1',
            imageDesc: 'Image Description'
          },
          {
            imageTitle: 'Image 2',
            imageDesc: 'Image Description'
          },
          {
            imageTitle: 'Image 3',
            imageDesc: 'Image Description'
          }
        ]
        
      },
      {
        projectTitle: 'Project 2',
        image: [
          {
            imageTitle: 'Image 1',
            imageDesc: 'Image Description'
          },
          {
            imageTitle: 'Image 2',
            imageDesc: 'Image Description'
          },
          {
            imageTitle: 'Image 3',
            imageDesc: 'Image Description'
          }
        ]

      },
      {
        projectTitle: 'Project 3',
        image: [
          {
            imageTitle: 'Image 1',
            imageDesc: 'Image Description'
          },
          {
            imageTitle: 'Image 2',
            imageDesc: 'Image Description'
          },
          {
            imageTitle: 'Image 3',
            imageDesc: 'Image Description'
          }
        ]

      }
    ]
  }

}
