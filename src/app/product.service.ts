import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  phones: string[] = ['iPhone 15','iphone 15 pro','iphone 14 pro','iphone 14 pro max'];
  laptops: string[] = ['macbook pro 16-inch m2 pro/max', 'macbook Pro 14-inch M2 pro/max', 'macbook pro 13.3-inch m2', 'macbook pro 14-inch m1'];
  tabs: string[] = ['iPad Pro 12.9-inch M2', 'iPad Pro 11-inch M2', 'iPad Pro 12.9 M1'];
  watches: string[] = ['Apple Watch Ultra 2 GPS + Cellular', 'Apple Watch Series 9 GPS', 'Apple Watch Ultra GPS + Cellular', 'Apple Watch SE GPS'];
  airpods: string[] = ['APPLE AirPods Pro (Gen 2), (MQD83)', 'APPLE AirPods 3 (MagSafe Charging Case), (MME73)', 'APPLE AirPods Max, (MGYJ3)', 'APPLE AirPods (2nd generation), (MV7N2)']
  accessories: string[] = ['Power Adapter APPLE USB-C, 20 W, (MHJE3)', 'APPLE USB to Lightning Cable, (ME291)', 'Power Adapter APPLE MagSafe MagSafe, 45 W, (MC747)', 'Wireless Charger BELKIN, 10 W, (WIA00)', 'Wireless Charger NATIVE UNION, 20 W, (SNAP-)', 'Power Adapter APPLE USB-C, 67 W, (MKU63)', 'APPLE Leather Case with MagSafe for iPhone 14 Pro Max, (MPPP3)', 'Power Bank 2E, (2E-PB)', 'Safety Glass iLera DeLuxe Incognito 360^ FullCover Glass for iPhone 14, (ILIND)', 'allet NATIVE UNION (RE)CLASSIC CARD WALLET with MagSafe, (RECLA)']

  constructor() {}

}
