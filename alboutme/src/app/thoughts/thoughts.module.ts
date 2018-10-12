import { ThoughtsComponent } from './thoughts.component';
import { NgModule } from '@angular/core';
import { thoughtsRouting } from './thoughts.routing';

@NgModule({
  declarations: [ThoughtsComponent],
  imports: [
    thoughtsRouting,
  ],
  exports: [ThoughtsComponent],
  entryComponents: [ThoughtsComponent]
})

export class ThoughtsModule { }
