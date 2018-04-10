import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { CircleMenuComponent } from './circle-menu/circle-menu.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SmallselcarouselComponent } from './smallselcarousel/smallselcarousel.component';
import { ReorderComponent } from './reorder/reorder.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { StoreComponent } from './store/store.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ClientproductdetailComponent } from './clientproductdetail/clientproductdetail.component';
import { ClientstoreComponent } from './clientstore/clientstore.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPromotionAdsComponent } from './admin-promotion-ads/admin-promotion-ads.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';






const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full'},
  { path: 'reorder', component: ReorderComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'store', component: StoreComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'clientproductdetail', component: ClientproductdetailComponent },
  { path: 'clientstore', component: ClientstoreComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin-promotion-ads', component: AdminPromotionAdsComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'changepassword', component: ChangepasswordComponent },
  { path: 'productdetails', component: ProductdetailsComponent }
    
  
  
  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
