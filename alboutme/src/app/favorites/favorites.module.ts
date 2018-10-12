import { FavoritesComponent } from './favorites.component';
import { NgModule } from '@angular/core';
import { favoritesRouting } from './favorites.routing';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    favoritesRouting,
  ],
  exports: [FavoritesComponent],
  entryComponents: [FavoritesComponent]
})

export class FavoritesModule { }
