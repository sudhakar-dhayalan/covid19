import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  showAngularBody = false;
  showBootstrapBody = false;
  showDesignBody = false;

  toggle(bodyToBeToggled) {
    if (bodyToBeToggled == 'angular') {
      this.showAngularBody = !this.showAngularBody;
    } else if (bodyToBeToggled == 'bootstrap') {
      this.showBootstrapBody = !this.showBootstrapBody;
    } else {
      this.showDesignBody = !this.showDesignBody;
    }

  }


  // onClick() {
  //   this.showAngularBody = !this.showAngularBody;
  // }

}
