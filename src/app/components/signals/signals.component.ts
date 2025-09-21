import {
  Component,
  computed,
  effect,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signals',
  imports: [FormsModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
})
export class SignalsComponent {
  count = signal<number>(0);
  count2: WritableSignal<number | string> = signal(0);
  count3: Signal<number> = computed(() => 10);

  constructor() {
    effect(() => {
      console.log(this.count());
    });
  }

  updateValue(action: string) {
    switch (action) {
      case 'add':
        this.count.update((value) => value + 1);
        break;
      case 'minus':
        this.count.update((value) => (value > 0 ? value - 1 : 0));
        break;
      case 'reset':
        this.count.set(0);
        break;
      default:
        console.warn('Unknown action');
        break;
    }
  }

  // ***  2 way binding
  username = '';
}
