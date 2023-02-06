import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'services' , component:ServicesComponent},
  {path:'prodcuts' , component:ProductComponent},
  {path:'clients' , component:ClientsComponent},
  {path:'contact' , component:ContactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
