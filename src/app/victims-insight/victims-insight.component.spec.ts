import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictimsInsightComponent } from './victims-insight.component';

describe('VictimsInsightComponent', () => {
  let component: VictimsInsightComponent;
  let fixture: ComponentFixture<VictimsInsightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VictimsInsightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VictimsInsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
