import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor() { }

  createOf(): Observable<number> {
    return of(1, 2, 3);
  }
}
