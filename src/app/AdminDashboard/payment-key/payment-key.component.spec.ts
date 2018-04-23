import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentKeyComponent } from './payment-key.component';

describe('PaymentKeyComponent', () => {
  let component: PaymentKeyComponent;
  let fixture: ComponentFixture<PaymentKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
