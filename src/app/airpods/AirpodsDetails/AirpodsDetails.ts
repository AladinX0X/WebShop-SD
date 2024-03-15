import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart.service';

@Component({
  selector: 'AirpodsDetails',
  templateUrl: './AirpodsDetails.html',
  styleUrls: ['./AirpodsDetails.css']
})
export class AirpodsDetails implements OnInit{
  product: any;

  id = this.route.snapshot.paramMap.get('id')

  Airpods = [
    {id: "1", img: "/././assets/airpods1.webp", name: "APPLE AirPods Pro (Gen 2), (MQD83)", price: "299", year: "2023", color: "⚪", system: "Headset", voice: "Siri", weight: "4.28 g", inStock: "✔️", firstPhoto: "/././assets/airpods1.webp", secondPhoto: "/././assets/airpods1photo2.webp", thirdPhoto: "/././assets/airpods1photo3.webp", fourthPhoto: "/././assets/airpods1photo4.jpg", fifthPhoto: "/././assets/airpods1photo5.jpg" },
    {id: "2", img: "/././assets/airpods2.webp", name: "APPLE AirPods 3 (MagSafe Charging Case), (MME73)", price: "249", year: "2021", color: "⚪", system: "Headset", voice: "Siri", weight: "4.28 g", inStock: "✔️", firstPhoto: "/././assets/airpods2.webp", secondPhoto: "/././assets/airpods2photo2.webp", thirdPhoto: "/././assets/airpods2photo3.jpg", fourthPhoto: "/././assets/airpods2photo4.webp", fifthPhoto: "/././assets/airpods2photo5.webp"},
    {id: "3", img: "/././assets/airpods3.webp", name: "APPLE AirPods Max, (MGYJ3)", price: "699",year: "2020", color: "⚫ ⚪ 🔵", system: "Headset", voice: "Siri", weight: "384.8 g", inStock: "✔️", firstPhoto: "/././assets/airpods3.webp", secondPhoto: "/././assets/airpods3photo2.webp", thirdPhoto: "/././assets/airpods3photo3.jpg", fourthPhoto: "/././assets/airpods3photo4.jpg", fifthPhoto: "/././assets/airpods3photo5.jpg"},
    {id: "4", img: "/././assets/airpods4.jpg", name: "APPLE AirPods (2nd generation), (MV7N2)", price: "199", year: "2019", color: "⚪",  system: "Headset", voice: "Siri", weight: "4.23 g", inStock: "❌", firstPhoto: "/././assets/airpods4.jpg", secondPhoto: "/././assets/airpods4photo2.jpg", thirdPhoto: "/././assets/airpods4photo3.png", fourthPhoto: "/././assets/airpods4photo4.jpg", fifthPhoto: "/././assets/airpods4photo5.webp"},
  ]

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  addProductToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Your product has been added to the cart!');
  }
  


  selectedAirpods: any;
  changeimg(src: string) {
    this.selectedAirpods.img = src;
    }

  filteredProducts: any[] = this.Airpods;

  ngOnInit(): void {
    this.selectedAirpods = this.Airpods.find( (product: any)=> {
      return product.id === this.id
    });
  }
}
