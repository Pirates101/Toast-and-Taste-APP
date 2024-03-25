import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCombinationsService {
  combinations: { cheese: string, wine: string }[] = [];
  constructor() { }

  saveCombination(cheese: string, wine: string): void {
    this.combinations.push({ cheese, wine });
  }

  getCombinations(): { cheese: string, wine: string }[] {
    return this.combinations;
  }

  deleteCombination(index: number): void {
    if (index >= 0 && index < this.combinations.length) {
      this.combinations.splice(index, 1);
    }
  }
}
