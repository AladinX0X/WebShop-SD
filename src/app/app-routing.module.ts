import { NgForm, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsComponent } from './forms/forms.component';
import { AboutComponent } from './about/about.component';
import { PhonesComponent } from './phones/phones.component';
import { TabletsComponent } from './tablets/tablets.component';
import { WatchesComponent } from './watches/watches.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { AirpodsComponent } from './airpods/airpods.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PhonesDetails } from './phones/PhonesDetails/PhonesDetails';
import { LaptopsDetails } from './laptops/LaptopsDetails/LaptopsDetails';
import { AirpodsDetails } from './airpods/AirpodsDetails/AirpodsDetails';
import { TabletsDetails } from './tablets/TabletsDetails/TabletsDetails';
import { WatchesDetails } from './watches/WatchesDetails/WatchesDetails';
import { AccessoriesDetails } from './accessories/AccessoriesDetails/AccessoriesDetails';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: 'checkout', component: CheckoutComponent },
  {path: '', component: HomePageComponent},
  { path: 'cart', component: CartComponent },
  {path: 'form', component: FormsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'phones', component: PhonesComponent},
  {path: 'laptops', component: LaptopsComponent},
  {path: 'tabs', component: TabletsComponent},
  {path: 'watches', component: WatchesComponent},
  {path: 'accessories', component: AccessoriesComponent},
  {path: 'airpods', component: AirpodsComponent},
  {path: 'phones/details/:id', component: PhonesDetails},
  {path: 'laptops/details/:id', component: LaptopsDetails},
  {path: 'tabs/details/:id', component: TabletsDetails},
  {path: 'watches/details/:id', component: WatchesDetails},
  {path: 'airpods/details/:id', component: AirpodsDetails},
  {path: 'accessories/details/:id', component: AccessoriesDetails},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
