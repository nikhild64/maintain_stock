import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {
  loggedIn = false;
  items: MenuItem[] = [
    {
      label: 'Add New Item To Stock List',
      icon: 'pi pi-fw pi-plus-circle',
      routerLink: '/add-stock',
      visible: false,
    },
    {
      label: 'See Stock',
      icon: 'pi pi-fw pi-th-large',
      routerLink: '/see-stock',
      visible: false,
    },
    {
      label: 'Items to Order',
      icon: 'pi pi-fw pi-shopping-cart',
      routerLink: '/less-stock',
      visible: false,
    },
    {
      label: 'Record Sell & New Stock',
      icon: 'pi pi-fw pi-money-bill',
      routerLink: '/sell-newstock',
      visible: false,
    },
  ];
  constructor(private firestoreAuth: AngularFireAuth) {
    firestoreAuth.user.subscribe((data) => {
      if (data?.email) {
        this.loggedIn = true;
        this.items.forEach((v) => {
          v.visible = true;
        });
      } else {
        this.loggedIn = false;
        this.items.forEach((v) => {
          v.visible = false;
        });
      }
    });
  }
  logout(): void {
    this.firestoreAuth.signOut();
  }

  ngOnInit(): void { }
}
