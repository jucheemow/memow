import { Routes, RouterModule } from '@angular/router';
import { InterestsComponent } from './interests.component';

const interestsRoutes: Routes = [
  {path: '', component: InterestsComponent}
];

export const interestsRouting = RouterModule.forChild(interestsRoutes);

