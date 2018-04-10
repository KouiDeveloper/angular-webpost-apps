import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientproductdetailComponent } from './clientproductdetail.component';

describe('ClientproductdetailComponent', () => {
  let component: ClientproductdetailComponent;
  let fixture: ComponentFixture<ClientproductdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientproductdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientproductdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
