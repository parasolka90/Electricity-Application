import { Component, OnInit } from '@angular/core';
import {Client} from "../client";
import {ClientService} from "../client.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  providers: [ClientService]
})
export class ClientListComponent implements OnInit {

  private clients:Client[];

  constructor(private router: Router, private clientService:ClientService) { }

  ngOnInit() {//when component loading get all clients and set the clients[]
  this.getAllClients();
  }
  getAllClients(){
    this.clientService.findAll().subscribe(
      client=>{
        this.clients= client;
      },
      err=>{
        console.log(err);
      }
    );
  }
  redirectNewClientPage() {
    this.router.navigate(['/client/create']);
  }

  editClientPage(client: Client) {
    if (client) {
      this.router.navigate(['/client/edit', client.id]);
    }
  }

  deleteClient(client: Client) {
    if (client) {
      this.clientService.deleteClientById(client.id).subscribe(
        res => {
          this.getAllClients();
          this.router.navigate(['/client']);
          console.log('done');
        }
      );
    }
  }
}
