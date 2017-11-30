import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PeriodService} from "../period.service";
import {Period} from "../period";
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-period-create',
  templateUrl: './period-create.component.html',
  styleUrls: ['./period-create.component.css'],
  providers: [PeriodService]
})
export class PeriodCreateComponent implements OnInit, OnDestroy {

  id: number;
  period: Period;

  periodForm: FormGroup;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private periodService: PeriodService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.periodForm = new FormGroup({
      year: new FormControl('', Validators.required),
      month: new FormControl('', Validators.required)});

    if (this.id) { //edit form
      this.periodService.findById(this.id).subscribe(
        period => {
          this.id = period.id;
          this.periodForm.patchValue({
            year: period.year,
            month: period.month});
        },error => {
          console.log(error);
        }
      );

    }

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit() {
    if (this.periodForm.valid) {
      if (this.id) {
        let period: Period = new Period(this.id,
          this.periodForm.controls['year'].value,
          this.periodForm.controls['month'].value);
        this.periodService.updatePeriod(period).subscribe();
      } else {
        let period: Period = new Period(null,
          this.periodForm.controls['year'].value,
          this.periodForm.controls['month'].value);
        this.periodService.savePeriod(period).subscribe();

      }
      this.periodForm.reset();
      this.router.navigate(['/period']);
    }
  }
  redirectPeriodPage() {
    this.router.navigate(['/period']);

  }
}
