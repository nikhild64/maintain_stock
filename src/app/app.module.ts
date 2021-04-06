import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './comp/menu-bar/menu-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// primeng
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';

import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from 'primeng/api';
import { AddStockComponent } from './comp/add-stock/add-stock.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { SeeStockComponent } from './comp/see-stock/see-stock.component';
import { ItemsorderComponent } from './comp/itemsorder/itemsorder.component';
import { LoginComponent } from './comp/login/login.component';
import { PasswordModule } from 'primeng/password';
import { DialogModule } from 'primeng/dialog';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RecordsellComponent } from './comp/recordsell/recordsell.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ChipModule } from 'primeng/chip';
import { DropdownModule } from 'primeng/dropdown';
import { LoadingComponent } from './comp/loading/loading.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { LandingPageComponent } from './comp/landing-page/landing-page.component';
import { ThemePaletteComponent } from './comp/theme-palette/theme-palette.component';
import {TooltipModule} from 'primeng/tooltip';
import {MenuModule} from 'primeng/menu';
import {SlideMenuModule} from 'primeng/slidemenu';
import { WhatsnewComponent } from './comp/whatsnew/whatsnew.component';
import {RippleModule} from 'primeng/ripple';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    AddStockComponent,
    SeeStockComponent,
    ItemsorderComponent,
    LoginComponent,
    RecordsellComponent,
    LoadingComponent,
    LandingPageComponent,
    ThemePaletteComponent,
    WhatsnewComponent,
  ],
  imports: [
    RippleModule,
    SlideMenuModule,
    MenuModule,
    TooltipModule,
    FieldsetModule,
    ToastModule,
    ProgressSpinnerModule,
    DropdownModule,
    ChipModule,
    InputSwitchModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    DialogModule,
    CardModule,
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    BrowserAnimationsModule,

    TableModule,
    PasswordModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
