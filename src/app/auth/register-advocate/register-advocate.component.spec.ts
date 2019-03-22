import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAdvocateComponent } from './register-advocate.component';

describe('RegisterAdvocateComponent', () => {
  let component: RegisterAdvocateComponent;
  let fixture: ComponentFixture<RegisterAdvocateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAdvocateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAdvocateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
