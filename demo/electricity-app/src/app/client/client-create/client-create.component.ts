import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ClientService} from "../client.service";
import {Client} from "../client";
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css'],
  providers: [ClientService]
})
export class ClientCreateComponent implements OnInit, OnDestroy {

  id: number;
  client: Client;

  clientForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private clientService: ClientService) { }

  ngOnInit() {

  }

  ngOnDestroy(): void {
  }

  onSubmit() {
    this.clientService.saveClient().subscribe();
    this.router.navigate(['/client']);
  }

  redirectClientPage() {
    this.router.navigate(['/client']);

  }
}
