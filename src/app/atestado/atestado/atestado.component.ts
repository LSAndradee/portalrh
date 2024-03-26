import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-atestado',
  templateUrl: './atestado.component.html',
  styleUrls: ['./atestado.component.scss']
})
export class AtestadoComponent {
  form: FormGroup;
  cpf: string = '';

  onSubmit() {
    // Remove caracteres não numéricos do CPF antes de enviar
    const cpf = this.form.value.cpf.replace(/\D/g, '');
    // Enviar CPF formatado (com pontuação) para o backend
    console.log(cpf);
  }

  constructor(private http: HttpClient) {
    this.form = new FormGroup({
      cpf: new FormControl('')
    });
  }

  uploadFile(input: HTMLInputElement) {
    const file = input.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('doc', file);

      this.http.post('http://localhost:4200/doc', formData)
        .subscribe(resposta => console.log());
    }
  }
}

@Directive({
  selector: '[cpfMask]'
})
export class CpfMaskDirective {
  cpf: any;

  constructor(private ngControl: NgControl) { }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const input = event.target;
    const value = input.value.replace(/\D/g, '').substring(0, 11);
    const cpf = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    this.ngControl.valueAccessor!.writeValue(cpf);
  }

  formatarCPF(cpf: string): string {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length >= 3 && cpf.length <= 6) {
      cpf = cpf.replace(/(\d{3})/, '$1.');
    } else if (cpf.length >= 7 && cpf.length <= 9) {
      cpf = cpf.replace(/(\d{3})(\d{3})/, '$1.$2.');
    } else if (cpf.length >= 10 && cpf.length <= 11) {
      cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3-');
    }
    return cpf;
  }

}
