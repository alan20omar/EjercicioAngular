import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-libros-leidos-chip',
  templateUrl: './libros-leidos-chip.component.html',
  styleUrls: ['./libros-leidos-chip.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LibrosLeidosChipComponent),
      multi: true
    }
  ]
})
export class LibrosLeidosChipComponent implements OnInit, ControlValueAccessor {
  @Input() hasError: boolean = false;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  books: any[] = [];
  onChange = (_: any) => {};
  onTouch = () => {};
  isDisabled!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.books.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
    this.onChange(this.books);
  }

  remove(fruit: any): void {
    const index = this.books.indexOf(fruit);

    if (index >= 0) {
      this.books.splice(index, 1);
    }
    this.onChange(this.books);
  }

  writeValue(value: any): void {
    this.books = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

  setDisabledState(state: boolean): void {
    this.isDisabled = state;
  }

  setError(chipList: any): boolean {
    chipList.errorState = this.hasError;
    return this.hasError;
  }

}
