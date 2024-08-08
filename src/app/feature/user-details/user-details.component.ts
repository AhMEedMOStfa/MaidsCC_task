import { AsyncPipe, Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AnimateDirective,
  LoadingService,
  User,
  UserService,
} from '@core/index';
import { finalize, map, Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [AnimateDirective, AsyncPipe],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent {
  id = input<string>('');
  userDetails$!: Observable<User>;
  constructor(
    private location: Location,
    private userService: UserService,
    private loadingService: LoadingService
  ) {}
  ngOnInit() {
    this.getUserDetails();
  }
  getUserDetails() {
    this.loadingService.start();
    this.userDetails$ = this.userService.getUserById(this.id()).pipe(
      map((res) => res.data),
      finalize(() => {
        this.loadingService.stop();
      })
    );
  }
  goBack() {
    this.location.back();
  }
}
