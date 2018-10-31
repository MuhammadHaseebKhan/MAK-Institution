import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateCoursesComponent } from './certificate-courses.component';

describe('CertificateCoursesComponent', () => {
  let component: CertificateCoursesComponent;
  let fixture: ComponentFixture<CertificateCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
