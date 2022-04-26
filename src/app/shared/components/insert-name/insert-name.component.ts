import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-insert-name',
  templateUrl: './insert-name.component.html',
  styleUrls: ['./insert-name.component.scss']
})
export class InsertNameComponent implements OnInit {
  inputName: string = '';
  constructor(
    public dialogRef: MatDialogRef<InsertNameComponent>,
    @Inject(MAT_DIALOG_DATA) public name: string,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
