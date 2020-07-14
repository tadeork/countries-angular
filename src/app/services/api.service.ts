import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/countries';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private api = 'https://restcountries.eu/rest/v2';
  constructor(private httpClient: HttpClient) {}

  getAllCountries() {
    return this.httpClient.get<Country[]>(`${this.api}/all`);
  }

  getCountryByName(name: string) {
    return this.httpClient
      .get<Country[]>(`${this.api}/name/${name}`)
      .pipe(map(([res]) => res));
  }

  getCountriesByCodes(codes: string[]) {
    return this.httpClient.get<Country[]>(
      `${this.api}/alpha?codes=${codes.join(';')}`
    );
  }
}
