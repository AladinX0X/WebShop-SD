import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart.service';
@Component({
  selector: 'LaptopsDetails',
  templateUrl: './LaptopsDetails.html',
  styleUrls: ['./LaptopsDetails.css']
})
export class LaptopsDetails implements OnInit {
  product: any;

  id = Number(this.route.snapshot.paramMap.get('id'))

  Laptops: any = [
    {id: 1, img:"/././assets/laptop1.png", name: "MacBook Pro 16-inch M2 Pro/Max", price: "1999", memory: "512 GB", color: "⚫", RAM: "16 GB", year: "2023", resolution: "3456 x 2234", camera: "1080p FaceTime HD Camera", battery: "Lithium Polymer", inStock: "✔️", firstPhoto: "/././assets/laptop1.png", secondPhoto: "/././assets/lap1photo2.jpeg", thirdPhoto: "/././assets/lap1photo3.jpg", fourthPhoto: "/././assets/lap1photo4.webp", fifthPhoto: "/././assets/lap1photo5.webp"},
    {id: 2, img:"/././assets/laptop2.jpeg", name: "MacBook Pro 16-inch M2 Pro/Max", price: "2399", memory: "1 TB", color: "⚪", RAM: "32 GB", year: "2023", resolution: "3456 x 2234", camera: "1080p FaceTime HD Camera", battery: "Lithium Polymer", inStock: "✔️", firstPhoto:"/././assets/laptop2.jpeg", secondPhoto: "/././assets/lap2photo2.webp", thirdPhoto: "/././assets/lap2photo3.jpg", fourthPhoto: "/././assets/lap2photo4.webp", fifthPhoto: "/././assets/lap2photo5.jpg"},
    {id: 3, img:"/././assets/laptop3.png", name: "MacBook Pro 16-inch M2 Pro/Max", price: "2499", memory: "1 TB", color: "⚪", RAM: "64 GB", year: "2023", resolution: "3456 x 2234", camera: "1080p FaceTime HD Camera", battery: "Lithium Polymer", inStock: "❌", firstPhoto:"/././assets/laptop2.jpeg", secondPhoto: "/././assets/lap2photo2.webp", thirdPhoto: "/././assets/lap2photo3.jpg", fourthPhoto: "/././assets/lap2photo4.webp", fifthPhoto: "/././assets/lap2photo5.jpg"},
    {id: 4, img:"/././assets/laptop4.jpeg", name: "MacBook Pro 16-inch M2 Pro/Max", price: "2999", memory: "2 TB", color: "⚪", RAM: "96 GB", year: "2023", resolution: "3456 x 2234", camera: "1080p FaceTime HD Camera", battery: "Lithium Polymer", inStock: "❌", firstPhoto:"/././assets/laptop2.jpeg", secondPhoto: "/././assets/lap2photo2.webp", thirdPhoto: "/././assets/lap2photo3.jpg", fourthPhoto: "/././assets/lap2photo4.webp", fifthPhoto: "/././assets/lap2photo5.jpg"},
    {id: 5, img:"/././assets/laptop5.png", name: "MacBook Pro 14-inch M2 Pro/Max", price: "1699", memory: "512 GB", color: "⚪", RAM: "16 GB", year: "2023", resolution: "3024 x 1964", camera: "1080p FaceTime HD Camera", battery: "Lithium Polymer", inStock: "✔️", firstPhoto: "/././assets/laptop5.png", secondPhoto: "/././assets/lap5photo2.jpg", thirdPhoto: "/././assets/lap5photo3.jpg", fourthPhoto: "/././assets/lap5photo4.jpg", fifthPhoto: "/././assets/lap5photo5.jpg" },
    {id: 6, img:"/././assets/laptop6.png", name: "Macbook Pro 13.3-inch M2", price: "1399", memory: "256 GB", color: "⚪", RAM: "16 GB", year: "2022", resolution: "2560 x 1600", camera: "720p FaceTime HD Camera", battery: "Lithium Polymer", inStock: "✔️", firstPhoto: "/././assets/laptop6.png", secondPhoto: "/././assets/lap6photo2.webp", thirdPhoto: "/././assets/lap6photo3.jpg", fourthPhoto: "/././assets/lap6photo4.jpg", fifthPhoto: "/././assets/lap6photo5.webp"},
    {id: 7, img:"/././assets/laptop7.jpg", name: "MacBook Pro 14-inch M1", price: "1499", memory: "512 GB", color: "⚫", RAM: "16 GB", year: "2021", resolution: "3024 x 1964", camera: "720p FaceTime HD Camera", battery: "Lithium Polymer", inStock: "✔️", firstPhoto: "/././assets/laptop7.jpg", secondPhoto: "/././assets/lap7photo2.webp", thirdPhoto: "/././assets/lap7photo3.jpg", fourthPhoto: "/././assets/lap7photo4.webp", fifthPhoto: "/././assets/lap7photo5.webp"},
  ]


  constructor(
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  addProductToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Your product has been added to the cart!');
  }
  


  selectedLaptops: any;
  changeimg(src: string) {
    this.selectedLaptops.img = src;
    }

  filteredProducts: any[] = this.Laptops;

  ngOnInit(): void {
    this.selectedLaptops = this.Laptops.find( (product: any)=> {
      return product.id === this.id
    });
  }
}
