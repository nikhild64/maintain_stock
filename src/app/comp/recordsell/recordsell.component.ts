import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Iitem } from 'src/app/interface/interfaces';
import { DataService } from 'src/app/services/data.service';
import { MessageService } from 'primeng/api';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-recordsell',
  templateUrl: './recordsell.component.html',
  styleUrls: ['./recordsell.component.scss'],
  providers: [MessageService],
})
export class RecordsellComponent implements OnInit, OnDestroy {
  checked1 = true;
  loading = false;
  itemQuantity?: number;
  options: any;
  selectedOptions?: Iitem;
  finalSubject = new Subject();
  constructor(
    private dataService: DataService,
    private messageService: MessageService
  ) {}
  ngOnDestroy(): void {
    this.finalSubject.next();
    this.finalSubject.unsubscribe();
  }

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.dataService
        .getData('updateRecord')
        ?.pipe(takeUntil(this.finalSubject))
        .subscribe((data) => {
          this.options = data;
          this.loading = false;
        });
    }, 500);
  }
  changeOnTextClick(value: number){
    if(value===0){
      this.checked1=false;
    }
    else{
      this.checked1=true;
    }
  }
  addTrx(): void {
    let quantity = this.itemQuantity;
    if (this.checked1) {
      quantity = this.itemQuantity;
    } else {
      quantity = (this.itemQuantity as number) * -1;
    }
    this.loading = true;
    const updatedQuantity =
      (this.selectedOptions?.quantity as number) + (quantity as number);
    this.dataService
      .updateQuantity(updatedQuantity, this.selectedOptions?.id as string)
      .then((data) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Stock Updated',
          detail: 'for ' + this.selectedOptions?.iName,
        });

        this.itemQuantity = undefined;
        this.selectedOptions = undefined;
        this.loading = false;
      });
  }
}
