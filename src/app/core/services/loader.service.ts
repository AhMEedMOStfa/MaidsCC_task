import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loading = signal<boolean>(false);
  start() {
    if (!this.loading()) this.loading.set(true);
  }
  stop() {
    if (this.loading()) this.loading.set(false);
  }
}
