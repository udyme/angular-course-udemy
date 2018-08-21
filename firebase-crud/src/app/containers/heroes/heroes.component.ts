import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { HeroeService } from '../../services/heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  loading = true;
  heroes = {};
  constructor(private heroesService: HeroeService) {
    this.getHeroes();
  }

  getHeroes() {
      this.heroesService.getHeroes().subscribe((data: any) => {
        this.loading = false;
        this.heroes = data;
      }, error => {
        console.error(error);
      });
  }

  borrarHeroe = (id) => {
    this.heroesService.borrarHeroe(id).subscribe(data => {
      delete (this.heroes[id]);
    }, error => {
      console.error(error);
    });
  }

}