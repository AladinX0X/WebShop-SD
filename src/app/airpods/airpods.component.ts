import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
@Component({
  selector: 'app-airpods',
  templateUrl: './airpods.component.html',
  styleUrls: ['./airpods.component.css']
})
export class AirpodsComponent implements OnInit {

  Airpods = [
    {id: "1", img: "/././assets/airpods1.webp", name: "APPLE AirPods Pro (Gen 2), (MQD83)", price: "299", year: "2023", color: "⚪"},
    {id: "2", img: "/././assets/airpods2.webp", name: "APPLE AirPods 3 (MagSafe Charging Case), (MME73)", price: "249", year: "2021", color: "⚪"},
    {id: "3", img: "/././assets/airpods3.webp", name: "APPLE AirPods Max, (MGYJ3)", price: "699",year: "2020", color: "⚫ ⚪ 🔵"},
    {id: "4", img: "/././assets/airpods4.jpg", name: "APPLE AirPods (2nd generation), (MV7N2)", price: "199", year:"2020", color: "⚪"},
  ]

  filteredAirpods: any[] = [];
  searchQuery: string = '';

  constructor( private searchService: SearchService) {
}


  ngOnInit(): void {
    this.searchService.searchQuery$.subscribe((query: any) => {
      this.searchQuery = query;
      this.filterProducts();
    });
  }


  filterProducts() {
    this.filteredAirpods = this.Airpods.filter((airpod: any) => {
      return airpod.name.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }

}
