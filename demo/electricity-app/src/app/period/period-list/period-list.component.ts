import { Component, OnInit } from '@angular/core';
import { Period } from "../period";
import { PeriodService } from "../period.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-period-list',
  templateUrl: './period-list.component.html',
  styleUrls: ['./period-list.component.css'],
  providers: [PeriodService]
})
export class PeriodListComponent implements OnInit {

  private periods: Period[];

  constructor(private router: Router,private periodService: PeriodService) { }

  ngOnInit() {
    this.getAllPeriod();
  }

  getAllPeriod() {
    this.periodService.findAll().subscribe(
      periods => {
        this.periods = periods;
      },
      err => {
        console.log(err);
      }

    );
  }
  redirectNewPeriodPage() {
    this.router.navigate(['/period/create']);
  }

  editPeriodPage(period: Period) {
    if (period) {
      this.router.navigate(['/period/edit', period.id]);
    }
  }

  deletePeriod(period: Period) {
    if (period) {
      this.periodService.deletePeriodById(period.id).subscribe(
        res => {
          this.getAllPeriod();
          this.router.navigate(['/period']);
          console.log('done');
        }
      );
    }
  }
}
