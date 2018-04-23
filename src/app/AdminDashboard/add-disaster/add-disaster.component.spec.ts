import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDisasterComponent } from './add-disaster.component';

describe('AddDisasterComponent', () => {
  let component: AddDisasterComponent;
  let fixture: ComponentFixture<AddDisasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDisasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDisasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
