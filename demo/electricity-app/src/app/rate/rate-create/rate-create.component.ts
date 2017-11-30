import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RateService} from "../rate.service";
import {Rate} from "../rate";
import {ActivatedRoute, Router} from '@angular/router';
import {Tariff} from "../../tariff/tariff";
import {Period} from "../../period/period";


@Component({
  selector: 'app-rate-create',
  templateUrl: './rate-create.component.html',
  styleUrls: ['./rate-create.component.css'],
  providers: [RateService]
})
export class RateCreateComponent implements OnInit, OnDestroy {

  id: number;
  rate: Rate;

  rateForm: FormGroup;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private rateService: RateService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.rateForm = new FormGroup({
      price: new FormControl('', Validators.required),
      tariff: new FormControl('', Validators.required),
      period: new FormControl('', Validators.required)
    });
    if (this.id) { //edit form
      this.rateService.findById(this.id).subscribe(
        rate => {
          this.id = rate.id;
          this.rateForm.patchValue({
            price: rate.price,
            tariff: rate.tariff.id,
            period: rate.period.id,
          });
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
    if (this.rateForm.valid) {
      if (this.id) {
        let rate: Rate = new Rate(this.id,
          this.rateForm.controls['price'].value,
          new Tariff(this.rateForm.controls['tariff'].value,null,null),
          new Period(this.rateForm.controls['period'].value,null,null));
        this.rateService.updateRate(rate).subscribe();
      } else {
        let rate: Rate = new Rate(null,
          this.rateForm.controls['price'].value,
          new Tariff(this.rateForm.controls['tariff'].value,null,null),
          new Period(this.rateForm.controls['period'].value,null,null));
        this.rateService.saveRate(rate).subscribe();

      }
    this.rateForm.reset();
    this.router.navigate(['/rate']);
  }
  }
  redirectRatePage() {
    this.router.navigate(['/rate']);

  }
}
