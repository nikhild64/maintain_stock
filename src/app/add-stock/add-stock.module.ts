import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddStockRoutingModule } from './add-stock-routing.module';
import { AddStockComponent } from '../comp/add-stock/add-stock.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';


@NgModule({
  declarations: [AddStockComponent],
  imports: [
    CommonModule,
    AddStockRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MessagesModule,
    MessageModule,
  ]
})
export class AddStockModule { }
