import { Component } from '@angular/core';
import { UserCombinationsService } from '../user-combinations.service';

@Component({
  selector: 'app-user-combinations',
  standalone: true,
  imports: [],
  templateUrl: './user-combinations.component.html',
  styleUrl: './user-combinations.component.css'
})

export class UserCombinationsComponent {
  selectedCheese: string | undefined;
  selectedWine: string | undefined;

  constructor(private combinationService: UserCombinationsService) {}

  saveCombination(): void {
    if (this.selectedCheese && this.selectedWine) {
      this.combinationService.saveCombination(this.selectedCheese, this.selectedWine);
      this.selectedCheese = '';
      this.selectedWine = '';
    }
  }
}
