import { GoalsComponent } from './goals.component';
import { NgModule } from '@angular/core';
import { goalsRouting } from './goals.routing';

@NgModule({
  declarations: [GoalsComponent],
  imports: [
    goalsRouting,
  ],
  exports: [GoalsComponent],
  entryComponents: [GoalsComponent]
})

export class GoalsModule { }
