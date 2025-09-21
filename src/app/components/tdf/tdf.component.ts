import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tdf',
  imports: [FormsModule, CommonModule],
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css',
})
export class TdfComponent {
  userData: NgForm | null = null;

  onSubmit(value: NgForm) {
    this.userData = value;

    console.log(value);
  }
}
