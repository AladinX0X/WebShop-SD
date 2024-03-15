import { NgForm, FormsModule } from '@angular/forms';
import { Component, NgModule, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit{

  form: any = {
    mail: '',
    name: '',
    lastName: '',
    opinion: '',
    changes: '',
    phone: '',
  }
bg: any;

constructor(private translate: TranslateService){}


ngOnInit(): void {
  }

submitForm() {
  const translatedMessage = this.translate.instant('data.formisSent');
  const filledForm = JSON.stringify(this.form)
  Swal.fire({
    title: translatedMessage,
    icon: 'success',
    confirmButtonText: 'OK'
  });
    localStorage.setItem('form', filledForm )
    this.form.mail = '';
    this.form.name = '';
    this.form.lastName = '';
    this.form.opinion = '';
    this.form.changes = '';
    this.form.phone = ''
  }
}


