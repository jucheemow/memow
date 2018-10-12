import { Routes, RouterModule } from '@angular/router';
import { ArtsComponent } from './arts.component';

const artsRoutes: Routes = [
  {path: '', component: ArtsComponent}
];

export const artsRouting = RouterModule.forChild(artsRoutes);
