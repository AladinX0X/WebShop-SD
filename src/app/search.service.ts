import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchQuerySubject = new BehaviorSubject<string>('');
  searchQuery$ = this.searchQuerySubject.asObservable();
  constructor() {
    this.setSearchQuery('');
    }

  setSearchQuery(query: string) {
    this.searchQuerySubject.next(query);
  }
}
