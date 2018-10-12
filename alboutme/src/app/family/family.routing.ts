import { Routes, RouterModule } from '@angular/router';
import { FamilyComponent } from './family.component';

const familyRoutes: Routes = [
  {path: '', component: FamilyComponent}
];

export const familyRouting = RouterModule.forChild(familyRoutes);
