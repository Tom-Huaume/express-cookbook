import {Component, OnInit} from '@angular/core';
import {Recipe} from "./models/recipe";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  recipes: Recipe[] = [];
  recipesChunks: Recipe[][] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get<any[]>('./assets/data/recipes.json').subscribe(data => {
      this.recipes = data.map(recipeData => new Recipe(recipeData.imageSrc, recipeData.title, recipeData.ingredients));
      this.recipesChunks = this.chunkArray(this.recipes, 4);
    });
  }

  // Fonction pour diviser un tableau en sous-tableaux de taille spécifiée
  private chunkArray(array: any[], size: number): any[][] {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }
}
