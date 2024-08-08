import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { AnimateDirective, Payload, User, UserService } from '@core/index';
import {
  BehaviorSubject,
  debounceTime,
  finalize,
  map,
  Observable,
  of,
  pipe,
  tap,
} from 'rxjs';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PaginatorModule } from 'primeng/paginator';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    UserCardComponent,
    AsyncPipe,
    ProgressSpinnerModule,
    PaginatorModule,
    AnimateDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  users$!: Observable<User[]>;
  searchId = signal<string>('');
  isloading = signal<boolean>(false);
  paginationPayload: Payload = {
    page: 1,
    per_page: 6,
    total: 0,
  };
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.getUserList(this.paginationPayload.page);
  }
  getUserList(page: number) {
    this.isloading.set(true);
    this.users$ = this.userService.getUserList(page).pipe(
      tap((res) => {
        const { page, per_page, total } = res;

        this.paginationPayload = {
          page,
          per_page,
          total,
        };
      }),
      map((res) => res.data),
      finalize(() => this.isloading.set(false))
    );
  }
  onSearch(searchId: string) {
    if (!searchId) {
      this.getUserList(this.paginationPayload.page);
      return;
    }
    this.searchUserById(searchId);
  }
  onPageChange(event: any) {
    this.paginationPayload.page = ++event.page;
    this.getUserList(this.paginationPayload.page);
  }
  searchUserById(searchId: string) {
    this.isloading.set(true);
    this.users$ = this.userService.getUserById(searchId).pipe(
      map((res) => Array(res.data)),
      finalize(() => this.isloading.set(false))
    );
  }
}
