import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendfreeComponent } from './sendfree.component';

describe('SendfreeComponent', () => {
  let component: SendfreeComponent;
  let fixture: ComponentFixture<SendfreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendfreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendfreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
