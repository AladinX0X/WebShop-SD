import { Component,OnInit } from '@angular/core';
import { SearchService } from '../search.service';
@Component({
  selector: 'app-tablets',
  templateUrl: './tablets.component.html',
  styleUrls: ['./tablets.component.css']
})
export class TabletsComponent implements OnInit {

  Tablets = [
    {id: 1, img:"/././assets/tablet1.png", name: "iPad Pro 12.9-inch M2", price: "949", memory: "128 GB", color: "⚪ ⚫", RAM: "8 GB"},
    {id: 2, img:"/././assets/tablet2.png", name: "iPad Pro 12.9-inch M2", price: "1049", memory: "256 GB", color: "⚪ ⚫", RAM: "8 GB"},
    {id: 3, img:"/././assets/tablet3.png", name: "iPad Pro 11-inch M2", price: "799", memory: "128 GB", color: "⚪ ⚫", RAM: "8 GB"},
    {id: 4, img:"/././assets/tablet4.png", name: "iPad Pro 11-inch M2 ", price: "999", memory: "256 GB", color: "⚪ ⚫", RAM: "8 GB"},
    {id: 5, img:"/././assets/tablet5.jpeg", name: "iPad Pro 12.9 M1", price: "849", memory: "128 GB", color: "⚪ ⚫", RAM: "8 GB"},
  ]

  filteredTablets: any[] = [];
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
    this.filteredTablets = this.Tablets.filter((tablet: any) => {
      return tablet.name.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }

}
