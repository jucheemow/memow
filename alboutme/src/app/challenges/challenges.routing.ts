import { Routes, RouterModule } from '@angular/router';
import { ChallengesComponent } from './challenges.component';

const challengesRoutes: Routes = [
  {path: '', component: ChallengesComponent}
];

export const challengesRouting = RouterModule.forChild(challengesRoutes);
