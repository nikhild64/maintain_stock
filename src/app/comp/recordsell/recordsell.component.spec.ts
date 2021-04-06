import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsellComponent } from './recordsell.component';

describe('RecordsellComponent', () => {
  let component: RecordsellComponent;
  let fixture: ComponentFixture<RecordsellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
