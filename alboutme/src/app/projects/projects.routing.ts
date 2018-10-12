import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';

const projectsRoutes: Routes = [
  {path: '', component: ProjectsComponent}
];

export const projectsRouting = RouterModule.forChild(projectsRoutes);
