import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css']
})
export class WatchesComponent implements OnInit {
  Watches = [
    {id: 1, img:"/././assets/watch1.png", name: "Apple Watch Ultra 2 GPS + Cellular", price: "799", year: "2023", color: "🔵 ⚪ 🟠", size: "49mm"},
    {id: 2, img:"/././assets/watch2.png", name: "Apple Watch Ultra GPS + Cellular", price: "699", year: "2023", color: "🔵 🟤 ⚫", size: "49mm"},
    {id: 3, img:"/././assets/watch3.png", name: "Apple Watch Series 9 GPS", price: "449", year: "2023", color: "🔴 🟠 🔵", size: "41mm"},
    {id: 4, img:"/././assets/watch4.jpg", name: "Apple Watch Ultra GPS + Cellular ", price: "899", year: "2022", color: "🟠 ⚫ ⚪", size: "49mm"},
    {id: 5, img:"/././assets/watch5.jpg", name: "Apple Watch Ultra 2 GPS + Cellular ", price: "849", year: "2022", color: "🟡 🔵 ⚪", size: "49mm"},
    {id: 6, img:"/././assets/lastwatch.jpg", name: "Apple Watch SE GPS ", price: "549", year: "2022", color: "⚫ 🔵 ⚪", size: "40mm"},
  ]


  filteredWatches: any[] = [];
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
    this.filteredWatches = this.Watches.filter((watch: any) => {
      return watch.name.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }

}
