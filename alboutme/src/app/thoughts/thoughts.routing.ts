import { Routes, RouterModule } from '@angular/router';
import { ThoughtsComponent } from './thoughts.component';

const thoughtsRoutes: Routes = [
  {path: '', component: ThoughtsComponent}
];

export const thoughtsRouting = RouterModule.forChild(thoughtsRoutes);
