import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReadingService} from "../reading.service";
import {Reading} from "../reading";
import {ActivatedRoute, Router} from '@angular/router';
import {Meter} from "../../meter/meter";
import {Tariff} from "../../tariff/tariff";


@Component({
  selector: 'app-reading-create',
  templateUrl: './reading-create.component.html',
  styleUrls: ['./reading-create.component.css'],
  providers: [ReadingService]
})
export class ReadingCreateComponent implements OnInit, OnDestroy {

  id: number;
  reading: Reading;

  readingForm: FormGroup;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private readingService: ReadingService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.readingForm = new FormGroup({
      startingDate: new FormControl('', Validators.required),
      endingDate: new FormControl('', Validators.required),
      reading: new FormControl('', Validators.required),
      meter: new FormControl('', Validators.required),
      tariff: new FormControl('', Validators.required),
    });

    if (this.id) { //edit form
      this.readingService.findById(this.id).subscribe(
        reading => {
          this.id = reading.id;
          this.readingForm.patchValue({
            startingDate: reading.startingDate,
            endingDate: reading.endingDate,
            reading: reading.reading,
            meter:reading.meter.id,
            tariff:reading.tariff.id
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
    if (this.readingForm.valid) {
      if (this.id) {
        let reading: Reading = new Reading(this.id,
          this.readingForm.controls['startingDate'].value,
          this.readingForm.controls['endingDate'].value,
          this.readingForm.controls['reading'].value,
          new Meter(this.readingForm.controls['meter'].value,null),
          new Tariff(this.readingForm.controls['tariff'].value,null,null));
        this.readingService.updateReading(reading).subscribe();

      } else {
        let reading: Reading = new Reading(null,
          this.readingForm.controls['startingDate'].value,
          this.readingForm.controls['endingDate'].value,
          this.readingForm.controls['reading'].value,
          new Meter(this.readingForm.controls['meter'].value,null),
          new Tariff(this.readingForm.controls['tariff'].value,null,null));
        this.readingService.saveReading(reading).subscribe();

      }
      this.readingForm.reset();
      this.router.navigate(['/reading']);
    }
  }
  redirectReadingPage() {
    this.router.navigate(['/reading']);

  }
}
