import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosLeidosChipComponent } from './libros-leidos-chip.component';

describe('LibrosLeidosChipComponent', () => {
  let component: LibrosLeidosChipComponent;
  let fixture: ComponentFixture<LibrosLeidosChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrosLeidosChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosLeidosChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
