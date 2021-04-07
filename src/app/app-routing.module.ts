import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStockComponent } from './comp/add-stock/add-stock.component';
import { ItemsorderComponent } from './comp/itemsorder/itemsorder.component';
import { LoginComponent } from './comp/login/login.component';
import { SeeStockComponent } from './comp/see-stock/see-stock.component';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { RecordsellComponent } from './comp/recordsell/recordsell.component';
import { LandingPageComponent } from './comp/landing-page/landing-page.component';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const routes: Routes = [
  {
    path: 'add-stock',
    loadChildren:()=>import('./add-stock/add-stock.module').then(m=>m.AddStockModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },

  {
    path: 'see-stock',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    component: SeeStockComponent,
  },

  {
    path: 'less-stock',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    component: ItemsorderComponent,
  },
  {
    path: 'sell-newstock',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    component: RecordsellComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: LandingPageComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
