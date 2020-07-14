import { Component, OnInit } from '@angular/core';
import { ThemeService, Theme } from './services/theme.service';
import { Observable } from 'rxjs';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  theme: Observable<Theme>;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.theme = this.themeService.mode$;
  }
}
