import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BienesRaicesApiService } from 'src/app/helpers/services/bienes-raices-api.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  form!: FormGroup;
  estadoCivil: Array<any> = [];
  constructor(
    private formBuldier: FormBuilder,
    private apiBienesRaices: BienesRaicesApiService
  ) { }

  ngOnInit(): void {
    this.apiBienesRaices.postEstadoCivil().subscribe({
      next: (estadoCivil) => {
        this.estadoCivil = estadoCivil.result;
      },
    });
    this.form = this.formBuldier.group({
      nombres: ['', [Validators.required, Validators.pattern(/^.*\w$/)]],
      apellidos: ['', [Validators.required, Validators.pattern(/^.*\w$/)]],
      fumas: [false, [Validators.required]],
      actualmentePracticasLectura: [false, [Validators.required]],
      librosLeidosUltimosTresMeses: [{value: [], disabled: true}, [Validators.required]],
      estadoCivil: ['', []],
    });
  }

  toggleInputLibros(): void {
    if (this.form.value.actualmentePracticasLectura){
      this.form.get('librosLeidosUltimosTresMeses')?.enable();
    }else{
      this.form.get('librosLeidosUltimosTresMeses')?.disable();
    }
  }

  submit(): void {
    if (!this.form.valid) {
      alert('El formulario contiene campos invalidos');
      return;
    }
    alert('Formulario enviado');
  }

  getError(key: string, type: string): boolean {
    return this.form.get(key)?.errors?.[type];
  }

}
