import { Routes, RouterModule } from '@angular/router';
import { FavoritesComponent } from './favorites.component';

const favoritesRoutes: Routes = [
  {path: '', component: FavoritesComponent}
];

export const favoritesRouting = RouterModule.forChild(favoritesRoutes);

