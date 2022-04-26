import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calcula-fecha',
  templateUrl: './calcula-fecha.component.html',
  styleUrls: ['./calcula-fecha.component.scss']
})
export class CalculaFechaComponent implements OnInit {
  calculateDateForm!: FormGroup;
  date: Date = new Date();
  constructor(
    private formBuldier: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.calculateDateForm = this.formBuldier.group({
      date: [this.date, Validators.required],
      unit: ['dias', Validators.required],
      quantity: [0, [Validators.required, Validators.pattern(/^-{0,1}\d+$/), Validators.max(100000)]]
    });
  }

  getError(key: string, type: string): boolean{
    return this.calculateDateForm.get(key)?.errors?.[type];
  }

  changeDate(){
    const values = this.calculateDateForm.value;
    const date: Date = new Date(values.date);
    switch (values.unit) {
      case 'dias':
        date.setDate(date.getDate() + values.quantity);
        break;
      case 'meses':
        date.setMonth(date.getMonth() + values.quantity);
        break;
      case 'años':
        date.setFullYear(date.getFullYear() + values.quantity);
        break;
    }
    this.date = date;
  }
}
