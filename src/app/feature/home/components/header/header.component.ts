import {
  ChangeDetectionStrategy,
  Component,
  model,
  OnInit,
  output,
} from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { debounceTime, filter, fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputTextModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  searchTermChanged = output<string>();
  searchTermControl = new FormControl('', {
    nonNullable: true,
    validators: Validators.pattern(/^[0-9]*$/),
  });
  ngOnInit(): void {
    this.searchTermControl.valueChanges
      .pipe(
        debounceTime(500),
        filter(() => this.searchTermControl.valid)
      )
      .subscribe((searchTerm) => this.searchTermChanged.emit(searchTerm));
  }
}
