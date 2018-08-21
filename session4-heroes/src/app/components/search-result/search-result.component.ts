import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HeroesService, Heroe } from "../../services/heroes.service";
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  heroes: Heroe[] = [];
  termino: string;
  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService,
    private router: Router) { }

  ngOnInit() {
    //Funcionalidad para agarrar el valor que viene por parametro de url
    this.activatedRoute.params.subscribe(params => {
      this.termino = params.str;
      this.heroes = this.heroesService.buscarHeroes(this.termino);
    });
  }

  verHeroe(i) {
    this.router.navigate(["/heroe", i]);
  }

}
