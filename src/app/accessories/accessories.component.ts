import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit{

  Accessories = [
    {id: "1", img: "/././assets/accessory1.webp", name: "Power Adapter APPLE USB-C, 20 W, (MHJE3)", price: "29", color: "⚪"},
    {id: "2", img: "/././assets/accessory2.webp", name: "APPLE USB to Lightning Cable, (ME291)", price: "19", color: "⚪"},
    {id: "3", img: "/././assets/accessory3.webp", name: "Power Adapter APPLE MagSafe MagSafe, 45 W, (MC747)", price: "99", color: "⚪"},
    {id: "4", img: "/././assets/accessory4.webp", name: "Wireless Charger BELKIN, 10 W, (WIA00)", price: "55", color: "⚫"},
    {id: "5", img: "/././assets/accessory5.webp", name: "Wireless Charger NATIVE UNION, 20 W, (SNAP-)", price: "99", color: "⚫ ⚪"},
    {id: "6", img: "/././assets/accessory6.webp", name: "Power Adapter APPLE USB-C, 67 W, (MKU63)", price: "149", color: "⚪"},
    {id: "7", img: "/././assets/accessory7.webp", name: "APPLE Leather Case with MagSafe for iPhone 14 Pro Max, (MPPP3)", price: "50", color: "⚫ 🟢 🔵 🟤"},
    {id: "8", img: "/././assets/accessory8.webp", name: "Power Bank 2E, (2E-PB)", price: "89", color: "⚫"},
    {id: "9", img: "/././assets/accessory9.webp", name: "Safety Glass iLera DeLuxe Incognito 360^ FullCover Glass for iPhone 14, (ILIND)", price: "29", color: "⚫"},
    {id: "10", img: "/././assets/accessory10.webp", name: "allet NATIVE UNION (RE)CLASSIC CARD WALLET with MagSafe, (RECLA)", price: "29", color: "⚫ 🟢"},
  ]

  filteredAccessories: any[] = [];
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
    this.filteredAccessories = this.Accessories.filter((accessory: any) => {
      return accessory.name.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }

}
