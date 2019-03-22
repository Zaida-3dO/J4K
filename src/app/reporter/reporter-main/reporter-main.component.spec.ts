import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterMainComponent } from './reporter-main.component';

describe('ReporterMainComponent', () => {
  let component: ReporterMainComponent;
  let fixture: ComponentFixture<ReporterMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporterMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
