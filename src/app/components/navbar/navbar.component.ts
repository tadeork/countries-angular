import { Component } from "@angular/core";
import { ThemeService, Theme } from "src/app/services/theme.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  theme: Observable<Theme>;

  constructor(private themeService: ThemeService) {}

  toggleMode() {
    this.themeService.toggleMode();
  }
}
