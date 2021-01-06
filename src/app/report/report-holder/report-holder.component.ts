import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-holder',
  templateUrl: './report-holder.component.html',
  styleUrls: ['./report-holder.component.css']
})
export class ReportHolderComponent implements OnInit {

  tempDataHolder: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  // Using data service - Uses resolver
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((obj: { dataFromResolve: any}) => {
      this.tempDataHolder = obj.dataFromResolve;
    });
  }

}
