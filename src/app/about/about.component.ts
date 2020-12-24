import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  showAngularBody: boolean = false;
  showBootstrapBody: boolean = false;
  showDesignBody: boolean = false;

  toggle(bodyToBeToggled) {
    if (bodyToBeToggled === "angular") {
      this.showAngularBody = !this.showAngularBody;
    } else if (bodyToBeToggled === "bootstrap") {
      this.showBootstrapBody = !this.showBootstrapBody
    } else {
      this.showDesignBody = !this.showDesignBody;
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
