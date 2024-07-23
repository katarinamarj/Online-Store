import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { CartComponent } from './cart/cart.component';
import { UserpanelComponent } from './auth/userpanel/userpanel.component';
import { CatalogComponent } from './catalog/catalog.component';
import { BridesComponent } from './brides/brides.component';
import { BridesmadeComponent } from './bridesmade/bridesmade.component';
import { MomsComponent } from './moms/moms.component';
import { PlussizeComponent } from './plussize/plussize.component';
import { BestsellersComponent } from './bestsellers/bestsellers.component';
import { AccessoriseComponent } from './accessorise/accessorise.component';
import { AuthGuard } from './auth.guard';
import { PaymentComponent } from './payment/payment.component';



const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'login', component:LoginComponent},
  {path: 'cart', component:CartComponent},
  {path: 'userpanel', component:UserpanelComponent},
  {path: 'catalog', component:CatalogComponent},
  {path: 'brides', component:BridesComponent},
  {path: 'bridesmaid', component:BridesmadeComponent},
  {path: 'moms', component:MomsComponent},
  {path: 'plussize', component:PlussizeComponent},
  {path: 'bestsellers', component:BestsellersComponent},
  {path: 'accessorise', component:AccessoriseComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'userpanel', component: UserpanelComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'payment', component: PaymentComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
