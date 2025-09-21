import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  students: string[] = [
    'John Doe',
    'Mark Santos',
    'Vic Sotto',
    'Sam Pinto',
    'Anne Cortez',
  ];

  studentData: { name: string; age: number; email: string }[] = [
    { name: 'John', age: 22, email: 'john@gmail.com' },
    { name: 'Mark', age: 36, email: 'mark@gmail.com' },
    { name: 'Vic', age: 72, email: 'vic@gmail.com' },
    { name: 'Sam', age: 36, email: 'sam@gmail.com' },
    { name: 'Anne', age: 41, email: 'anne@gmail.com' },
  ];

  show: boolean = true;

  toggleShow() {
    this.show = !this.show;
  }

  color: string = 'blues';

  changeColor(color: string) {
    this.color = color;
  }
}
