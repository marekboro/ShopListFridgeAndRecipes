import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgeFoodListEditComponent } from './fridge-food-list-edit.component';

describe('FridgeFoodListEditComponent', () => {
  let component: FridgeFoodListEditComponent;
  let fixture: ComponentFixture<FridgeFoodListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FridgeFoodListEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FridgeFoodListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
