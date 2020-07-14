import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  showOptions = false;

  @Input()
  placeholder: string;

  @Input()
  options: string[];

  @Input()
  value: string;

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter();

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  select(value: string) {
    this.valueChange.emit(value);
    this.toggleOptions();
  }
}
