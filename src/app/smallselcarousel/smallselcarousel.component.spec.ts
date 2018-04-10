import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallselcarouselComponent } from './smallselcarousel.component';

describe('SmallselcarouselComponent', () => {
  let component: SmallselcarouselComponent;
  let fixture: ComponentFixture<SmallselcarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallselcarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallselcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
