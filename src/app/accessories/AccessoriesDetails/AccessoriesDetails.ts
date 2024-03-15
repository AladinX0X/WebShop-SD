import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart.service';

@Component({
  selector: 'AccessoriesDetails',
  templateUrl: './AccessoriesDetails.html',
  styleUrls: ['./AccessoriesDetails.css']
})
export class AccessoriesDetails implements OnInit {
  product: any;

  id = this.route.snapshot.paramMap.get('id')

  Accessories: any[] = [
    {id: "1", img: "/././assets/accessory1.webp", name: "Power Adapter APPLE USB-C, 20 W, (MHJE3)", price: "29", color: "⚪", loan: "2 Years", inStock: "✔️", firstPhoto: "/././assets/accessory1.webp", secondPhoto: "/././assets/accessory1photo2.jpg", thirdPhoto: "/././assets/accessory1photo3.webp", fourthPhoto: "/././assets/accessory1photo4.jpg"},
    {id: "2", img: "/././assets/accessory2.webp", name: "APPLE USB to Lightning Cable, (ME291)", price: "19", color: "⚪",  loan: "2 Years", inStock: "✔️", firstPhoto: "/././assets/accessory2.webp", secondPhoto: "/././assets/accessory2photo.avif", thirdPhoto: "/././assets/accessory2photo3.jpeg", fourthPhoto: "/././assets/accessory2photo4.jpg"},
    {id: "3", img: "/././assets/accessory3.webp", name: "Power Adapter APPLE MagSafe MagSafe, 45 W, (MC747)", price: "99", color: "⚪",  loan: "2 Years", inStock: "✔️", firstPhoto: "/././assets/accessory3.webp", secondPhoto: "/././assets/accessory3photo2.webp", thirdPhoto: "/././assets/accessory3photo3.jpg", fourthPhoto: "/././assets/accessory3photo4.jpg"},
    {id: "4", img: "/././assets/accessory4.webp", name: "Wireless Charger BELKIN, 10 W, (WIA00)", price: "55", color: "⚫",  loan: "2 Years", inStock: "✔️", firstPhoto: "/././assets/accessory4.webp", secondPhoto: "/././assets/accessory3photo2.webp", thirdPhoto: "/././assets/accessory4photo3.jpg", fourthPhoto: "/././assets/accessory4photo4.jpg"},
    {id: "5", img: "/././assets/accessory5.webp", name: "Wireless Charger NATIVE UNION, 20 W, (SNAP-)", price: "99", color: "⚫ ⚪",  loan: "2 Years", inStock: "✔️", firstPhoto: "/././assets/accessory5.webp", secondPhoto: "/././assets/accessory5photo2.webp", thirdPhoto: "/././assets/accessory5photo3.webp", fourthPhoto: "/././assets/accessory5photo4.jpg"},
    {id: "6", img: "/././assets/accessory6.webp", name: "Power Adapter APPLE USB-C, 67 W, (MKU63)", price: "149", color: "⚪",  loan: "2 Years", inStock: "✔️", firstPhoto: "/././assets/accessory6.webp", secondPhoto: "/././assets/accessory6photo2.jpg", thirdPhoto: "/././assets/accessory6photo3.webp", fourthPhoto: "/././assets/accessory6photo4.jpg"},
    {id: "7", img: "/././assets/accessory7.webp", name: "APPLE Leather Case with MagSafe for iPhone 14 Pro Max, (MPPP3)", price: "50", color: "⚫ 🟢 🔵 🟤",  loan: "2 Years", inStock: "✔️", firstPhoto: "/././assets/accessory7.webp", secondPhoto: "/././assets/accessory7photo2.webp", thirdPhoto: "/././assets/accessory7photo3.webp", fourthPhoto: "/././assets/accessory7photo5.webp"},
    {id: "8", img: "/././assets/accessory8.webp", name: "Power Bank 2E, (2E-PB)", price: "89", color: "⚫",  loan: "2 Years", inStock: "❌", firstPhoto: "/././assets/accessory8.webp", secondPhoto: "/././assets/accessory8photo2.webp", thirdPhoto: "/././assets/accessory8photo3.webp", fourthPhoto: "/././assets/accessory8photo4.webp"},
    {id: "9", img: "/././assets/accessory9.webp", name: "Safety Glass iLera DeLuxe Incognito 360^ FullCover Glass for iPhone 14, (ILIND)", price: "29", color: "⚫",  loan: "2 Years", inStock: "✔️", firstPhoto: "/././assets/accessory9.webp", secondPhoto: "/././assets/accessory9photo2.webp", thirdPhoto: "/././assets/accessory9photo3.webp", fourthPhoto: "/././assets/accessory9photo4.jpg"},
    {id: "10", img: "/././assets/accessory10.webp", name: "allet NATIVE UNION (RE)CLASSIC CARD WALLET with MagSafe, (RECLA)", price: "29", color: "⚫ 🟢",  loan: "2 Years", inStock: "✔️", firstPhoto: "/././assets/accessory10.webp", secondPhoto: "/././assets/accessory10photo2.jpg", thirdPhoto: "/././assets/accessory10photo3.jpg", fourthPhoto: "/././assets/accessory10photo4.jpg"},
  ]

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  addProductToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Your product has been added to the cart!');
  }
  


  selectedAccessories: any;
  changeimg(src: string) {
    this.selectedAccessories.img = src;
    }

  filteredProducts: any[] = this.Accessories;

  ngOnInit(): void {
    this.selectedAccessories = this.Accessories.find( (product: any)=> {
      return product.id === this.id
    });
  }
}
