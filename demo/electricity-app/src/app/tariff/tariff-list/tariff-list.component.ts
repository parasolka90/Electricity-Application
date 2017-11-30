import { Component, OnInit } from '@angular/core';
import { Tariff } from "../tariff";
import { TariffService } from "../tariff.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.css'],
  providers: [TariffService]
})
export class TariffListComponent implements OnInit {

  private tariff: Tariff[];

  constructor(private router: Router,
              private tariffService: TariffService) { }

  ngOnInit() {
    this.getAllTariffs();
  }

  getAllTariffs() {
    this.tariffService.findAll().subscribe(
      tariffs => {
        this.tariff = tariffs;
      },
      err => {
        console.log(err);
      }

    );
  }

  redirectNewTariffPage() {
    this.router.navigate(['/tariff/create']);
  }

  editTariffPage(tariff: Tariff) {
    if (this.tariff) {
      this.router.navigate(['/tariff/edit', tariff.id]);
    }
  }

  deleteTariff(tariff: Tariff) {
    if (tariff) {
      this.tariffService.deleteTariffById(tariff.id).subscribe(
        res => {
          this.getAllTariffs();
          this.router.navigate(['/tariff']);
          console.log('done');
        }
      );
    }
  }

}
