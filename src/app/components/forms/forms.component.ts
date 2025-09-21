import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TdfComponent } from "../tdf/tdf.component";

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule, TdfComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ]),
    });
  }

  onSubmit() {
    console.log(this.userForm.value);

    // clear all form values
    this.userForm.reset({
      name: '',
      email: '',
      password: '',
    });
  }

  // setValue() {
  //   this.userForm.setValue({
  //     name: 'johndoe',
  //     email: 'johndoe@gmail.com',
  //     password: '12345',
  //   });
  // }
}
