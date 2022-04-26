import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertNameComponent } from './insert-name.component';

describe('InsertNameComponent', () => {
  let component: InsertNameComponent;
  let fixture: ComponentFixture<InsertNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
