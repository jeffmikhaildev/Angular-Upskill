import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'CodeStepByStep Angular 19';

  counter: number = 0;

  handleCounter(value: string) {
    if (value === 'add') {
      this.counter++;
    } else if (value === 'minus') {
      this.counter > 0 ? this.counter-- : 0;
    } else {
      this.counter = 0;
    }
  }

  username: string = '';

  display: boolean = true;
  shown: boolean = true;
  shown2: boolean = true;

  toggle() {
    this.shown = !this.shown;
  }

  toggle2() {
    this.shown2 = !this.shown2;
  }

  color: string = 'blue';

  handleColor(value: string) {
    this.color = value;
  }

  changeColor(event: Event) {
    this.color = (event.target as HTMLInputElement).value;
  }

  colors: string[] = ['red', 'green', 'blue', 'yellow', 'cyan'];

  students: any = [
    { name: 'John Doe', age: 21, email: 'johndoe@gmail.com' },
    { name: 'Mark Santos', age: 36, email: 'marksantos@gmail.com' },
    { name: 'Sandara Park', age: 40, email: 'sandara@gmail.com' },
  ];

  handleEvent(e: Event) {
    console.log('Function called', e);
  }
}
