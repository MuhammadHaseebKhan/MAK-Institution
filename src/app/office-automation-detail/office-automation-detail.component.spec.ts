import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeAutomationDetailComponent } from './office-automation-detail.component';

describe('OfficeAutomationDetailComponent', () => {
  let component: OfficeAutomationDetailComponent;
  let fixture: ComponentFixture<OfficeAutomationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeAutomationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeAutomationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
