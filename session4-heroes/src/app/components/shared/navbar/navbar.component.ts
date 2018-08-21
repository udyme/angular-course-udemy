import { Component} from '@angular/core';
import { HeroesService } from "../../../services/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public heroeService: HeroesService, private router: Router) { }

  buscarHeroe(s) {
    console.log("Buscar heroe %s", s);
    this.router.navigate(["/search-result",s])
  }
}
