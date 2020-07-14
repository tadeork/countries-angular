import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Country } from 'src/app/models/countries';

const REGIONS_OPTIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchFilter?: string;
  regionFilter?: string;
  source: Country[];
  regionsOptions = REGIONS_OPTIONS;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getAllCountries().subscribe((countries) => {
      this.source = countries;
    });
  }

  get countries() {
    return this.source
      ? this.source
          .filter((country) =>
            this.searchFilter
              ? country.name
                  .toLowerCase()
                  .includes(this.searchFilter.toLowerCase())
              : country
          )
          .filter((country) =>
            this.regionFilter
              ? country.region.includes(this.regionFilter)
              : country
          )
      : this.source;
  }
}
