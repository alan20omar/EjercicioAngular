import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InsertNameComponent } from 'src/app/shared/components/insert-name/insert-name.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  name: string = '';
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openModal(){
    const dialogRef = this.dialog.open(InsertNameComponent, {
      width: '250px',
      data: this.name,
    });

    dialogRef.afterClosed().subscribe((inputName: string) => {
        this.name = inputName.trim()||'';
    });
  }

}
