import { Reading } from "../reading";
import { ReadingService } from "../reading.service";
import {Component, OnInit} from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.css'],
  providers: [ReadingService]
})
export class ReadingListComponent implements OnInit {

  private readings: Reading[];

  constructor(private router: Router,private readingService: ReadingService) { }

  ngOnInit() {
    this.getAllReading();
  }

  getAllReading() {
    this.readingService.findAll().subscribe(
      reading => {
        this.readings = reading;
      },
      err => {
        console.log(err);
      }

    );
  }
  redirectNewReadingPage() {
    this.router.navigate(['/reading/create']);
  }

  editReadingPage(reading: Reading) {
    if (reading) {
      this.router.navigate(['/reading/edit', reading.id]);
    }
  }

  deleteReading(reading: Reading) {
    if (reading) {
      this.readingService.deleteReadingById(reading.id).subscribe(
        res => {
          console.log(res);
          this.getAllReading();
          this.router.navigate(['/reading']);
          console.log('done');
        }
      );
    }
  }
}
