import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PaginateResponse, User } from '@core/models/user';
import { Observable, of } from 'rxjs';
import { map, tap, shareReplay } from 'rxjs/operators';

const USER_API = 'https://reqres.in/api/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);
  private userCache = new Map<number, Observable<PaginateResponse<User[]>>>();
  private userByIdCache = new Map<string, Observable<{ data: User }>>();

  getUserList(page: number): Observable<PaginateResponse<User[]>> {
    if (this.userCache.has(page)) {
      return this.userCache.get(page)!;
    }
    return this.http
      .get<PaginateResponse<User[]>>(`${USER_API}?page=${page}`)
      .pipe(tap((res) => this.userCache.set(page, of(res))));
  }

  getUserById(id: string): Observable<{ data: User }> {
    if (this.userByIdCache.has(id)) {
      return this.userByIdCache.get(id)!;
    }

    return this.http
      .get<{ data: User }>(`${USER_API}/${id}`)
      .pipe(tap((res) => this.userByIdCache.set(id, of(res))));
  }
}
