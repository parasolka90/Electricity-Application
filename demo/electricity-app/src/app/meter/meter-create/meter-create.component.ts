import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MeterService} from "../meter.service";
import {Meter} from "../meter";
import {ActivatedRoute, Router} from '@angular/router';
import {Client} from "../../client/client";


@Component({
  selector: 'app-meter-create',
  templateUrl: './meter-create.component.html',
  styleUrls: ['./meter-create.component.css'],
  providers: [MeterService]
})
export class MeterCreateComponent implements OnInit, OnDestroy {

  id: number;
  meter: Meter;

  meterForm: FormGroup;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private meterService: MeterService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.meterForm = new FormGroup({
      clientId: new FormControl('', Validators.required)
    });


    if (this.id) { //edit form
      this.meterService.findById(this.id).subscribe(
        meter => {
          this.id = meter.id;
          this.meterForm.patchValue({
            clientId: meter.client.id
          });
        }, error => {
          console.log(error);
        }
      );

    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit() {
    if (this.meterForm.valid) {
      if (this.id) {
        let meter: Meter = new Meter(this.id,new Client(
          this.meterForm.controls['clientId'].value));
        this.meterService.updateMeter(meter).subscribe();
      } else {
        let meter: Meter = new Meter(null,
          new Client(this.meterForm.controls['clientId'].value));
        this.meterService.saveMeter(meter).subscribe();

      }
      this.meterForm.reset();
      this.router.navigate(['/meter']);
    }
  }

    redirectMeterPage(){
      this.router.navigate(['/meter']);

    }
  }

