import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-inventory-screen',
  templateUrl: './inventory-screen.component.html',
  styleUrls: ['./inventory-screen.component.scss'],
})
export class InventoryScreenComponent implements OnInit {
  constructor(private apollo: Apollo) {}
  ngOnInit(): void {}
}
