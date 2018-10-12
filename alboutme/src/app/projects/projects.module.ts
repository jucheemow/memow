import { ProjectsComponent } from './projects.component';
import { NgModule } from '@angular/core';
import { projectsRouting } from './projects.routing';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    projectsRouting,
  ],
  exports: [ProjectsComponent],
  entryComponents: [ProjectsComponent]
})

export class ProjectsModule { }
