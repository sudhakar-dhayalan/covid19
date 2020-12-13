import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  showAngularBody: boolean = false;

  toggle() {
    this.showAngularBody = !this.showAngularBody;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
