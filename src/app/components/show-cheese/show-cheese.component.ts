import { Component } from '@angular/core';
import { TntService } from '../../services/tnt.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cheese } from '../../models/cheese';

@Component({
  selector: 'app-show-cheese',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './show-cheese.component.html',
  styleUrl: './show-cheese.component.css'
})
export class ShowCheeseComponent {

  constructor(
    private tntService: TntService,
    private router: Router
  ) {}

  cheeses$ = this.tntService.getCheeses();

  getCheese(id: number) {
    this.router.navigate(['cheese', id]);
  }

  deleteCheese(id: number) {

    this.tntService.deleteCheese(id).subscribe(() => {
      this.cheeses$ = this.tntService.getCheeses();
    })
  }

  updateCheese(id: number, cheese: Cheese) {
    this.router.navigate(['update-cheese', id], { queryParams: cheese });
  }

  routeToCheese(id: number) {
    this.router.navigate(['cheese', id]);
  }
}
