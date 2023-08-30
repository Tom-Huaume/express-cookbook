export class Recipe {
  imageSrc: string;
  title: string;
  ingredients: string[];

  constructor(imageSrc: string, title: string, ingredients: string[]) {
    this.imageSrc = imageSrc;
    this.title = title;
    this.ingredients = ingredients;
  }
}
