import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserCombinationsService } from '../user-combinations.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-combinations',
  templateUrl: './user-combinations.component.html',
  styleUrls: ['./user-combinations.component.css'],
  imports: [FormsModule, CommonModule],
  standalone: true,
})
export class UserCombinationsComponent implements OnInit, OnDestroy {
  wine!: string;
  cheese!: string;
  pairings: { wine: string, cheese: string }[];
  pairingSubscription!: Subscription;

  constructor(private userCombinationsService: UserCombinationsService) {
    this.pairings = [];
  }

  ngOnInit() {
    if (!this.pairingSubscription) {
      this.pairingSubscription = this.userCombinationsService.pairingAdded().subscribe((pairing: { wine: string; cheese: string; }) => {
        this.pairings.push(pairing);
      });
    }
  }

  ngOnDestroy() {
    if (this.pairingSubscription) {
      this.pairingSubscription.unsubscribe();
    }
  }

  savePairing() {
    this.userCombinationsService.savePairing(this.wine, this.cheese);
    this.wine = ''; // Clear input fields after saving
    this.cheese = '';
  }
}
