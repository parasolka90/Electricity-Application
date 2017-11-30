import { Component, OnInit } from '@angular/core';
import { Rate } from "../rate";
import { RateService } from "../rate.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-rate-list',
  templateUrl: './rate-list.component.html',
  styleUrls: ['./rate-list.component.css'],
  providers: [RateService]
})
export class RateListComponent implements OnInit {

  private rates: Rate[];

  constructor(private router: Router,private rateService: RateService) { }

  ngOnInit() {
    this.getAllRates();
  }

  getAllRates() {
    this.rateService.findAll().subscribe(
      rates => {
        this.rates = rates;
      },
      err => {
        console.log(err);
      }

    );
  }
  redirectNewRatePage() {
    this.router.navigate(['/rate/create']);
  }

  editRatePage(rate: Rate) {
    if (rate) {
      this.router.navigate(['/rate/edit', rate.id]);
    }
  }

  deleteRate(rate: Rate) {
    if (rate) {
      this.rateService.deleteRateById(rate.id).subscribe(
        res => {
          this.getAllRates();
          this.router.navigate(['/rate']);
          console.log('done');
        }
      );
    }
  }
}
