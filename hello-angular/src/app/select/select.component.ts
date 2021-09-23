import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  open = false;
  @Input() selected = '';
  @Input() items: string[] = [];
  // @Input() items!: string[];
  @Output() selectedChange = new EventEmitter<string>();

  constructor() {

   }

  ngOnInit(): void {
  }

  selectItem(item: string) {
    this.selected = item;
    this.open = false;
    this.selectedChange.emit(item);
  }
}
