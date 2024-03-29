import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Fornecedor } from '../../model/fornecedor.model';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-editar',
  templateUrl: './fornecedor-editar.component.html',
  styleUrls: ['./fornecedor-editar.component.css']
})
export class FornecedorEditarComponent implements OnInit {
  formulario: FormGroup;
  fornecedor: Fornecedor = {
    nome: '',
    telefone: null,
    email: '',
    nif: '',
    status: false,
  };
  constructor(
    private fornecedorService: FornecedorService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.validarForm();
    this.mostrarFornecedor();
  }
  // Validação dos Formularios
  validarForm() {
    this.formulario = this.formBuilder.group({
      'nome': ['', Validators.required],
      'telefone': [''],
      'email': ['', Validators.required],
      'nif': ['', Validators.required],
      'status': [''],
    });
  }
  mostrarFornecedor() {
    this.route.params.subscribe((params: Params) => {
      const id = +params['id'];
      this.fornecedor = this.fornecedorService.listId(id);
      if (this.fornecedor === null) {
        this.fornecedor = {};
      }
    }
    );
  }
  // sera executado quando o formulario for submetido
  onSubmit() {
    const fornecedorEditar = new Fornecedor;
    fornecedorEditar.id = this.fornecedor.id;
    fornecedorEditar.nome = this.fornecedor.nome;
    fornecedorEditar.telefone = this.fornecedor.telefone;
    fornecedorEditar.email = this.fornecedor.email;
    fornecedorEditar.nif = this.fornecedor.nif;
    fornecedorEditar.status = this.fornecedor.status;

    this.fornecedorService.editarFornecedor(fornecedorEditar).subscribe(response => {
      console.log('Resultado:', response);
    });
  }

  verificarValidTouched(campo: string) {
    return (
      !this.formulario.get(campo).valid &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    );
  }
  verificarEmailInvalido() {
    const campoEmail = this.formulario.get('email');
    if (this.formulario.get('email').errors) {
      return this.formulario.get('email').errors.email && campoEmail.touched;
    }
  }
  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificarValidTouched(campo),
      'has-feedback': this.verificarValidTouched(campo)
    };
  }
  resetar() {
    this.formulario.reset();
  }

}
