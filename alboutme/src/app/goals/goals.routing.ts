import { Routes, RouterModule } from '@angular/router';
import { GoalsComponent } from './goals.component';

const goalsRoutes: Routes = [
  {path: '', component: GoalsComponent}
];

export const goalsRouting = RouterModule.forChild(goalsRoutes);

