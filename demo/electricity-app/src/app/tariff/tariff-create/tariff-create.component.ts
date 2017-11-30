import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TariffService} from "../tariff.service";
import {Tariff} from "../tariff";
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-tariff-create',
  templateUrl: './tariff-create.component.html',
  styleUrls: ['./tariff-create.component.css'],
  providers: [TariffService]
})
export class TariffCreateComponent implements OnInit, OnDestroy {

  id: number;
  tariff: Tariff;

  tariffForm: FormGroup;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private tariffService: TariffService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.tariffForm = new FormGroup({
      tariffSymbol: new FormControl('', Validators.required),
      equation: new FormControl('', Validators.required)
    });

    if (this.id) { //edit form
      this.tariffService.findById(this.id).subscribe(
        tariff => {
          this.id = tariff.id;
          this.tariffForm.patchValue({
            tariffSymbol: tariff.tariffSymbol,
            equation: tariff.equation
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
    if (this.tariffForm.valid) {
      if (this.id) {
        let tariff: Tariff = new Tariff(this.id,
          this.tariffForm.controls['tariffSymbol'].value,
          this.tariffForm.controls['equation'].value)
        this.tariffService.updateTariff(tariff).subscribe();
      } else {
        let tariff: Tariff = new Tariff(null,
          this.tariffForm.controls['tariffSymbol'].value,
          this.tariffForm.controls['equation'].value)
        this.tariffService.saveTariff(tariff).subscribe();

      }
      this.tariffForm.reset();
      this.router.navigate(['/tariff']);
    }
  }

    redirectTariffPage() {
    this.router.navigate(['/tariff']);

  }
}
