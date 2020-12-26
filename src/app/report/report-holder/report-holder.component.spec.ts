import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportHolderComponent } from './report-holder.component';

describe('ReportHolderComponent', () => {
  let component: ReportHolderComponent;
  let fixture: ComponentFixture<ReportHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
