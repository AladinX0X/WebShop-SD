import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {


  Laptops: any = [
    {id: 1, img:"/././assets/laptop1.png", name: "MacBook Pro 16-inch M2 Pro/Max", price: "1999", memory: "512 GB", color: "⚫", RAM: "16GB", year: "2023"},
    {id: 2, img:"/././assets/laptop2.jpeg", name: "MacBook Pro 16-inch M2 Pro/Max", price: "2399", memory: "1 TB", color: "⚪", RAM: "32GB", year: "2023"},
    {id: 3, img:"/././assets/laptop3.png", name: "MacBook Pro 16-inch M2 Pro/Max", price: "2499", memory: "1 TB", color: "⚪", RAM: "64GB", year: "2023"},
    {id: 4, img:"/././assets/laptop4.jpeg", name: "MacBook Pro 16-inch M2 Pro/Max", price: "1999", memory: "2 TB", color: "⚪", RAM: "96GB", year: "2023"},
    {id: 5, img:"/././assets/laptop5.png", name: "MacBook Pro 14-inch M2 Pro/Max", price: "1699", memory: "512 GB", color: "⚪", RAM: "16GB", year: "2023"},
    {id: 6, img:"/././assets/laptop6.png", name: "Macbook Pro 13.3-inch M2", price: "1399", memory: "256 GB", color: "⚪", RAM: "16GB", year: "2022"},
    {id: 7, img:"/././assets/laptop7.jpg", name: "MacBook Pro 14-inch M1", price: "1499", memory: "512 GB", color: "⚫", RAM: "16GB", year: "2021"},
  ]


  filteredLaptops: any[] = [];
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
    this.filteredLaptops = this.Laptops.filter((laptop: any) => {
      return laptop.name.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }

}
