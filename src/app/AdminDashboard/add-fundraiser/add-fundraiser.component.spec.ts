import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFundraiserComponent } from './add-fundraiser.component';

describe('AddFundraiserComponent', () => {
  let component: AddFundraiserComponent;
  let fixture: ComponentFixture<AddFundraiserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFundraiserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFundraiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
