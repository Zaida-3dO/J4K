import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvocateMainComponent } from './advocate-main.component';

describe('AdvocateMainComponent', () => {
  let component: AdvocateMainComponent;
  let fixture: ComponentFixture<AdvocateMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvocateMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvocateMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
