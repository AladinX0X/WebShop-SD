
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart.service';


@Component({
  selector: 'app-phones-details',
  templateUrl: './PhonesDetails.html',
  styleUrls: ['./PhonesDetails.css']
})
export class PhonesDetails implements OnInit {
  product: any;


  id = Number(this.route.snapshot.paramMap.get('id'));

  Phones: any = [
    {id: 1, img:"/././assets/iphone 15 black.webp", name: "Iphone 15", price: "799", memory: "128 GB", color: "⚫ 🔵 🔴 🟢", RAM: "6 GB", camera: "48 MP, 12 MP Front", size: "6.10", resolution: "1179x2556", inStock: "✔️", firstPhoto:"/././assets/iphone 15 black.webp", secondPhoto:"/././assets/iphone 15 blue.jpg", thirdPhoto:"/././assets/iphone 15 green.webp", fourthPhoto:"/././assets/iphone15pink.jpg", fifthPhoto: "/././assets/manyiphone15.jpg"},
    {id: 2, img:"/././assets/iphone 15 green.webp", name: "Iphone 15", price: "849", memory: "256 GB", color: "⚫ 🔵 🔴 🟢", RAM: "6 GB", camera: "48 MP, 12 MP Front", size: "6.10", resolution: "1179x2556", inStock: "✔️", firstPhoto:"/././assets/iphone 15 black.webp", secondPhoto:"/././assets/iphone 15 blue.jpg", thirdPhoto:"/././assets/iphone 15 green.webp", fourthPhoto:"/././assets/iphone15pink.jpg", fifthPhoto: "/././assets/manyiphone15.jpg"},
    {id: 3, img:"/././assets/iphone 15 blue.jpg", name: "Iphone 15", price: "949", memory: "512 GB", color: "⚫ 🔵 🔴 🟢", RAM: "6 GB", camera: "48 MP, 12 MP Front", size: "6.10", resolution: "1179x2556", inStock: "✔️", firstPhoto:"/././assets/iphone 15 black.webp", secondPhoto:"/././assets/iphone 15 blue.jpg", thirdPhoto:"/././assets/iphone 15 green.webp", fourthPhoto:"/././assets/iphone15pink.jpg", fifthPhoto: "/././assets/manyiphone15.jpg"},
    {id: 4, img:"/././assets/iphone15.png", name: "Iphone 15 pro", price: "999", memory: "128 GB", color: "⚫ 🔵 ⚪ 🟤", RAM: "8 GB", camera: "48 MP, 12 MP Front", size: "6.10", resolution: "	2556x1179", inStock: "✔️", firstPhoto:"/././assets/iphone15.png", secondPhoto:"/././assets/iphonee.png", thirdPhoto:"/././assets/iphone15problack.jpeg", fourthPhoto:"/././assets/iphone15prowhite.jpeg", fifthPhoto: "/././assets/iphone15promany.jpg"},
    {id: 5, img:"/././assets/iphonee.png", name: "Iphone 15 pro", price: "1199", memory: "256 GB", color: "⚫ 🔵 ⚪ 🟤", RAM: "8 GB",  camera: "48 MP, 12 MP Front", size: "6.10", resolution: "	2556x1179", inStock: "✔️", firstPhoto:"/././assets/iphone15.png", secondPhoto:"/././assets/iphonee.png", thirdPhoto:"/././assets/iphone15problack.jpeg", fourthPhoto:"/././assets/iphone15prowhite.jpeg", fifthPhoto: "/././assets/iphone15promany.jpg"},
    {id: 6, img:"/././assets/iphone15.png", name: "Iphone 15 pro", price: "1299", memory: "512 GB", color: "⚫ 🔵 ⚪ 🟤", RAM: "8 GB",  camera: "48 MP, 12 MP Front", size: "6.10", resolution: "	2556x1179", inStock: "❌", firstPhoto:"/././assets/iphone15.png", secondPhoto:"/././assets/iphonee.png", thirdPhoto:"/././assets/iphone15problack.jpeg", fourthPhoto:"/././assets/iphone15prowhite.jpeg", fifthPhoto: "/././assets/iphone15promany.jpg"},
    {id: 7, img:"/././assets/iphone purple.avif", name: "Iphone 14 pro", price: "899", memory: "128 GB", color: "⚫ 🟣 ⚪ 🟡", RAM: "6 GB",  camera: "48 MP, 12 MP Front", size: "6.10", resolution: "	2556x1179", inStock: "✔️", firstPhoto:"/././assets/iphone purple.avif", secondPhoto:"/././assets/silver iphone.jpeg", thirdPhoto:"/././assets/golden iphone.jpg", fourthPhoto:"/././assets/iphone14black.jpeg", fifthPhoto: "/././assets/iphone14many.webp"},
    {id: 8, img:"/././assets/silver iphone.jpeg", name: "Iphone 14 pro", price: "949", memory: "256 GB", color: "⚫ 🟣 ⚪ 🟡", RAM: "6 GB",  camera: "48 MP, 12 MP Front", size: "6.10", resolution: "	2556x1179", inStock: "✔️", firstPhoto:"/././assets/iphone purple.avif", secondPhoto:"/././assets/silver iphone.jpeg", thirdPhoto:"/././assets/golden iphone.jpg", fourthPhoto:"/././assets/iphone14black.jpeg", fifthPhoto: "/././assets/iphone14many.webp"},
    {id: 9, img:"/././assets/golden iphone.jpg", name: "Iphone 14 pro", price: "1049", memory: "512 GB", color: "⚫ 🟣 ⚪ 🟡", RAM: "6 GB",  camera: "48 MP, 12 MP Front", size: "6.10", resolution: "	2556x1179", inStock: "✔️", firstPhoto:"/././assets/iphone purple.avif", secondPhoto:"/././assets/silver iphone.jpeg", thirdPhoto:"/././assets/golden iphone.jpg", fourthPhoto:"/././assets/iphone14black.jpeg", fifthPhoto: "/././assets/iphone14many.webp"},
    {id: 10, img:"/././assets/iphone purple.avif", name: "Iphone 14 pro Max", price: "1099", memory: "128 GB", color: "⚫ 🟣 ⚪ 🟡", RAM: "6 GB", camera: "48 MP, 12 MP Front", size: "6.70", resolution: "2796x1290", inStock: "✔️", firstPhoto:"/././assets/iphone purple.avif", secondPhoto:"/././assets/silver iphone.jpeg", thirdPhoto:"/././assets/golden iphone.jpg", fourthPhoto:"/././assets/iphone14black.jpeg", fifthPhoto: "/././assets/iphone14many.webp"},
    {id: 11, img:"/././assets/black iphone14.jpg", name: "Iphone 14 pro Max", price: "1149", memory: "256 GB", color: "⚫ 🟣 ⚪ 🟡", RAM: "6 GB", camera: "48 MP, 12 MP Front", size: "6.70", resolution: "2796x1290", inStock: "✔️", firstPhoto:"/././assets/iphone purple.avif", secondPhoto:"/././assets/silver iphone.jpeg", thirdPhoto:"/././assets/golden iphone.jpg", fourthPhoto:"/././assets/iphone14black.jpeg", fifthPhoto: "/././assets/iphone14many.webp"},
    {id: 12, img:"/././assets/silver iphone.jpeg", name: "Iphone 14 pro Max", price: "1299", memory: "512 GB", color: "⚫ 🟣 ⚪ 🟡", RAM: "6 GB", camera: "48 MP, 12 MP Front", size: "6.70", resolution: "2796x1290", inStock: "❌", firstPhoto:"/././assets/iphone purple.avif", secondPhoto:"/././assets/silver iphone.jpeg", thirdPhoto:"/././assets/golden iphone.jpg", fourthPhoto:"/././assets/iphone14black.jpeg", fifthPhoto: "/././assets/iphone14many.webp"},
  ]


  constructor(
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  addProductToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Your product has been added to the cart!');
  }
  


  selectedPhones: any;
  changeimg(src: string) {
    this.selectedPhones.img = src;
    }

  filteredProducts: any[] = this.Phones;

  ngOnInit(): void {
    this.selectedPhones = this.Phones.find( (product: any)=> {
      return product.id === this.id
    });
  }
}





