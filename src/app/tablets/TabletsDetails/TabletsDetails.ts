import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart.service';
@Component({
  selector: 'TabletsDetails',
  templateUrl: './TabletsDetails.html',
  styleUrls: ['./TabletsDetails.css']
})
export class TabletsDetails implements OnInit {
  product: any;

  id = Number(this.route.snapshot.paramMap.get('id'))

  Tablets = [
    {id: 1, img:"/././assets/tablet1.png", name: "iPad Pro 12.9-inch M2", price: "949", memory: "128 GB", color: "⚪ ⚫", RAM: "8 GB", year: "2022", resolution: "2732 x 2048", camera: "12MP Wide and 12MP Ultra Wide sensors", inStock: "✔️", firstPhoto: "/././assets/tablet1.png", secondPhoto: "/././assets/tab1photo2.jpg", thirdPhoto: "/././assets/tab1photo3.webp", fourthPhoto: "/././assets/tab1photo4.jpg", fifthPhoto: "/././assets/tab1photo5.jpg"},
    {id: 2, img:"/././assets/tablet2.png", name: "iPad Pro 12.9-inch M2", price: "1049", memory: "256 GB", color: "⚪ ⚫", RAM: "8 GB", year: "2022", resolution: "2732 x 2048", camera: "12MP Wide and 12MP Ultra Wide sensors", inStock: "✔️", firstPhoto: "/././assets/tablet2.png", secondPhoto: "/././assets/tab1photo2.jpg", thirdPhoto: "/././assets/tab1photo3.webp", fourthPhoto: "/././assets/tab1photo4.jpg", fifthPhoto: "/././assets/tab1photo5.jpg"},
    {id: 3, img:"/././assets/tablet3.png", name: "iPad Pro 11-inch M2", price: "799", memory: "128 GB", color: "⚪ ⚫", RAM: "8 GB", year: "2022", resolution: "2388 x 1668", camera: "12MP Wide and 12MP Ultra Wide sensors", inStock: "✔️", firstPhoto: "/././assets/tablet3.png", secondPhoto: "/././assets/tab2photo2.jpg", thirdPhoto: "/././assets/tab3photo3.jpg", fourthPhoto: "/././assets/tab3photo4.jpg", fifthPhoto: "/././assets/tab3photo5.jpg"},
    {id: 4, img:"/././assets/tablet4.png", name: "iPad Pro 11-inch M2 ", price: "999", memory: "256 GB", color: "⚪ ⚫", RAM: "8 GB", year: "2022", resolution: "2388 x 1668", camera: "12MP Wide and 12MP Ultra Wide sensors", inStock: "✔️",  firstPhoto: "/././assets/tablet4.png", secondPhoto: "/././assets/tab2photo2.jpg", thirdPhoto: "/././assets/tab3photo3.jpg", fourthPhoto: "/././assets/tab3photo4.jpg", fifthPhoto: "/././assets/tab3photo5.jpg"},
    {id: 5, img:"/././assets/tablet5.jpeg", name: "iPad Pro 12.9 M1", price: "849", memory: "128 GB", color: "⚪ ⚫", RAM: "8 GB", year: "2021", resolution: "2048 x 2732", camera: "Ultra Wide camera with a 12MP sensor and a 122 degree field of view", inStock: "✔️", firstPhoto: "/././assets/tablet5.jpeg", secondPhoto: "/././assets/tab5photo2.jpg", thirdPhoto: "/././assets/tab5photo3.jpg", fourthPhoto: "/././assets/tab5photo4.jpg", fifthPhoto: "/././assets/tab5photo5.jpeg"},
  ]

  selectedTablets: any;

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}
  addProductToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Your product has been added to the cart!');
  }
  
  changeimg(src: string) {
    this.selectedTablets.img = src;
  }
  filteredProducts: any[] = this.Tablets;

  ngOnInit(): void {
    this.selectedTablets = this.Tablets.find( (product: any) => {
      return product.id === this.id
    } )
  }

}
