import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/helpers/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = 'Ocurrio un error';

  @ViewChild('errorAlert') errorAlertRef!: ElementRef;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  getError(key: string, type: string): boolean | undefined {
    return this.loginForm.get(key)?.errors?.[type];
  }

  login() {
    if (!this.loginForm.valid) {
      this.errorMessage = 'No se aceptan campos invalidos';
      this.showAlert();
      return;
    }
    const username = this.loginForm.value['username'];
    const password = this.loginForm.value['password'];
    this.authService.login(username, password).subscribe({
      error: (error) => {
        this.errorMessage = `${error.error.mensaje}`;
        this.showAlert();
      }
    });
  }

  hiddenAlert(): void{
    this.errorAlertRef.nativeElement.classList.add('d-none');
  }

  showAlert(): void{
    this.errorAlertRef.nativeElement.classList.remove('d-none');
  }

}
