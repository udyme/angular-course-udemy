import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HeroeService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-table',
  templateUrl: './heroes-table.component.html',
  styleUrls: ['./heroes-table.component.css']
})
export class HeroesTableComponent {
  @Input() heroes: any;
  @Output() onDeleteRow = new EventEmitter<string>();
  constructor(private heroesService: HeroeService) { }
  borrarHeroe(id) {
    this.onDeleteRow.emit(id);
  }
}
