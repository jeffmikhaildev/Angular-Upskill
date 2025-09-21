import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CurrencyConverterPipe } from '../../custom-pipes/currency-converter.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, CurrencyConverterPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  title: string = 'hello world';
  today = new Date();
  amount = 10;
}
