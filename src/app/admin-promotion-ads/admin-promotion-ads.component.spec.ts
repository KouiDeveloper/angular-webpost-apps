import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPromotionAdsComponent } from './admin-promotion-ads.component';

describe('AdminPromotionAdsComponent', () => {
  let component: AdminPromotionAdsComponent;
  let fixture: ComponentFixture<AdminPromotionAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPromotionAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPromotionAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
