import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-img',
  templateUrl: './profile-img.component.html',
  styleUrls: ['./profile-img.component.css']
})
export class ProfileImgComponent implements OnInit {

  constructor() { }

  processFile(event){
    debugger;
    const file:File=event.target.files[0];
  }

  ngOnInit() {
  }

}
