import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyMakComponent } from './why-mak.component';

describe('WhyMakComponent', () => {
  let component: WhyMakComponent;
  let fixture: ComponentFixture<WhyMakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyMakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyMakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
