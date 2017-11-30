import { Component, OnInit } from '@angular/core';
import { Meter } from "../meter";
import { MeterService } from "../meter.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-meter-list',
  templateUrl: './meter-list.component.html',
  styleUrls: ['./meter-list.component.css'],
  providers: [MeterService]
})
export class MeterListComponent implements OnInit {

  private meters: Meter[];

  constructor(private router: Router, private meterService: MeterService) { }

  ngOnInit() { //when component loading get all meters and set the meters[]
    this.getAllMeter();
  }

  getAllMeter() {
    this.meterService.findAll().subscribe(
      meters => {
        this.meters = meters;
      },
      err => {
        console.log(err);
      }

    );
  }
  redirectNewMeterPage() {
    this.router.navigate(['/meter/create']);
  }

  editMeterPage(meter: Meter) {
    if (this.meters) {
      this.router.navigate(['/meter/edit', meter.id]);
    }
  }

  deleteMeter(meter: Meter) {
    if (meter) {
      this.meterService.deleteMeterById(meter.id).subscribe(
        res => {
          this.getAllMeter();
          this.router.navigate(['/meter']);
          console.log('done');
        }
      );
    }
  }
  redirectSummaryMeterPage(meter:Meter) {
      if (this.meters) {
        this.router.navigate(['/meter/summary', meter.id]);
      }
  }
}
