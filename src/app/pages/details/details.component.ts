import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Country, Currency, Language } from 'src/app/models/countries';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  country$: Observable<Country>;
  borderCountries$: Observable<Country[]>;

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.country$ = this.api.getCountryByName(params.country).pipe(
        mergeMap((res) => {
          if (res.borders.length) {
            this.borderCountries$ = this.api.getCountriesByCodes(res.borders);
          }
          return of(res);
        })
      );
    });
  }

  displayCurrencies(currencies: Currency[]) {
    return currencies.map((currency) => currency.name).join(', ');
  }

  displayLanguages(languages: Language[]) {
    return languages.map((language) => language.name).join(', ');
  }
}
