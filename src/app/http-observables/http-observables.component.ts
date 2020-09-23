import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { Country } from '../models/Country';
import { CountyService } from '../shared/county.service';

@Component({
  selector: 'app-http-observables',
  templateUrl: './http-observables.component.html',
  styleUrls: ['./http-observables.component.scss']
})
export class HttpObservablesComponent implements OnInit {
  loading: boolean = false;
  countries$: Observable<Country[]>;
  private searchTerms = new Subject<string>();
  constructor(private countryService: CountyService) { }
  search(term: string) {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.countries$ = this.searchTerms.pipe(
      tap(_ => this.loading = true),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.countryService.searchCountry(term)),
      tap(_ => this.loading = false)
    )
  }

}
