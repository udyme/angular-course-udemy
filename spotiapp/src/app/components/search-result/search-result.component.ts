import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  @Input() error:boolean
  @Input() loading:boolean;
  @Input() errorMsg:string;
  @Input() criteria:string;
  @Input() items = [];
  constructor() { }

}
