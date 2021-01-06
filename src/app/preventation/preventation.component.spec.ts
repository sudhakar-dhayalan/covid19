import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventationComponent } from './preventation.component';

describe('PreventationComponent', () => {
  let component: PreventationComponent;
  let fixture: ComponentFixture<PreventationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
