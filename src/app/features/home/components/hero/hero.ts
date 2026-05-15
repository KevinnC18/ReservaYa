import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {

  peopleOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

}
