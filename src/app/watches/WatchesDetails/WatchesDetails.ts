import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart.service';

@Component({
  selector: 'WatchesDetails',
  templateUrl: './WatchesDetails.html',
  styleUrls: ['./WatchesDetails.css']
})

export class WatchesDetails implements OnInit {
  product: any;

  id = Number(this.route.snapshot.paramMap.get('id'))

  Watches: any = [
    {id: 1, img:"/././assets/watch1.png", name: "Apple Watch Ultra 2 GPS + Cellular", price: "799", year: "2023", color: "🔵 ⚪ 🟠", size: "49mm", bluetooth: "✔️", wifi:"✔️", cpu: "Apple S9", inStock: "✔️", firstPhoto: "/././assets/watch1.png", secondPhoto: "/././assets/watch1photo2.png", thirdPhoto: "/././assets/watch1photo3.png", fourthPhoto: "/././assets/watch1photo4.jpg", fifthPhoto: "/././assets/watch1photo5.webp"},
    {id: 2, img:"/././assets/watch2.png", name: "Apple Watch Ultra GPS + Cellular", price: "699", year: "2023", color: "🔵 🟤 ⚫", size: "49mm", bluetooth: "✔️", wifi:"✔️", cpu: "Apple S9", inStock: "✔️", firstPhoto: "/././assets/watch2.png", secondPhoto: "/././assets/watch2photo2.png", thirdPhoto: "/././assets/watch2photo3.png", fourthPhoto: "/././assets/watch2photo4.jpg", fifthPhoto: "/././assets/watch2photo5.jpg"},
    {id: 3, img:"/././assets/watch3.png", name: "Apple Watch Series 9 GPS", price: "449", year: "2023", color: "🔴 🟠 🔵", size: "41mm", bluetooth: "✔️", wifi:"✔️", cpu: "Apple S9", inStock: "✔️", firstPhoto: "/././assets/watch3.png", secondPhoto: "/././assets/watch3photo2.png", thirdPhoto: "/././assets/watch3photo3.jpg", fourthPhoto: "/././assets/watch3photo4.webp", fifthPhoto: "/././assets/watch3photo5.png"},
    {id: 4, img:"/././assets/watch4.jpg", name: "Apple Watch Ultra GPS + Cellular ", price: "899", year: "2022", color: "🟠 ⚫ ⚪", size: "49mm", bluetooth: "✔️", wifi:"✔️", cpu: "Apple S8", inStock: "✔️", firstPhoto: "/././assets/watch4.jpg", secondPhoto: "/././assets/watch4photo2.jpg", thirdPhoto: "/././assets/watch4photo3.jpg", fourthPhoto: "/././assets/watch4photo4.webp", fifthPhoto: "/././assets/watch4photo5.webp"},
    {id: 5, img:"/././assets/watch5.jpg", name: "Apple Watch Ultra 2 GPS + Cellular ", price: "849", year: "2022", color: "🟡 🔵 ⚪", size: "49mm", bluetooth: "✔️", wifi:"✔️", cpu: "Apple S8", inStock: "❌", firstPhoto: "/././assets/watch5.jpg", secondPhoto: "/././assets/watch5photo2.jpg", thirdPhoto: "/././assets/watch5photo3.jpg", fourthPhoto: "/././assets/watch5photo4.jpg_480Wx480H", fifthPhoto: "/././assets/watch5photo5.jpg"},
    {id: 6, img:"/././assets/lastwatch.jpg", name: "Apple Watch SE GPS ", price: "549", year: "2022", color: "⚫ 🔵 ⚪", size: "40mm", bluetooth: "✔️", wifi:"✔️", cpu: "Apple S8", inStock: "✔️", firstPhoto: "/././assets/lastwatch.jpg", secondPhoto: "/././assets/lastwatchphoto2.jpg", thirdPhoto: "/././assets/lastwatchphoto3.jpg", fourthPhoto: "/././assets/lastwatchphoto4.jpg", fifthPhoto: "/././assets/lastwatch5.png"},
  ]



  constructor(
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  addProductToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Your product has been added to the cart!');
  }
  


  selectedWatches: any;
  changeimg(src: string) {
    this.selectedWatches.img = src;
    }

  filteredProducts: any[] = this.Watches;

  ngOnInit(): void {
    this.selectedWatches = this.Watches.find( (product: any)=> {
      return product.id === this.id
    });
  }
}
