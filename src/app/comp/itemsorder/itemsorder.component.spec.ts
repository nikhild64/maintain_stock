import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsorderComponent } from './itemsorder.component';

describe('ItemsorderComponent', () => {
  let component: ItemsorderComponent;
  let fixture: ComponentFixture<ItemsorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
