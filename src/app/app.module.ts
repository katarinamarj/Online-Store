import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { UserpanelComponent } from './auth/userpanel/userpanel.component';
import { CatalogComponent } from './catalog/catalog.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './ui-material.module';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BridesComponent } from './brides/brides.component';
import { BridesmadeComponent } from './bridesmade/bridesmade.component';
import { MomsComponent } from './moms/moms.component';
import { PlussizeComponent } from './plussize/plussize.component';
import { BestsellersComponent } from './bestsellers/bestsellers.component';
import { AccessoriseComponent } from './accessorise/accessorise.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent, 
    SignupComponent,
    LoginComponent,
    HomeComponent, 
    CartComponent,
    UserpanelComponent,
    CatalogComponent,
    BridesComponent,
    BridesmadeComponent,
    MomsComponent,
    PlussizeComponent,
    BestsellersComponent,
    AccessoriseComponent,
    PaymentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    
    provideAnimationsAsync(),
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
