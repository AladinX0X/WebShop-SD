import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationStart, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { SearchService } from '../search.service';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  searchQuery: string = '';
  private navigationSubscription: any;
  private skipReset: boolean = false;

  constructor(private route: ActivatedRoute, private searchService: SearchService, private router: Router, private productService: ProductService, private translate: TranslateService) {
    this.navigationSubscription = this.router.events
    .pipe(filter((event: any) => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      const pagesToClearQuery = ['/default', '/phones', '/laptops', '/tabs', '/watches', '/airpods', '/accessories'];

      if (pagesToClearQuery.includes(event.urlAfterRedirects) && !this.skipReset) {
        this.searchService.setSearchQuery('');
      }
      this.skipReset = false;
    });
  }






  ngOnInit(): void {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      this.translate.use(savedLanguage);
    } else {
      this.translate.setDefaultLang('ge');
    };


  }



  searchProducts() {
    const trimmedQuery = this.searchQuery.trim();
    const translatedMessage = this.translate.instant('data.searchAlert');
    const secondtranslatedMessage = this.translate.instant('data.secondsearchAlert');
    if (!trimmedQuery) {
      Swal.fire({
        icon: 'warning',
        title: translatedMessage,
        text: secondtranslatedMessage,
      });
      return;
    }
    this.skipReset = true;

    this.searchService.setSearchQuery(this.searchQuery);
    const productType = this.determineProductType(this.searchQuery);
    if (productType) {
      this.router.navigate([`/${productType}`]);
    } else {
      this.router.navigate(['/default']);
    }
    this.searchQuery = '';
  }


  isActive(route: string): boolean {
    return this.router.url === route;
  }

  isProductsActive(): boolean {
    return ['/phones', '/laptops', '/tabs', '/watches', '/airpods', '/accessories'].includes(this.router.url);
  }





    private determineProductType(query: string): string | null {
      const lowercaseQuery = query.toLowerCase();

  if (this.productService.phones.some((phone) => phone.toLowerCase().includes(lowercaseQuery))) {

    return 'phones';
  }

  if (this.productService.laptops.some((laptop) => laptop.toLowerCase().includes(lowercaseQuery))) {

    return 'laptops';
  }

  if (this.productService.tabs.some((tabs) => tabs.toLowerCase().includes(lowercaseQuery))) {

    return 'tabs';
  }

  if (this.productService.watches.some((watches) => watches.toLowerCase().includes(lowercaseQuery))) {

    return 'watches';
  }

  if (this.productService.airpods.some((airpods) => airpods.toLowerCase().includes(lowercaseQuery))) {

    return 'airpods';
  }


  if (this.productService.accessories.some((accessories) => accessories.toLowerCase().includes(lowercaseQuery))) {

    return 'accessories';
  }

  return null;
}





supportedLanguages: string[] = ['en', 'ge'];


selectLanguage(selectedLanguage: string) {
  this.translate.use(selectedLanguage);
  localStorage.setItem('selectedLanguage', selectedLanguage);
}





}


