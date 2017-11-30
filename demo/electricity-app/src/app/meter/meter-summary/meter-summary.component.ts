import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MeterService} from "../meter.service";
import {Meter} from "../meter";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-meter-summary',
  templateUrl: './meter-summary.component.html',
  styleUrls: ['./meter-summary.component.css'],
  providers: [MeterService]
})
export class MeterSummaryComponent implements OnInit, OnDestroy {

  private summary: number;
  private id: number;

  summaryForm: FormGroup;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private meterService: MeterService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.summaryForm = new FormGroup({
      year: new FormControl('', Validators.required),
      month: new FormControl('', Validators.required)
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getAllSummary(year:number, month:number) {
    this.meterService.findSummary(this.id, year, month).subscribe(
      summary => {
        this.summary = summary;
      },
      err => {
        console.log(err);
        this.summary = err;
      }

    );
  }

  onSubmit() {
    if (this.summaryForm.valid) {
        this.getAllSummary(this.summaryForm.controls['year'].value, this.summaryForm.controls['month'].value);
      }
    }
  redirectMeterPage(){
    this.router.navigate(['/meter']);

  }

}
