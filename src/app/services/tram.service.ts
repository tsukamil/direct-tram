import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Tramstops from '../mock';
import { Tramstop } from '../Tramstop';

@Injectable({
  providedIn: 'root'
})
export class TramService {

  constructor() { }

  getTramstops(): Observable<Tramstop[]> {
    return of(Tramstops);
  }
}
