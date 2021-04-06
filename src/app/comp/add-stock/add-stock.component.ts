import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Message } from 'primeng/api/message';
import { Iitem } from 'src/app/interface/interfaces';
import { DataService } from 'src/app/services/data.service';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss'],
  providers: [MessageService],
})
export class AddStockComponent implements OnInit {
  @ViewChild('f') f?: NgForm;
  msgs: Message[] = [];
  mrp?: number;
  cp?: number;
  sp?: number;
  quantity?: number;
  constructor(
    private messageService: MessageService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService.addLogFromAddScreen();
  }
  onSubmit(): void {
    if (this.f?.valid) {
      const stockITem: Iitem = {
        cp: +this.f?.value.cp,
        mrp: +this.f?.value.mrp,
        iName: this.f?.value.iName,
        partNo: this.f?.value.partNo,
        position: this.f?.value.position,
        quantity: +this.f?.value.quantity,
        sp: +this.f?.value.sp,
      };

      this.dataService.addItem(stockITem).subscribe(
        (data) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Item Added',
          });
        },
        (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Some Error Occured',
            detail: 'Contact Admin ' + error.error.error,
          });
        }
      );
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'All Required Field',
        detail: 'No value entered',
      });
    }

    setTimeout(() => {
      this.messageService.clear();
    }, 5000);
    this.f?.resetForm();
  }
}
