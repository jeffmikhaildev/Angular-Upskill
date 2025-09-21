import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  users = [
    { id: 1, name: 'JohnDoe', age: 22 },
    { id: 2, name: 'MarkBGC', age: 36 },
    { id: 3, name: 'MariaMakiling', age: 53 },
    { id: 4, name: 'JuanTamad', age: 47 },
    { id: 5, name: 'GinaCool', age: 65 },
  ];
}
