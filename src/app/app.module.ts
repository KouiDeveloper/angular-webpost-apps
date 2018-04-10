import {Component} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';





import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IndexcarouselComponent } from './indexcarousel/indexcarousel.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ToggleComponent } from './toggle/toggle.component';
import { LoginComponent } from './login/login.component';
import { RatingComponent } from './rating/rating.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoversComponent } from './popovers/popovers.component';
import { ProgressComponent } from './progress/progress.component';
import { TabsComponent } from './tabs/tabs.component';
import { SendfreeComponent } from './sendfree/sendfree.component';
import { SmallselcarouselComponent } from './smallselcarousel/smallselcarousel.component';
import { CircleMenuComponent } from './circle-menu/circle-menu.component';
import { FooterComponent } from './footer/footer.component';
import { ReorderComponent } from './reorder/reorder.component';
import { AppRoutingModule } from './/app-routing.module';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { StoreComponent } from './store/store.component';
import { ClientproductdetailComponent } from './clientproductdetail/clientproductdetail.component';
import { ClientstoreComponent } from './clientstore/clientstore.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPromotionAdsComponent } from './admin-promotion-ads/admin-promotion-ads.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexcarouselComponent,
    DropdownComponent,
    ToggleComponent,
    LoginComponent,
    RatingComponent,
    CarouselComponent,
    DatepickerComponent,
    PaginationComponent,
    PopoversComponent,
    ProgressComponent,
    TabsComponent,
    SendfreeComponent,
    SmallselcarouselComponent,
    CircleMenuComponent,
    FooterComponent,
    ReorderComponent,
    IndexComponent,
    RegisterComponent,
    ProfileComponent,
    StoreComponent,
    ClientproductdetailComponent,
    ClientstoreComponent,
    AdminComponent,
    AdminPromotionAdsComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
    ProductdetailsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,HeaderComponent]
})
export class AppModule { }
