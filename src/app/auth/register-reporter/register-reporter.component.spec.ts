import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterReporterComponent } from './register-reporter.component';

describe('RegisterReporterComponent', () => {
  let component: RegisterReporterComponent;
  let fixture: ComponentFixture<RegisterReporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterReporterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterReporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
