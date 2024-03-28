// user-combinations.service.ts

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCombinationsService {
  private pairings: { wine: string, cheese: string }[] = [];
  private pairingAddedSubject = new Subject<{ wine: string, cheese: string }>();

  constructor() { }

  savePairing(wine: string, cheese: string): void {
    this.pairings.push({ wine, cheese });
    this.pairingAddedSubject.next({ wine, cheese });
  }

  getPairings(): { wine: string, cheese: string }[] {
    return this.pairings;
  }

  pairingAdded(): Observable<{ wine: string, cheese: string }> {
    return this.pairingAddedSubject.asObservable();
  }
}
