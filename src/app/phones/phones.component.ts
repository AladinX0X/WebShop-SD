
import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {


  Phones: any = [
    {id: 1, img:"/././assets/iphone 15 black.webp", name: "iPhone 15", price: "799", memory: "128 GB", color: "⚫ 🔵 🔴 🟢", RAM: "6 GB"},
    {id: 2, img:"/././assets/iphone 15 green.webp", name: "iPhone 15", price: "849", memory: "256 GB", color: "⚫ 🔵 🔴 🟢", RAM: "6 GB"},
    {id: 3, img:"/././assets/iphone 15 blue.jpg", name: "iPhone 15", price: "949", memory: "512 GB", color: "⚫ 🔵 🔴 🟢", RAM: "6 GB"},
    {id: 4, img:"/././assets/iphone15.png", name: "iPhone 15 Pro", price: "999", memory: "128 GB", color: "⚫ 🔵 ⚪ 🟤", RAM: "8 GB"},
    {id: 5, img:"/././assets/iphonee.png", name: "iPhone 15 Pro", price: "1199", memory: "256 GB", color: "⚫ 🔵 ⚪ 🟤", RAM: "8 GB"},
    {id: 6, img:"/././assets/iphone15.png", name: "iPhone 15 Pro", price: "1299", memory: "512 GB", color: "⚫ 🔵 ⚪ 🟤", RAM: "8 GB"},
    {id: 7, img:"/././assets/iphone purple.avif", name: "iPhone 14 Pro", price: "899", memory: "128 GB", color: "⚫ 🟣 ⚪ 🟡", RAM: "6 GB"},
    {id: 8, img:"/././assets/silver iphone.jpeg", name: "iPhone 14 Pro", price: "949", memory: "256 GB", color: "⚫ 🟣 ⚪ 🟡", RAM: "6 GB"},
    {id: 9, img:"/././assets/golden iphone.jpg", name: "iPhone 14 Pro", price: "1049", memory: "512 GB", color: "⚫ 🟣 ⚪ 🟡", RAM: "6 GB"},
    {id: 10, img:"/././assets/iphone purple.avif", name: "iPhone 14 Pro Max", price: "1099", memory: "128 GB", color: "⚫ 🟣 ⚪ 🟡", RAM: "6 GB"},
    {id: 11, img:"/././assets/black iphone14.jpg", name: "iPhone 14 Pro Max", price: "1149", memory: "256 GB", color: "⚫ 🟣 ⚪ 🟡", RAM: "6 GB"},
    {id: 12, img:"/././assets/silver iphone.jpeg", name: "iPhone 14 Pro Max", price: "1299", memory: "512 GB", color: "⚫ 🟣 ⚪ 🟡", RAM: "6 GB"},
  ]

  filteredPhones: any[] = [];
  searchQuery: string = '';

  constructor( private searchService: SearchService, private router: Router) {
}


  ngOnInit(): void {
    this.searchService.searchQuery$.subscribe((query) => {
      this.searchQuery = query;
      this.filterProducts();
    });
  }


  filterProducts() {
    this.filteredPhones = this.Phones.filter((phone: any) => {
      return phone.name.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }
}

























